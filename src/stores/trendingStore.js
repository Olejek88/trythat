import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class TrendingStore {
    @observable trendingRegistry = observable.map();
    @observable isLoading = true;

    @observable staticData = [
        {_id: '1', label: 'Недорогие'},
        {_id: '2', label: 'Новые'},
        {_id: '3', label: 'Популярные'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadTrends() {
        this.isLoading = true;
        agent.Trending.all()
            .then(action(({ categories}) => {
                this.trendingRegistry.clear();
                categories.forEach(trending =>
                    this.trendingRegistry.set(trending._id, trending));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticDataOptions;
    }

    @action loadTrending(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const trending = this.trendingRegistry.get(id);
            if (trending) return Promise.resolve(trending);
        }
        this.isLoading = true;
        agent.Trending.get(id)
            .then(action(({trending}) => {
                this.trendingRegistry.set(id, trending);
                return trending;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticData[0];
    }
}

export default new TrendingStore();
