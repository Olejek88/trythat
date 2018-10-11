import {observable, action, computed} from 'mobx';
import agent from '../agent';
import imageStore from "./imageStore";
import categoryStore from "./categoryStore";
import luminaryStore from "./luminaryStore";
import tagStore from "./tagStore";
import activityCategoryStore from "./activityCategoryStore";
import durationStore from "./durationStore";

const LIMIT = 10;

export class ActivityStore {

    @observable isLoading = false;
    @observable page = 0;
    @observable totalPagesCount = 0;
    @observable activitiesRegistry = observable.map();
    @observable addActivityErrors;
    @observable predicate = {};

    staticData =
        {   _id: '1',
            title: 'Путешествие к центру Земли на воздушном шаре',
            images: imageStore.getTestImages(),
            luminary: luminaryStore.getTestLuminary(),
            description: 'Слушай: ни ты, ни поученее тебя, никто не знает достоверно, что творится во внутренности земного шара. Ведь до сих пор людям удалось проникнуть в глубь земли менее чем на мили под поверхностью моря! Помни, что наука идет вперед и что одна теория заменяется другою! Разве не полагали до Фурье, что температура планетных пространств постепенно уменьшается? А вот теперь дознано, что самые большие холода в области эфира не превосходят 40° или 50° ниже нуля! Почему ж ты не хочешь допустить, что и относительно внутреннего жара земли не может быть промахов? Почему ты не хочешь допустить, что на известной глубине ты достигнешь до предела, дальше которого жар уже не увеличивается? Почему?',
            tags: tagStore.getTestTags(),
            category: categoryStore.loadTestCategory,
            activityCategory: activityCategoryStore.loadTestActivityCategory(),
            occasion: null,
            trending: null,
            startDate: new Date(),
            endDate: new Date(),
            minCustomers: '1',
            maxCustomers: '10',
            durations: durationStore.getTestDuration()
        };


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

    loadTestActivity() {
        return this.staticData;
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

    @action makeFavorite(slug) {
        const activity = this.getActivity(slug);
        if (activity && !activity.favorited) {
            activity.favorited = true;
            return agent.favorite(slug)
                .catch(action(err => {
                    activity.favorited = false;
                    throw err;
                }));
        }
        return Promise.resolve();
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

    @action unmakeFavorite(slug) {
        const activity = this.getActivity(slug);
        if (activity && activity.favorited) {
            activity.favorited = false;
            return agent.Activities.unfavorite(slug)
                .catch(action(err => {
                    activity.favorited = true;
                    throw err;
                }));
        }
        return Promise.resolve();
    }

    @action createActivity(activity) {
        return agent.create(activity)
            .then(({activity}) => {
                this.activitiesRegistry.set(activity.slug, activity);
                return activity;
            })
    }

    @action updateActivity(data) {
        return agent.update(data)
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
