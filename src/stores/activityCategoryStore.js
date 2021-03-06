import {action} from 'mobx';
import agent from "../agent";

class ActivityCategoryStore {
    activityCategoryRegistry = new Map();
    isLoading = true;

    defaultData = {id: 3, label: 'Экстрим'};

    loadActivityCategories() {
        if (this.activityCategoryRegistry.size > 0)
            return Promise.resolve(this.activityCategoryRegistry);
        return agent.ActivityCategories.all()
            .then(action((activityCategories) => {
                this.activityCategoryRegistry.clear();
                activityCategories.forEach(activityCategory => {
                    this.activityCategoryRegistry.set(activityCategory.id, activityCategory)
                });
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    loadActivityCategory(id) {
        if (this.activityCategoryRegistry.size > 0)
            return this.activityCategoryRegistry.get(parseInt(id, 10));
        /*
        if (acceptCached) {
            const activityCategory = this.activityCategoryRegistry.get(id);
            if (activityCategory) return Promise.resolve(activityCategory);
        }
*/
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
