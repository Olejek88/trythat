import {observable, action, computed} from 'mobx';
import agent from '../agent';
import durationStore from "./durationStore";
import activityStore from "./activityStore";
import currencyStore from "./currencyStore";

export class ActivityListingStore {

    @observable isLoading = false;
    @observable activityListingRegistry = observable.map();
    @observable addActivityErrors;
    @observable predicate = {};

    staticData =
        [{   _id: '1',
            customers: 1,
            duration: durationStore.getTestDurationOne(),
            activity: activityStore.loadTestActivity(),
            cost: 2500,
            currency: currencyStore.loadTestCurrency(),
            isGroup: false
        },{   _id: '2',
            customers: 2,
            duration: durationStore.getTestDurationTwo(),
            activity: activityStore.loadTestActivity(),
            cost: 2000,
            currency: currencyStore.loadTestCurrency(),
            isGroup: false
        }];

    loadTestActivityListing() {
        return this.staticData;
    }

    @computed get staticDataDurations() {
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

    getActivity(activity_listing_id) {
        return this.activityListingRegistry.get(activity_listing_id);
    }

    @action setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    @action loadActivity(slug, {acceptCached = false} = {}) {
        if (acceptCached) {
            const activity = this.getActivity(slug);
            if (activity) return Promise.resolve(activity);
        }
        this.isLoading = true;
        return agent.Activities.get(slug)
            .then(action(({activity}) => {
                this.activitiesRegistry.set(activity.slug, activity);
                return activity;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }));
    }

    @action loadActivities(slug, param, {acceptCached = false} = {}) {
        if (acceptCached) {
            const activities = this.getActivities(slug,param);
            if (activities) return Promise.resolve(activities);
        }
        this.isLoading = true;
        return agent.Activities.get(slug,param)
            .then(action(({activities}) => {
                //this.activitiesRegistry.set(activity.slug, activity);
                return activities;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }));
    }

    @action storeActivity(activity) {
        if (activity) {
            return agent.Activities.create(activity)
                .catch(action(err => {
                    throw err;
                }));
        }
        return Promise.resolve();
    }

    @action createActivity(activity) {
        return agent.create(activity)
            .then(({activity}) => {
                this.activityListingRegistry.set(activity.slug, activity);
                return activity;
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
