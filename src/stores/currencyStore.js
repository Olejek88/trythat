import {action, observable} from 'mobx';
import agent from '../agent';

class CurrencyStore {
    isLoading = false;
    currencyRegistry = observable.map();

    defaultData = {id: 1, title: 'р.'};

    loadCurrencies() {
        this.isLoading = true;
        return agent.Currency.all()
            .then(action(({currencies}) => {
                this.currencyRegistry.clear();
                currencies.forEach(currency =>
                    this.currencyRegistry.set(currency._id, currency));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.testData;
    }

    loadCurrency(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const currency = this.currencyRegistry.get(id);
            if (currency) return Promise.resolve(currency);
        }
        this.isLoading = true;
        return agent.Currency.get(id)
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
        //return this.testData;
    }
}

export default new CurrencyStore();
