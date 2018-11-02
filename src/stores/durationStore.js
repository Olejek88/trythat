import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class DurationStore {
    @observable isLoading = false;
    @observable durationsRegistry = observable.map();

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
        this.isLoading = true;
        agent.Duration.all()
            .then(action(({ durations}) => {
                this.durationsRegistry.clear();
                durations.forEach(duration =>
                    this.durationsRegistry.set(duration._id, duration));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticData;
    }

    @action loadDuration(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const duration = this.durationsRegistry.get(id);
            if (duration) return Promise.resolve(duration);
        }
        this.isLoading = true;
        agent.Duration.get(id)
            .then(action(({duration}) => {
                this.durationsRegistry.set(id, duration);
                return duration;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticData[id];
    }

}

export default new DurationStore();
