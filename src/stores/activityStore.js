import {observable, action, computed} from 'mobx';
import agent from '../agent';

const LIMIT = 10;

export class ActivityStore {

    @observable isLoading = false;
    @observable page = 0;
    @observable totalPagesCount = 0;
    @observable activitiesRegistry = observable.map();
    @observable predicate = {};

    @computed get activities() {
        return this.activitiesRegistry.values();
    };

    clear() {
        this.activitiesRegistry.clear();
        this.page = 0;
    }

    getActivity(slug) {
        return this.activitiesRegistry.get(slug);
    }

    @action setPage(page) {
        this.page = page;
    }

    @action setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    $req() {
        if (this.predicate.myFeed) return agent.Activities.feed(this.page, LIMIT);
        if (this.predicate.favoritedBy) return agent.Activities.favoritedBy(this.predicate.favoritedBy, this.page, LIMIT);
        if (this.predicate.tag) return agent.Activities.byTag(this.predicate.tag, this.page, LIMIT);
        if (this.predicate.author) return agent.Activities.byLuminary(this.predicate.author, this.page, LIMIT);
        return agent.Activities.all(this.page, LIMIT, this.predicate);
    }

    @action loadActivities() {
        this.isLoading = true;
        return this.$req()
            .then(action(({activities, activitiesCount}) => {
                this.activitiesRegistry.clear();
                activities.forEach(activity => this.activitiesRegistry.set(activity.slug, activity));
                this.totalPagesCount = Math.ceil(activitiesCount / LIMIT);
            }))
            .finally(action(() => {
                this.isLoading = false;
            }));
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

    @action makeFavorite(slug) {
        const activity = this.getArticle(slug);
        if (activity && !activity.favorited) {
            activity.favorited = true;
            activity.favoritesCount++;
            return agent.Articles.favorite(slug)
                .catch(action(err => {
                    activity.favorited = false;
                    activity.favoritesCount--;
                    throw err;
                }));
        }
        return Promise.resolve();
    }

    @action unmakeFavorite(slug) {
        const activity = this.getArticle(slug);
        if (activity && activity.favorited) {
            activity.favorited = false;
            activity.favoritesCount--;
            return agent.Activities.unfavorite(slug)
                .catch(action(err => {
                    activity.favorited = true;
                    activity.favoritesCount++;
                    throw err;
                }));
        }
        return Promise.resolve();
    }

    @action createActivity(activity) {
        return agent.Articles.create(activity)
            .then(({activity}) => {
                this.articlesRegistry.set(activity.slug, activity);
                return activity;
            })
    }

    @action updateActivity(data) {
        return agent.Activity.update(data)
            .then(({activity}) => {
                this.activitiesRegistry.set(activity.slug, activity);
                return activity;
            })
    }

    @action deleteActivities(slug) {
        this.activitiesRegistry.delete(slug);
        return agent.Activities.del(slug)
            .catch(action(err => {
                this.loadActivities();
                throw err;
            }));
    }
}

export default new ActivityStore();
