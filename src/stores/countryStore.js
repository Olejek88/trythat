import {action, observable} from 'mobx';
import agent from '../agent';

class CountryStore {
     currentCountry;
     isLoading = false;
     countryRegistry = observable.map();

    defaultData = {_id: 1, title: 'Россия'};

    /*
     staticData = [{_id: 1, title: 'Россия'}];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };
*/

     loadCountries() {
        this.isLoading = true;
        return agent.Country.all()
            .then(action(( countries) => {
                this.countryRegistry.clear();
                countries.forEach(country =>
                    this.countryRegistry.set(country._id, country));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
    }

     loadCountry(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const country = this.countryRegistry.get(id);
            if (country) return Promise.resolve(country);
        }
        this.isLoading = true;
        return agent.Country.get(id)
            .then(action(({country}) => {
                this.countryRegistry.set(id, country);
                return country;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new CountryStore();
