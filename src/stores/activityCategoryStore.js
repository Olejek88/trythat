import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class ActivityCategoryStore {

    @observable staticData = [
        {_id: '1', label: 'Индивидуальные занятия'},
        {_id: '2', label: 'Корпоративные события'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadActivityCategories() {
        return this.staticDataOptions;
    }
}

export default new ActivityCategoryStore();
