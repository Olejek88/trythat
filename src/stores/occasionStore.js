import {action, observable} from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class OccasionStore {
    occasionRegistry = observable.map();
    isLoading = true;

     staticData = [
        {id: 1, label: 'На свадьбу'},
        {id: 2, label: 'Юбилей'}
    ];
    get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    loadOccasions() {
        return agent.Occasions.all()
            .then(action((occasions) => {
                this.occasionRegistry.clear();
                occasions.forEach(occasion =>
                    this.occasionRegistry.set(occasion.id,occasion));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        //return this.staticDataOptions;
    }

    loadOccasion(id) {
        if (this.occasionRegistry.size>0)
            return this.occasionRegistry.get(parseInt(id,10));
        this.isLoading = true;
        return agent.Occasions.get(id)
            .then(action((occasion) => {
                this.occasionRegistry.set(id, occasion);
                return occasion;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.staticData;
    }

}

export default new OccasionStore();
