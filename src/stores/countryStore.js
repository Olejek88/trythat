import { observable, action } from 'mobx';
import agent from '../agent';

class CountryStore {

  @observable currentCountry;
  @observable loadingCountry;
  @observable updatingCountry;
  @observable updatingCountryErrors;

  @action pullCountry() {
    this.loadingCountry = true;
    return agent.Auth.current()
      .then(action(({ country }) => { this.currentCountry = country; }))
      .finally(action(() => { this.loadingCountry = false; }))
  }

  @action updateCountry(newCountry) {
    this.updatingCountry = true;
    return agent.Auth.save(newCountry)
      .then(action(({ country }) => { this.currentCountry = country; }))
      .finally(action(() => { this.updatingCountry = false; }))
  }

  @action forgetCountry() {
    this.currentCountry = undefined;
  }

}

export default new CountryStore();
