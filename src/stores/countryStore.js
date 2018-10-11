import { observable, action, computed } from 'mobx';
import agent from '../agent';

class CountryStore {

    testData = {_id: 1, title: 'Россия'};
    @action loadTestCountry() {
        return this.testData;
    }

    @observable staticData = [
        {_id: 1, title: 'Россия'}
    ];

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };

    @observable currentCountry;
    @observable isLoading = false;
    @observable countriesRegistry = observable.map();

    $req() {
        return agent.Countries.all();
    }

    getCountry(slug) {
        return this.countriesRegistry.get(slug);
    }

    @action loadCountry(slug, { acceptCached = false } = {}) {
        if (acceptCached) {
            const country = this.getCountry(slug);
            if (country) return Promise.resolve(country);
        }
        this.isLoading = true;
        return agent.Countries.get(slug)
            .then(action(({ country }) => {
                this.countriesRegistry.set(country.slug, country);
                return country;
            }))
            .finally(action(() => { this.isLoading = false; }));
    }

    @action loadCountries() {
        this.isLoading = true;
        return this.staticDataOptions;
/*
        return this.$req()
            .then(action(({ countries }) => {
                this.countriesRegistry.clear();
                countries.forEach(country => this.countriesRegistry.set(countries.slug, country));
            }))
            .finally(action(() => { this.isLoading = false; }));
*/
    }
}

export default new CountryStore();
