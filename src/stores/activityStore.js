import {observable, action, computed} from 'mobx';
import agent from '../agent';
import imageStore from "./imageStore";
import categoryStore from "./categoryStore";
import luminaryStore from "./luminaryStore";
import tagStore from "./tagStore";
import activityCategoryStore from "./activityCategoryStore";
import durationStore from "./durationStore";
import locationStore from "./locationStore";
import activityListingStore from "./activityListingStore";
import wishListStore from "./wishListStore";

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
            shortDescription: 'Вы увидите все слои Земли во время полета сквозь жерло действующего уральского вулкана в самом экстремальном путешествии Вашей жизни',
            description: 'Слушай: ни ты, ни поученее тебя, никто не знает достоверно, что творится во внутренности земного шара. Ведь до сих пор людям удалось проникнуть в глубь земли менее чем на мили под поверхностью моря! Помни, что наука идет вперед и что одна теория заменяется другою! Разве не полагали до Фурье, что температура планетных пространств постепенно уменьшается? А вот теперь дознано, что самые большие холода в области эфира не превосходят 40° или 50° ниже нуля! Почему ж ты не хочешь допустить, что и относительно внутреннего жара земли не может быть промахов? Почему ты не хочешь допустить, что на известной глубине ты достигнешь до предела, дальше которого жар уже не увеличивается? Почему?',
            tags: tagStore.getTestTags(),
            category: categoryStore.loadTestCategory,
            activityCategory: activityCategoryStore.loadTestActivityCategory(),
            occasion: null,
            location: locationStore.loadTestLocation(),
            trending: null,
            startDate: new Date(),
            endDate: new Date(),
            minCustomers: '1',
            maxCustomers: '10',
            durations: durationStore.getTestDuration()
        };

    @action loadTestActivitiesLuminary(luminary) {
        this.isLoading = true;
        return this.staticData;
    }

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
        if (this.predicate.user) return agent.Activities.byLuminary(this.predicate.author, this.page, LIMIT);
        return agent.Activities.all(this.page, LIMIT, this.predicate);
    }

    $reqLuminary(luminary) {
        return agent.Activities.byLuminary(luminary, LIMIT);
    }

    loadTestActivity() {
        return this.staticData;
    }

    loadTestActivityMininumPrice(activity) {
        return activityListingStore.loadTestActivityListingMininunPrice(activity);
    }

    @action loadActivities() {
        this.isLoading = true;
        return this.$req()
            .then(action(({ activities, activitiesCount }) => {
                this.activitiesRegistry.clear();
                activities.forEach(activity => this.activitiesRegistry.set(activity.slug, activity));
                this.totalPagesCount = Math.ceil(activitiesCount / LIMIT);
            }))
            .finally(action(() => { this.isLoading = false; }));
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

    @action loadActivitiesLuminary(luminary) {
        this.isLoading = true;
        return this.$reqLuminary(luminary)
            .then(action(({ activities, activitiesCount }) => {
                this.activitiesRegistry.clear();
                activities.forEach(activity => this.activitiesRegistry.set(activity.slug, activity));
                this.totalPagesCount = Math.ceil(activitiesCount / LIMIT);
            }))
            .finally(action(() => { this.isLoading = false; }));
    }

    @action isFavorite(activity_id, customer_id) {
        const activity = this.getActivity(activity_id);
        if (activity) {
            const wishListActivity = wishListStore.loadTestWishList();
            return !!wishListActivity;
        }
        return Promise.resolve();
    }

    @action makeFavorite(activity_id) {
        const activity = this.getActivity(activity_id);
        if (activity) {
            const wishListActivity = wishListStore.loadTestWishList();
            if (!wishListActivity) {
                return agent.favorite(activity_id)
                    .catch(action(err => {
                        throw err;
                    }));
            }
        }
        return Promise.resolve();
    }

    @action unmakeFavorite(activity_id) {
        const activity = this.getActivity(activity_id);
        if (activity) {
            return agent.Activities.unmakeFavorite(activity_id)
                .catch(action(err => {
                    activity.favorited = true;
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
                this.loadActivitiesLuminary();
                throw err;
            }));
    }
}

export default new ActivityStore();
