import {observable, action} from 'mobx';
import agent from '../agent';
import imageStore from "./imageStore";
import luminaryStore from "./luminaryStore";
import tagStore from "./tagStore";
import categoryStore from "./categoryStore";
import activityCategoryStore from "./activityCategoryStore";
import durationStore from "./durationStore";
import locationStore from "./locationStore";

export class ActivityStore {
    @observable isLoading = false;
    @observable activitiesRegistry = observable.map();
    @observable addActivityErrors;
    @observable predicate = {};

    staticData =
        {
            _id: '1',
            title: 'Путешествие к центру Земли на воздушном шаре',
            images: imageStore.loadImages(),
            luminary: luminaryStore.getLuminaryByUser(1),
            shortDescription: 'Вы увидите все слои Земли во время полета сквозь жерло действующего уральского вулкана в самом экстремальном путешествии Вашей жизни',
            description: 'Слушай: ни ты, ни поученее тебя, никто не знает достоверно, что творится во внутренности земного шара. Ведь до сих пор людям удалось проникнуть в глубь земли менее чем на мили под поверхностью моря! Помни, что наука идет вперед и что одна теория заменяется другою! Разве не полагали до Фурье, что температура планетных пространств постепенно уменьшается? А вот теперь дознано, что самые большие холода в области эфира не превосходят 40° или 50° ниже нуля! Почему ж ты не хочешь допустить, что и относительно внутреннего жара земли не может быть промахов? Почему ты не хочешь допустить, что на известной глубине ты достигнешь до предела, дальше которого жар уже не увеличивается? Почему?',
            tags: tagStore.loadTags(),
            category: categoryStore.loadCategory(1),
            activityCategory: activityCategoryStore.loadActivityCategory(1),
            occasion: null,
            location: locationStore.loadLocation(1),
            trending: null,
            startDate: new Date(),
            endDate: new Date(),
            minCustomers: '1',
            maxCustomers: '10',
            durations: durationStore.loadDurations()
        };

    @action loadTestActivities(count) {
        let tempArray = [];
        while (count > 0) {
            tempArray.push(this.staticData);
            count--;
        }
        return tempArray;
    }

    clear() {
        this.activitiesRegistry.clear();
    }

    getActivity(id) {
        return this.activitiesRegistry.get(id);
    }

    @action setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    $req(count = 12, start = 0) {
        //console.log(this.predicate.filter + ' ' + this.predicate.id);
        if (this.predicate.filter && this.predicate.id)
            return agent.Activities.filter(this.predicate.filter, this.predicate.id, this.predicate.limit, this.predicate.start);
        return agent.Activities.all(count, start);
    }

    @action loadActivities() {
        this.isLoading = true;
        this.$req()
            .then(action(({activities}) => {
                this.activitiesRegistry.clear();
                activities.forEach(activity => this.activitiesRegistry.set(activity._id, activity));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        // [тест] возвращаем или н-ное количество или массив из одной статике
        if (this.predicate.limit)
            return this.loadTestActivities(this.predicate.limit);
        let tempArray = [];
        tempArray.push(this.staticData);
        return tempArray;
    }

    @action loadActivity(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const activity = this.getActivity(id);
            if (activity) return Promise.resolve(activity);
        }
        this.isLoading = true;
        return agent.Activities.get(id)
            .then(action((activity) => {
                activity.images = [];
                this.activitiesRegistry.set(activity._id, activity);
                console.log(activity);
                agent.ActivityImage.all(activity.id)
                    .then(action((activityImages) => {
                        console.log(activityImages);
                        for (let activityImage in activityImages) {
                            agent.Image.get(activityImage.image_id)
                                .then(action((image) => {
                                    console.log(image);
                                    activity.images.push(image);
                                }))
                                .catch(action(err => {
                                    throw err;
                                }));
                        }
                    }))
                    .catch(action(err => {
                        throw err;
                    }));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.staticData;
    }

    @action isFavorite(activity_id, customer_id) {
        agent.Activities.isFavorite(activity_id, customer_id)
            .then(action(({answer}) => {
                return answer;
            }))
            .catch(action(err => {
                throw err;
            }));
        return (Math.random() > 0.8);
    }

    @action makeFavorite(activity_id, customer_id) {
        agent.Activities.favorite(activity_id, customer_id)
            .then(action(({answer}) => {
                return answer;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    @action unmakeFavorite(activity_id, customer_id) {
        agent.Activities.unFavorite(activity_id, customer_id)
            .then(action(({answer}) => {
                return answer;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    @action createActivity(activity) {
        return agent.Activities.create(activity)
            .then(({activity}) => {
                this.activitiesRegistry.set(activity._id, activity);
                return activity;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    @action updateActivity(activity) {
        return agent.Activities.update(activity)
            .then(({activity}) => {
                this.activitiesRegistry.set(activity._id, activity);
                return activity;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    @action deleteActivity(activity) {
        this.activitiesRegistry.delete(activity._id);
        return agent.Activities.del(activity._id)
            .catch(action(err => {
                this.loadActivities();
                throw err;
            }));
    }
}

export default new ActivityStore();
