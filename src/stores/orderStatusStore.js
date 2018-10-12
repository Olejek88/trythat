import { action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class OrderStatusStore {

    staticData = [
        {_id: '1', title: 'Создан'},
        {_id: '2', title: 'Подтвержден'},
        {_id: '3', title: 'Выполнен'},
        {_id: '4', title: 'Архивный'}
    ];

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };

    @action loadOrderStatuses() {
        return this.staticDataOptions;
    }

    @action getTestOrderStatus() {
        return this.staticData[0];
    }
}

export default new OrderStatusStore();
