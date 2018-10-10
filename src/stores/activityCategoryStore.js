import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class ActivityCategoryStore {

    @observable staticData = [
        {_id: '1', label: 'Индивидуальные занятия'},
        {_id: '2', label: 'Корпоративные события'}
    ];
    @observable testData = [
        {_id: '3', label: 'Экстрим'},
    ];

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadActivityCategories() {
        return this.staticDataOptions;
    }

    @action loadTestActivityCategory() {
        return this.testData;
    }
}

export default new ActivityCategoryStore();
