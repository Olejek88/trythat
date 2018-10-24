import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class OccasionStore {
    @observable occasionRegistry = observable.map();
    @observable isLoading = true;

    @observable staticData = [
        {_id: '1', label: 'На свадьбу'},
        {_id: '2', label: 'Юбилей'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadOccasions() {
        agent.Occasions.all()
            .then(action(({ occasions}) => {
                this.occasionRegistry.clear();
                occasions.forEach(occasion =>
                    this.occasionRegistry.set(occasion._id,occasion));
            }))
            .finally(action(() => { this.isLoading = false; }));
        return this.staticDataOptions;
    }

    @action loadOccasion(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const occasion = this.occasionRegistry.get(id);
            if (occasion) return Promise.resolve(occasion);
        }
        this.isLoading = true;
        agent.Occasions.get(id)
            .then(action(({occasion}) => {
                this.occasionRegistry.set(id, occasion);
                return occasion;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }));
        return this.staticData;
    }

}

export default new OccasionStore();
