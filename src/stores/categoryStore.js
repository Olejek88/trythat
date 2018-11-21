import { observable, action } from 'mobx';
import agent from "../agent";

class CategoryStore {
    @observable categoryRegistry = observable.map();
    @observable isLoading = true;

    defaultData = {id: 2, title: 'Туризм'};

    @action loadCategories() {
        return agent.Categories.all()
            .then(action((categories) => {
                this.categoryRegistry.clear();
                categories.forEach(category =>
                    this.categoryRegistry.set(category.id, category));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
    }

    @action loadCategory(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const category = this.categoryRegistry.get(id);
            if (category) return Promise.resolve(category);
        }
        this.isLoading = true;
        return agent.Categories.get(id)
            .then(action((category) => {
                this.categoryRegistry.set(id, category);
                return category;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new CategoryStore();
