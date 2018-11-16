import {observable, action} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";
import mailStatusStore from "./mailStatusStore";
import activityStore from "./activityStore";

export class MailStore {

    @observable isLoading = false;
    @observable page = 0;
    @observable totalPagesCount = 0;
    @observable mailRegistry = observable.map();
    @observable addMailErrors;
    @observable predicate = {};

    staticData =
        [{
            _id: '1',
            fromUser: userStore.getUser(),
            toUser: userStore.getUser(),
            answerTo: null,
            status: mailStatusStore.loadMailStatus(1),
            activity: activityStore.loadActivity(1),
            createDate: new Date(),
            sendDate: new Date(),
            readDate: new Date(),
            title: 'А сколько можно взять с собой ежей?',
            text: 'Просто мои ежи не очень хорошо переносят вулканы, поэтому придется каждого упаковать. И как там внутри' +
            'вулкана с едой? И что будет если воздушный шар внутри лопнет? Я если я вешу 195кг, а каждый из тридцати ежей' +
            'ещ по 3кг? Мы точно не упадем?',
            order: null
        }, {
            _id: '2',
            fromUser: userStore.getUser(),
            toUser: userStore.getUser(),
            answerTo: 1,
            status: mailStatusStore.loadMailStatus(1),
            activity: activityStore.loadActivity(1),
            createDate: new Date(),
            sendDate: new Date(),
            readDate: new Date(),
            title: 'Re: А сколько можно взять с собой ежей?',
            text: 'Нахуй ежей, возьмите лучше черепах. С едой порядок, морквы два вагона точно возьмем. Если не взлетим, ' +
            'то скинем как балласт. Ну а если упадем, то страховка все покроет. Удачи!',
            order: null
        }];

    @action setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    $req(count = 10, start = 0) {
        if (this.predicate.filter && this.predicate.id)
            return agent.Mail.filter(this.predicate.filter, this.predicate.id, this.predicate.limit, this.predicate.start);
        return agent.Mail.filter('user', userStore.currentUser._id, count, start);
    }

    @action loadMails() {
        this.isLoading = true;
        this.$req()
            .then(action(({mails, mailsCount}) => {
                this.mailRegistry.clear();
                mails.forEach(mail => this.mailRegistry.set(mail.slug, mail));
                this.totalPagesCount = Math.ceil(mailsCount / 20);
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticData;
    }

    selectMail(id) {
        return this.mailRegistry.get(id);
    }

    @action loadMail(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const mail = this.selectMail(id);
            if (mail) return Promise.resolve(mail);
        }
        this.isLoading = true;
        return agent.Mail.get(id)
            .then(action(({mail}) => {
                this.mailRegistry.set(mail._id, mail);
                return mail;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    clear() {
        this.mailRegistry.clear();
        this.page = 0;
    }

    @action createMail(mail) {
        return agent.Mail.create(mail)
            .then(({mail}) => {
                this.mailRegistry.set(mail._id, mail);
                return mail;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    @action deleteMail(id) {
        this.mailRegistry.delete(id);
        return agent.Mail.del(id)
            .catch(action(err => {
                this.loadMails();
                throw err;
            }));
    }
}

export default new MailStore();