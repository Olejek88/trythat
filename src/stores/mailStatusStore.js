import {action, observable} from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class MailStatusStore {
    @observable mailStatusRegistry = observable.map();
    @observable isLoading = true;

    staticData = [
        {_id: '1', title: 'Создано'},
        {_id: '2', title: 'Прочитано'},
        {_id: '3', title: 'Есть ответ'},
        {_id: '4', title: 'Удалено'}
    ];

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };

    @action loadMailStatuses() {
        agent.MailStatus.all()
            .then(action(({ statuses}) => {
                this.mailStatusRegistry.clear();
                statuses.forEach(status =>
                    this.mailStatusRegistry.set(status._id,status));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticDataOptions;
    }

    @action loadMailStatus(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const status = this.mailStatusRegistry.get(id);
            if (status) return Promise.resolve(status);
        }
        this.isLoading = true;
        agent.MailStatus.get(id)
            .then(action(({status}) => {
                this.mailStatusRegistry.set(id, status);
                return status;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticData[0];
    }

}

export default new MailStatusStore();
