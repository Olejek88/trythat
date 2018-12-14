import {action} from 'mobx';
import agent from '../agent';
import imageStore from "./imageStore";
import luminaryStore from "./luminaryStore";
import tagStore from "./tagStore";
import categoryStore from "./categoryStore";
import activityCategoryStore from "./activityCategoryStore";
import durationStore from "./durationStore";
import locationStore from "./locationStore";

export class ActivityStore {
    isLoading = false;
    activitiesRegistry = new Map();
    addActivityErrors;
    predicate = {};

    defaultData =
        {
            id: 1,
            title: 'Путешествие к центру Земли на воздушном шаре',
            images: imageStore.images,
            luminary: luminaryStore.luminary,
            shortDescription: 'Вы увидите все слои Земли во время полета сквозь жерло действующего уральского вулкана в самом экстремальном путешествии Вашей жизни',
            description: 'Слушай: ни ты, ни поученее тебя, никто не знает достоверно, что творится во внутренности земного шара. Ведь до сих пор людям удалось проникнуть в глубь земли менее чем на мили под поверхностью моря! Помни, что наука идет вперед и что одна теория заменяется другою! Разве не полагали до Фурье, что температура планетных пространств постепенно уменьшается? А вот теперь дознано, что самые большие холода в области эфира не превосходят 40° или 50° ниже нуля! Почему ж ты не хочешь допустить, что и относительно внутреннего жара земли не может быть промахов? Почему ты не хочешь допустить, что на известной глубине ты достигнешь до предела, дальше которого жар уже не увеличивается? Почему?',
            tags: tagStore.staticData,
            category: categoryStore.defaultData,
            activityCategory: activityCategoryStore.defaultData,
            occasion: null,
            location: locationStore.testData,
            trending: null,
            startDate: new Date(),
            endDate: new Date(),
            minCustomers: '1',
            maxCustomers: '10',
            durations: durationStore.staticData[0]
        };

    clear() {
        this.activitiesRegistry.clear();
    }

    getActivity(id) {
        return this.activitiesRegistry.get(id);
    }

    setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    $req(count = 12, start = 0) {
        if (this.predicate.filter && this.predicate.id)
            return agent.Activities.filter(this.predicate.filter, this.predicate.id, this.predicate.limit, this.predicate.start);
        return agent.Activities.all(count, start);
    }

    loadActivities() {
        this.isLoading = true;
        return this.$req()
            .then(action((activities) => {
                this.activitiesRegistry.clear();
                activities.forEach(activity => this.activitiesRegistry.set(activity.id, activity));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                console.log(err);
            }));
    }

     loadLocalActivities() {
        return this.$req()
            .catch(action(err => {
                throw err;
            }));
    }

     loadActivity(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const activity = this.getActivity(id);
            if (activity) return Promise.resolve(activity);
        }
        this.isLoading = true;
        return agent.Activities.get(id)
/*
            .then(action((activity) => {
                this.activitiesRegistry.set(activity._id, activity);
            }))
*/
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

     isFavorite(activity_id, customer_id) {
        agent.Activities.isFavorite(activity_id, customer_id)
            .catch(action(err => {
                throw err;
            }));
        return (Math.random() > 0.8);
    }

     makeFavorite(activity_id, customer_id) {
        agent.Activities.favorite(activity_id, customer_id)
            .catch(action(err => {
                throw err;
            }));
    }

     unmakeFavorite(activity_id, customer_id) {
        agent.Activities.unFavorite(activity_id, customer_id)
            .catch(action(err => {
                throw err;
            }));
    }

     createActivity(activity) {
        return agent.Activities.create(activity)
            .then(action((activity) => {
                console.log(activity);
                this.activitiesRegistry.set(activity.id, activity);
                return activity;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

     updateActivity(activity) {
        return agent.Activities.update(activity)
            .then(({activity}) => {
                this.activitiesRegistry.set(activity.id, activity);
                return activity;
            })
            .catch(action(err => {
                throw err;
            }))
    }

     deleteActivity(activity) {
        this.activitiesRegistry.delete(activity.id);
        return agent.Activities.del(activity.id)
            .catch(action(err => {
                this.loadActivities();
                throw err;
            }));
    }
}

export default new ActivityStore();
