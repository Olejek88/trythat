import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class CityStore {
    @observable cityRegistry = observable.map();
    @observable isLoading = true;

    testData = {_id: 1, title: 'Челябинск'};

    @observable staticData = [
        {_id: 1, title: 'Челябинск'},
        {_id: 2, title: 'Екатеринбург'}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };

    @action loadCities() {
        agent.Cities.all()
            .then(action(({ cities}) => {
                this.cityRegistry.clear();
                cities.forEach(city =>
                    this.cityRegistry.set(city._id, city));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticDataOptions;
    }

    @action loadCity(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const city = this.cityRegistry.get(id);
            if (city)
                return Promise.resolve(city)
                    .catch(action(err => {
                        throw err;
                    }));
            }
        this.isLoading = true;
        agent.Cities.get(id)
            .then(action(({city}) => {
                this.cityRegistry.set(id, city);
                return city;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        return this.testData;
    }
}

export default new CityStore();
