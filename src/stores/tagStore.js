import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import categoryStore from "./categoryStore";

class TagStore {

    @observable staticData = [
        {_id: '1', title: 'Земля', category: categoryStore.loadTestCategory},
        {_id: '2', title: 'Воздушный шар', category: categoryStore.loadTestCategory},
        {_id: '3', title: 'Путешествие', category: categoryStore.loadTestCategory},
        {_id: '4', title: 'Экстрим', category: categoryStore.loadTestCategory}
    ];
    @computed get staticDataOptions() {
        return this.staticData.map(x => ({ label: x.label, value: x._id }))
    };

    @action loadTag() {
        return this.staticDataOptions;
    }

    @action getTestTags() {
        return this.staticData;
    }
}

export default new TagStore();
