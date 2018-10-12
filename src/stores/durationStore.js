import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class DurationStore {

    staticData = [
        {_id: '1', period: '1час'},
        {_id: '2', period: '2часа'},
        {_id: '3', period: '3часа'},
        {_id: '4', period: '4часа'}
    ];

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadDurations() {
        return this.staticDataOptions;
    }

    @action getTestDuration() {
        return this.staticData;
    }
}

export default new DurationStore();
