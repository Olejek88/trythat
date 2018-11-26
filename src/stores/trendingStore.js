import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class TrendingStore {
    trendingRegistry = new Map();
    @observable isLoading = true;

    @observable staticData = [
        {id: 1, label: 'Недорогие'},
        {id: 2, label: 'Новые'},
        {id: 3, label: 'Популярные'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadTrends() {
        this.isLoading = true;
        return agent.Trending.all()
            .then(action((categories) => {
                this.trendingRegistry.clear();
                categories.forEach(trending =>
                    this.trendingRegistry.set(trending.id, trending));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        //return this.staticDataOptions;
    }

    @action loadTrending(id) {
        if (this.trendingRegistry.size>0)
            return this.trendingRegistry.get(parseInt(id,10));
        this.isLoading = true;
        return agent.Trending.get(id)
            .then(action((trending) => {
                this.trendingRegistry.set(id, trending);
                return trending;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.staticData[0];
    }
}

export default new TrendingStore();
