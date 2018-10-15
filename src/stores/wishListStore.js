import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import activityStore from "./activityStore";
import customerStore from "./customerStore";

class WishListStore {
    @observable staticData = [
        {
            _id: '1',
            activity: activityStore.loadTestActivity(),
            customer: customerStore.getTestCustomer(),
            date: new Date()
        },
    ];

    @action loadOccasions() {
        return this.staticDataOptions;
    }
}

export default new WishListStore();
