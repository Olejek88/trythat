import {action} from 'mobx';
import agent from "../agent";

class CityStore {
    cityRegistry = new Map();
    isLoading = true;

    defaultData = {_id: 1, title: 'Челябинск'};

    /*
         staticData = [
            {_id: 1, title: 'Челябинск'},
            {_id: 2, title: 'Екатеринбург'}
        ];
        @computed get staticDataOptions() {
            return this.staticData.map(x => ({ label: x.title, value: x.id }))
        };*/

    loadCities() {
        if (this.cityRegistry.size > 0)
            return Promise.resolve(this.cityRegistry);
        return agent.Cities.all()
            .then(action((cities) => {
                this.cityRegistry.clear();
                cities.forEach(city =>
                    this.cityRegistry.set(city.id, city));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    loadCity(id) {
        if (this.cityRegistry.size > 0)
            return this.cityRegistry.get(parseInt(id, 10));
        /*
                        return Promise.resolve(city)
                            .catch(action(err => {
                                throw err;
                            }));
        */
        this.isLoading = true;
        return agent.Cities.get(id)
            .then(action((city) => {
                this.cityRegistry.set(id, city);
                return city;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new CityStore();
