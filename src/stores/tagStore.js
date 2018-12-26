import {action} from 'mobx';
import agent from "../agent";
import categoryStore from "./categoryStore";

class TagStore {
    tagsRegistry = new Map();
    isLoading = true;

    staticData = [
        {_id: '1', title: 'Земля', category: categoryStore.defaultData},
        {_id: '2', title: 'Воздушный шар', category: categoryStore.defaultData},
        {_id: '3', title: 'Путешествие', category: categoryStore.defaultData},
        {_id: '4', title: 'Экстрим', category: categoryStore.defaultData}
    ];

    get staticDataOptions() {
        return this.staticData.map(x => ({label: x.label, value: x._id}))
    };

    loadTags() {
        this.isLoading = true;
        return agent.Tags.all()
            .then(action(({tags}) => {
                this.tagsRegistry.clear();
                tags.forEach(tag =>
                    this.tagsRegistry.set(tag.id, tag));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.staticData;
        //return this.staticDataOptions;
    }

    createTag(tag) {
        return agent.Tags.save(tag)
            .catch(action(err => {
                throw err;
            }))
    }

}

export default new TagStore();
