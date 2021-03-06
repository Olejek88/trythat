import {action} from 'mobx';
import agent from "../agent";

class DurationStore {
    isLoading = false;
    durationsRegistry = new Map();

    staticData = [
        {id: '1', period: '1 час'},
        {id: '2', period: '2 часа'},
        {id: '3', period: '3 часа'},
        {id: '4', period: '4 часа'}
    ];

    get staticDataOptions() {
        return this.staticData.map(x => ({label: x.label, value: x.id}))
    };

    loadDurations() {
        this.isLoading = true;
        /*
                if (this.durationsRegistry.length>0)
                    return Promise.resolve(this.durationsRegistry);
        */
        return agent.Duration.all()
        /*
                    .finally(action((durations) => {
                        this.durationsRegistry.clear();
                        durations.forEach(duration =>
                            this.durationsRegistry.set(duration.id, duration));
                        this.isLoading = false;
                    }))
        */
            .catch(action(err => {
                throw err;
            }));
    }

    loadDuration(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const duration = this.durationsRegistry.get(id);
            if (duration) return Promise.resolve(duration);
        }
        this.isLoading = true;
        return agent.Duration.get(id)
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
    }

}

export default new DurationStore();
