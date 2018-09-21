import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class CategoryStore {

    @observable staticData = [
        {_id: '1', label: 'Еда и кулинария'},
        {_id: '2', label: 'Туризм'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadCategories() {
        return this.staticDataOptions;
    }
}

export default new CategoryStore();
