import {action} from 'mobx';
import agent from '../agent';
import activityStore from "./activityStore";
import currencyStore from "./currencyStore";
import durationStore from "./durationStore";

export class ActivityListingStore {
    isLoading = false;
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

    loadActivityListing(activity) {
        this.activityListingRegistry.clear();
        return agent.ActivityListing.forActivity(activity.id)
            .catch(action(err => {
                throw err;
            }));
    }

    loadActivityListingMinimumPrice(activityListing) {
        let minimum_cost = 1000000;
        let current_currency = '';
        if (activityListing !== undefined) {
            activityListing.forEach(function (activityListing) {
                let cost = activityListing.cost;
                if (cost < minimum_cost)
                    minimum_cost = cost;
                current_currency = activityListing.currency.title;
            });
        }
        if (minimum_cost === 1000000) return 'не указано';
        return minimum_cost + " " + current_currency;
    }

    loadActivityListingCustomers(activityListing) {
        let min = 10;
        let max = 1;
        activityListing.forEach(function (activityListing) {
            let customer = activityListing.customers;
            if (customer > max)
                max = customer;
            if (customer < min)
                min = customer;
        });
        if (min === 10 && max === 1) return 'не указано';
        if (min === max) return max;
        return min + "-" + max;
    }

    loadActivityListingDurations(activityListing) {
        let max = 1;
        let max_duration = {seconds: 1};
        let min_duration = {seconds: 100000};
        activityListing.forEach(function (activityListing) {
            max = activityListing.duration.duration;
            if (activityListing.duration.seconds > max_duration.seconds)
                max_duration = activityListing.duration;
            if (activityListing.duration.seconds < min_duration.seconds)
                min_duration = activityListing.duration;
        });
        if (max === 1) return 'не указано';
        return min_duration.duration + "-" + max_duration.duration;
    }

    loadActivityListingList(activityListing) {
        let arrayListing = [];
        activityListing.forEach(function (activity) {
            arrayListing.push({label: activity.duration.duration + '/' + activity.customers + ' человек',
                value: activity.id, cost: 'Сумма '+activity.cost+'р.', price: activity.cost});
        });
        return arrayListing;
    }

    loadActivityListingSelectDurations(activityListing) {
        let arrayDurations = [];
        activityListing.forEach(function (activity) {
            arrayDurations.push(activity.duration);
        });
        return arrayDurations.map(x => ({label: x.duration, value: x.id}));
    }

    loadTestCustomersByActivityListing(listing) {
        let arrayCustomers = [];
        //this.staticData.forEach(function (activityListing) {
        listing.forEach(function (activityListing) {
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

    get activities() {
        return this.activityListingRegistry.values();
    };

    clear() {
        this.activityListingRegistry.clear();
    }

    setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    createActivityListing(activity_listing) {
        return agent.ActivityListing.create(activity_listing)
            .catch(action(err => {
                throw err;
            }))
    }

    updateActivityListing(activity_listing) {
        return agent.ActivityListing.update(activity_listing)
            .then((activity_listing) => {
                this.activityListingRegistry.set(activity_listing.id, activity_listing);
                return activity_listing;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    deleteActivityListing(activity_listing_id) {
        this.activityListingRegistry.delete(activity_listing_id);
        return agent.ActivityListing.del(activity_listing_id)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new ActivityListingStore();
