import {observable, action, computed} from 'mobx';
import agent from '../agent';
import activityStore from "./activityStore";
import currencyStore from "./currencyStore";
import durationStore from "./durationStore";

export class ActivityListingStore {
    @observable isLoading = false;
    activityListingRegistry = new Map();

    defaultData =
        [{
            id: 1,
            customers: 1,
            activity: activityStore.defaultData,
            duration: durationStore.staticData,
            cost: 2500,
            currency: currencyStore.defaultData,
            isGroup: false
        }];

    staticData =
        [{
            id: '1',
            customers: 1,
            activity: activityStore.defaultData,
            duration: durationStore.staticData[0],
            cost: 2500,
            currency: currencyStore.defaultData,
            isGroup: false
        }, {
            id: '2',
            customers: 2,
            activity: activityStore.defaultData,
            duration: durationStore.staticData[0],
            cost: 2000,
            currency: currencyStore.defaultData,
            isGroup: false
        }];

    /*
            oneStaticData =
                {   _id: '1',
                    customers: 1,
                    activity: activityStore.loadActivity(1),
                    duration: durationStore.loadDuration(3),
                    cost: 2500,
                    currency: currencyStore.loadCurrency(1),
                    isGroup: false
                };
    */

    @action loadActivityListing(activity) {
        this.activityListingRegistry.clear();
        return agent.ActivityListing.forActivity(activity.id)
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    loadActivityListingMinimumPrice(activityListing) {
        let minimum_cost = 1000000;
        let current_currency = '';
        activityListing.forEach(function (activityListing,i) {
            let cost = activityListing.cost;
            if (cost < minimum_cost)
                minimum_cost = cost;
            current_currency = activityListing.currency.title;
        });
        if (minimum_cost===1000000) return 'не указано';
        return minimum_cost + " " + current_currency;
    }

    loadActivityListingDuration() {
        let arrayDurations = '';
        let count = 0;
        this.activityListingRegistry.forEach(function (activityListing) {
            count++;
            if (count < 5)
                arrayDurations += activityListing.duration.period + ', ';
        });
        return arrayDurations;
    }

    loadActivityListingSelectDuration() {
        let arrayDurations = [];
        this.activityListingRegistry.forEach(function (activityListing) {
            arrayDurations.push(activityListing.duration);
        });
        return arrayDurations.map(x => ({label: x.period, value: x._id}));
    }

    loadActivityListingQuantity() {
        let arrayQuantity = '';
        let count = 0;
        this.activityListingRegistry.forEach(function (activityListing) {
            count++;
            if (count < 5) {
                if (count > 1) arrayQuantity += ', ';
                arrayQuantity += activityListing.customers;
            }
        });
        return arrayQuantity;
    }

    loadTestCustomersByActivityListing() {
        let arrayCustomers = [];
        //this.staticData.forEach(function (activityListing) {
        this.activityListingRegistry.forEach(function (activityListing) {
            if (activityListing.customers >= 2 && activityListing.customers < 5)
                arrayCustomers.push({
                    label: activityListing.customers + ' человека',
                    value: activityListing.customers,
                    cost: 'Стоимость: ' + activityListing.cost + activityListing.currency.title
                });
            else
                arrayCustomers.push({
                    label: activityListing.customers + ' человек',
                    value: activityListing.customers,
                    cost: 'Стоимость: ' + activityListing.cost + activityListing.currency.title
                });
        });
        return arrayCustomers;
    }

    @computed get activities() {
        return this.activityListingRegistry.values();
    };

    clear() {
        this.activityListingRegistry.clear();
    }

    @action setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    @action createActivityListing(activity_listing) {
        return agent.ActivityListing.create(activity_listing)
            .then(({answer}) => {
                return answer;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    @action updateActivityListing(activity_listing) {
        return agent.ActivityListing.update(activity_listing)
            .then((activity_listing) => {
                this.activityListingRegistry.set(activity_listing.id, activity_listing);
                return activity_listing;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    @action deleteActivityListing(activity_listing_id) {
        this.activityListingRegistry.delete(activity_listing_id);
        return agent.ActivityListing.del(activity_listing_id)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new ActivityListingStore();
