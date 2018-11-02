import { action, observable } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class OrderStatusStore {
    @observable orderStatusRegistry = observable.map();
    @observable isLoading = true;

    staticData = [
        {_id: '1', title: 'Создан'},
        {_id: '2', title: 'Подтвержден'},
        {_id: '3', title: 'Выполнен'},
        {_id: '4', title: 'Архивный'}
    ];

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };

    @action getTestOrderStatus() {
        return this.staticData[0];
    }

    @action loadOrderStatuses() {
        agent.OrderStatus.all()
            .then(action(({ statuses}) => {
                this.orderStatusRegistry.clear();
                statuses.forEach(status =>
                    this.orderStatusRegistry.set(status._id,status));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticDataOptions;
    }

    @action loadOrderStatus(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const status = this.orderStatusRegistry.get(id);
            if (status) return Promise.resolve(status);
        }
        this.isLoading = true;
        agent.OrderStatus.get(id)
            .then(action(({status}) => {
                this.orderStatusRegistry.set(id, status);
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

export default new OrderStatusStore();
