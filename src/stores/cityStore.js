import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";

class CityStore {

    @observable staticData = [
        {_id: 1, title: 'Челябинск'},
        {_id: 2, title: 'Екатеринбург'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };

    @action loadCities() {
        return this.staticDataOptions;
    }
}

export default new CityStore();
