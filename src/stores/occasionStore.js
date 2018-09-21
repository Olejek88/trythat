import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class OccasionStore {
    @observable staticData = [
        {_id: '1', label: 'На свадьбу'},
        {_id: '2', label: 'Юбилей'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadOccasions() {
        return this.staticDataOptions;
    }
}

export default new OccasionStore();
