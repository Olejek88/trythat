import { observable, action } from 'mobx';
import agent from '../agent';

class CurrencyStore {
    @observable isLoading = false;
    @observable currencyRegistry = observable.map();

    testData = {_id: 1, title: 'р.'};

    @action loadCurrencies() {
        this.isLoading = true;
        agent.Currency.all()
            .then(action(({ currencies}) => {
                this.currencyRegistry.clear();
                currencies.forEach(currency =>
                    this.currencyRegistry.set(currency._id, currency));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.testData;
    }

    @action loadCurrency(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const currency = this.currencyRegistry.get(id);
            if (currency) return Promise.resolve(currency);
        }
        this.isLoading = true;
        agent.Currency.get(id)
            .then(action(({currency}) => {
                this.currencyRegistry.set(id, currency);
                return currency;
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

export default new CurrencyStore();
