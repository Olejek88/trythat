import {observable, action} from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class ActivityCategoryStore {
    @observable activityCategoryRegistry = observable.map();
    @observable isLoading = true;

    defaultData = {_id: '3', label: 'Экстрим'};

    /*
    @observable staticData = [
        {_id: '1', label: 'Индивидуальные занятия'},
        {_id: '2', label: 'Корпоративные события'}
    ];

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({label: x.label, value: x.id}))
    };
*/

    @action loadActivityCategories() {
        return agent.ActivityCategories.all()
            .then(action((activityCategories) => {
                this.activityCategoryRegistry.clear();
                activityCategories.forEach(activityCategory => {
                    //console.log (activityCategory);
                    this.activityCategoryRegistry.set(activityCategory.id, activityCategory)
                });
                //console.log(activityCategories);
            }))
            .finally(action(() => {
                //console.log(this.activityCategoryRegistry.get(1).title);
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.staticDataOptions;
    }

    @action loadActivityCategory(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const activityCategory = this.activityCategoryRegistry.get(id);
            if (activityCategory) return Promise.resolve(activityCategory);
        }
        this.isLoading = true;
        return agent.ActivityCategories.get(id)
            .then(action(({activityCategory}) => {
                this.activityCategoryRegistry.set(id, activityCategory);
                return activityCategory;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.testData;
    }
}

export default new ActivityCategoryStore();
