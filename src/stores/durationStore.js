import { action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class DurationStore {

    staticData = [
        {_id: '1', period: '1 час'},
        {_id: '2', period: '2 часа'},
        {_id: '3', period: '3 часа'},
        {_id: '4', period: '4 часа'}
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

    @action getTestDurationOne() {
        return this.staticData[0];
    }

    @action getTestDurationTwo() {
        return this.staticData[1];
    }
}

export default new DurationStore();
