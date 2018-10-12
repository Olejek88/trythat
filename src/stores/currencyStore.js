import { observable, action } from 'mobx';
import agent from '../agent';

class CurrencyStore {

    testData = {_id: 1, title: 'р.'};
    @action loadTestCurrency() {
        return this.testData;
    }

    @observable isLoading = false;
    @observable currencyRegistry = observable.map();

    getCurrency(slug) {
        return this.currencyRegistry.get(slug);
    }

    @action loadCurrency(slug, { acceptCached = false } = {}) {
        if (acceptCached) {
            const currency = this.getCurrency(slug);
            if (currency) return Promise.resolve(currency);
        }
        this.isLoading = true;
        return agent.Currency.get(slug)
            .then(action(({ currency }) => {
                this.currencyRegistry.set(currency.slug, currency);
                return currency;
            }))
            .finally(action(() => { this.isLoading = false; }));
    }
}

export default new CurrencyStore();
