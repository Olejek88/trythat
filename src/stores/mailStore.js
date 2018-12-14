import {action} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";
import mailStatusStore from "./mailStatusStore";
import activityStore from "./activityStore";

export class MailStore {

     isLoading = false;
     page = 0;
     totalPagesCount = 0;
    mailRegistry = new Map();
     addMailErrors;
     predicate = {};

    staticData =
        [{
            _id: '1',
            fromUser: userStore.currentUser,
            toUser: userStore.currentUser,
            answerTo: null,
            status: mailStatusStore.staticData[0],
            activity: activityStore.defaultData,
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
            fromUser: userStore.currentUser,
            toUser: userStore.currentUser,
            answerTo: 1,
            status: mailStatusStore.staticData[0],
            activity: activityStore.defaultData,
            createDate: new Date(),
            sendDate: new Date(),
            readDate: new Date(),
            title: 'Re: А сколько можно взять с собой ежей?',
            text: 'Нахуй ежей, возьмите лучше черепах. С едой порядок, морквы два вагона точно возьмем. Если не взлетим, ' +
            'то скинем как балласт. Ну а если упадем, то страховка все покроет. Удачи!',
            order: null
        }];

     setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    $req(count = 10, start = 0) {
        if (this.predicate.filter && this.predicate.id)
            return agent.Mail.filter(this.predicate.filter, this.predicate.id, this.predicate.limit, this.predicate.start);
        return agent.Mail.filter('from_user', userStore.currentUser.id, count, start);
    }

     loadMails() {
        this.isLoading = true;
        return this.$req()
            .then(action((mails) => {
                this.mailRegistry.clear();
                mails.forEach(mail => this.mailRegistry.set(mail.id, mail));
                this.totalPagesCount = Math.ceil(mails.length / 20);
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    selectMail(id) {
        return this.mailRegistry.get(id);
    }

     loadMail(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const mail = this.selectMail(id);
            if (mail) return Promise.resolve(mail);
        }
        this.isLoading = true;
        return agent.Mail.get(id)
            .then(action(({mail}) => {
                this.mailRegistry.set(mail.id, mail);
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

     createMail(mail) {
        return agent.Mail.create(mail)
            .then(({mail}) => {
                this.mailRegistry.set(mail.id, mail);
                return mail;
            })
            .catch(action(err => {
                throw err;
            }))
    }

     deleteMail(id) {
        this.mailRegistry.delete(id);
        return agent.Mail.del(id)
            .catch(action(err => {
                this.loadMails();
                throw err;
            }));
    }
}

export default new MailStore();
