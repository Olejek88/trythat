import {observable, action, computed} from 'mobx';
import agent from '../agent';
import activityStore from "./activityStore";
import currencyStore from "./currencyStore";
import durationStore from "./durationStore";

export class ActivityListingStore {

    @observable isLoading = false;
    @observable activityListingRegistry = observable.map();
    @observable addActivityErrors;
    @observable predicate = {};

    staticData =
        [{   _id: '1',
            customers: 1,
            activity: activityStore.loadTestActivity(),
            duration: durationStore.getTestDurationOne(),
            cost: 2500,
            currency: currencyStore.loadTestCurrency(),
            isGroup: false
        },{   _id: '2',
            customers: 2,
            activity: activityStore.loadTestActivity(),
            duration: durationStore.getTestDurationTwo(),
            cost: 2000,
            currency: currencyStore.loadTestCurrency(),
            isGroup: false
        }];

    loadTestActivityListing() {
        return this.staticData;
    }

    loadTestActivityListingMinimumPrice(activity) {
        return this.staticData[1].cost + " " + this.staticData[1].currency.title;
    }

    get staticDataDurations() {
        return this.staticData.map(x => ({ label: x.title, value: x._id }))
    };

    loadTestDurationByActivityListing() {
        let arrayDurations = [];
        this.staticData.forEach(function (activityListing) {
            arrayDurations.push({ label: activityListing.duration.period,
                value: activityListing.duration._id,
                cost: 'Стоимость: ' + activityListing.cost + activityListing.currency.title});
        });
        return arrayDurations;
    }

    loadTestCustomersByActivityListing() {
        let arrayCustomers = [];
        this.staticData.forEach(function (activityListing) {
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

    @action createActivityListing(activity, customer) {
        return agent.create(activity, customer)
            .then(({activityListing}) => {
                this.activityListingRegistry.set(activityListing.slug, activityListing);
                return activityListing;
            })
    }

    @action updateActivityListing(data) {
        return agent.update(data)
            .then(({activity_listing}) => {
                this.activityListingRegistry.set(activity_listing);
                return activity_listing;
            })
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
