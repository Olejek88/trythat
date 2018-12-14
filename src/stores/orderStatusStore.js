import {action, observable} from 'mobx';
import agent from "../agent";

class OrderStatusStore {
    orderStatusRegistry = observable.map();
    isLoading = true;

    staticData = [
        {id: '1', title: 'Создан'},
        {id: '2', title: 'Подтвержден'},
        {id: '3', title: 'Выполнен'},
        {id: '4', title: 'Архивный'}
    ];

    get staticDataOptions() {
        return this.staticData.map(x => ({label: x.title, value: x._id}))
    };

    getTestOrderStatus() {
        return this.staticData[0];
    }

    loadOrderStatuses() {
        agent.OrderStatus.all()
            .then(action(({statuses}) => {
                this.orderStatusRegistry.clear();
                statuses.forEach(status =>
                    this.orderStatusRegistry.set(status._id, status));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticDataOptions;
    }

    loadOrderStatus(id, {acceptCached = false} = {}) {
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
