import {observable, action, computed} from 'mobx';
import agent from '../agent';
import activityStore from "./activityStore";
import currencyStore from "./currencyStore";
import durationStore from "./durationStore";

export class ActivityListingStore {
    @observable isLoading = false;
    @observable activityListingRegistry = observable.map();

    staticData =
        [{   _id: '1',
            customers: 1,
            activity: activityStore.loadActivity(1),
            duration: durationStore.loadDuration(1),
            cost: 2500,
            currency: currencyStore.loadCurrency(1),
            isGroup: false
        },{   _id: '2',
            customers: 2,
            activity: activityStore.loadActivity(1),
            duration: durationStore.loadDuration(2),
            cost: 2000,
            currency: currencyStore.loadCurrency(1),
            isGroup: false
        }];

    oneStaticData =
        {   _id: '1',
            customers: 1,
            activity: activityStore.loadActivity(1),
            duration: durationStore.loadDuration(3),
            cost: 2500,
            currency: currencyStore.loadCurrency(1),
            isGroup: false
        };

    @action loadActivityListing(activity) {
        agent.ActivityListing.forActivity(activity._id)
            .then(action(({ activityListing}) => {
                this.activityListingRegistry.clear();
                activityListing.forEach(activityListing =>
                    this.activityListingRegistry.set(activityListing._id, activityListing));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        this.staticData.forEach(activityListing =>
            this.activityListingRegistry.set(activityListing._id,activityListing));
        return this.staticData;
    }

    loadTestOneActivityListing() {
        return this.oneStaticData;
    }

    loadActivityListingMinimumPrice() {
        let minimum_cost = 1000000;
        let current_currency = '';
        this.activityListingRegistry.forEach(function(activityListing) {
            if (activityListing.cost < minimum_cost)
                minimum_cost = activityListing.cost;
            current_currency = activityListing.currency.title;
        });
        return minimum_cost + " " + current_currency;
        //return this.staticData[1].cost + " " + this.staticData[1].currency.title;
    }

    loadActivityListingDuration() {
        let arrayDurations = '';
        let count=0;
        this.activityListingRegistry.forEach(function (activityListing) {
            count++;
            if (count<5)
                arrayDurations+=activityListing.duration.period+', ';
        });
        return arrayDurations;
    }

    loadActivityListingSelectDuration() {
        let arrayDurations=[];
        this.activityListingRegistry.forEach(function (activityListing) {
            arrayDurations.push(activityListing.duration);
        });
        return arrayDurations.map(x => ({ label: x.period, value: x._id }));
    }

    loadActivityListingQuantity() {
        let arrayQuantity = '';
        let count=0;
        this.activityListingRegistry.forEach(function (activityListing) {
            count++;
            if (count<5) {
                if (count>1) arrayQuantity+=', ';
                arrayQuantity += activityListing.customers;
            }
        });
        return arrayQuantity;
    }

    loadTestCustomersByActivityListing() {
        let arrayCustomers = [];
        //this.staticData.forEach(function (activityListing) {
        this.activityListingRegistry.forEach(function (activityListing) {
            if (activityListing.customers>=2 && activityListing.customers<5)
                arrayCustomers.push({ label: activityListing.customers + ' человека',
                    value: activityListing.customers,
                    cost: 'Стоимость: ' + activityListing.cost + activityListing.currency.title});
            else
                arrayCustomers.push({ label: activityListing.customers + ' человек',
                    value: activityListing.customers,
                    cost: 'Стоимость: ' + activityListing.cost + activityListing.currency.title});
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

    @action updateActivityListing(activity_listing_id,activity_listing) {
        return agent.ActivityListing.update(activity_listing_id,activity_listing)
            .then(({activity_listing}) => {
                this.activityListingRegistry.set(activity_listing_id,activity_listing);
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
