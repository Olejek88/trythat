import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class TrendingStore {
    @observable staticData = [
        {_id: '1', label: 'Недорогие'},
        {_id: '2', label: 'Новые'},
        {_id: '3', label: 'Популярные'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadTrending() {
        return this.staticDataOptions;
    }
}

export default new TrendingStore();
