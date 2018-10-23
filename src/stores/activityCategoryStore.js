import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class ActivityCategoryStore {
    @observable activityCategoryRegistry = observable.map();
    @observable isLoading = true;

    @observable staticData = [
        {_id: '1', label: 'Индивидуальные занятия'},
        {_id: '2', label: 'Корпоративные события'}
    ];
    testData = {_id: '3', label: 'Экстрим'};

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadActivityCategories() {
        agent.ActivityCategories.all()
            .then(action(({ activityCategories}) => {
                this.activityCategoryRegistry.clear();
                activityCategories.forEach(activityCategory =>
                    this.activityCategoryRegistry.set(activityCategory._id,activityCategory));
            }))
            .finally(action(() => { this.isLoading = false; }));
        return this.staticDataOptions;
    }

    @action loadActivityCategory(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const activityCategory = this.activityCategoryRegistry.get(id);
            if (activityCategory) return Promise.resolve(activityCategory);
        }
        this.isLoading = true;
        agent.ActivityCategories.get(id)
            .then(action(({activityCategory}) => {
                this.activityCategoryRegistry.set(id, activityCategory);
                return activityCategory;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }));
        return this.testData;
    }
}

export default new ActivityCategoryStore();
