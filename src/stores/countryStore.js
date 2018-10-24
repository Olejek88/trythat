import { observable, action } from 'mobx';
import agent from '../agent';

class CountryStore {
    @observable currentCountry;
    @observable isLoading = false;
    @observable countryRegistry = observable.map();

    testData = {_id: 1, title: 'Россия'};
    @observable staticData = {_id: 1, title: 'Россия'};

    staticDataOptions() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };
    
    @action loadCountries() {
        this.isLoading = true;
        agent.Country.all()
            .then(action(({ cities}) => {
                this.countryRegistry.clear();
                cities.forEach(country =>
                    this.countryRegistry.set(country._id, country));
            }))
            .finally(action(() => { this.isLoading = false; }));
        return this.staticDataOptions;
    }

    @action loadCountry(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const country = this.countryRegistry.get(id);
            if (country) return Promise.resolve(country);
        }
        this.isLoading = true;
        agent.Country.get(id)
            .then(action(({country}) => {
                this.countryRegistry.set(id, country);
                return country;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }));
        return this.testData;
    }

}

export default new CountryStore();
