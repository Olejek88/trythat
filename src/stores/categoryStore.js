import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";

class CategoryStore {
    @observable categoryRegistry = observable.map();
    @observable isLoading = true;

    @observable staticData = [
        {_id: '1', label: 'Еда и кулинария'},
        {_id: '2', label: 'Туризм'}
    ];

    testData = {_id: '2', title: 'Туризм'};

    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadCategories() {
        agent.Categories.all()
            .then(action(({ categories}) => {
                this.categoryRegistry.clear();
                categories.forEach(category =>
                    this.categoryRegistry.set(category._id, category));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticDataOptions;
    }

    @action loadCategory(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const category = this.categoryRegistry.get(id);
            if (category) return Promise.resolve(category);
        }
        this.isLoading = true;
        agent.Categories.get(id)
            .then(action(({category}) => {
                this.categoryRegistry.set(id, category);
                return category;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        return this.testData;
    }
}

export default new CategoryStore();
