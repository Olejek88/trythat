import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import agent from "../agent";
import categoryStore from "./categoryStore";

class TagStore {
    @observable tagsRegistry = observable.map();
    @observable isLoading = true;

    @observable staticData = [
        {_id: '1', title: 'Земля', category: categoryStore.loadCategory(1)},
        {_id: '2', title: 'Воздушный шар', category: categoryStore.loadCategory(2)},
        {_id: '3', title: 'Путешествие', category: categoryStore.loadCategory(2)},
        {_id: '4', title: 'Экстрим', category: categoryStore.loadCategory(2)}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadTags() {
        this.isLoading = true;
        agent.Tags.all()
            .then(action(({ tags}) => {
                this.tagsRegistry.clear();
                tags.forEach(tag =>
                    this.tagsRegistry.set(tag._id, tag));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticData;
        //return this.staticDataOptions;
    }
}

export default new TagStore();
