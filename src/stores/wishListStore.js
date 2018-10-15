import { observable, action } from 'mobx';
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

    @action loadTestWishList() {
        return this.staticData;
    }


}

export default new WishListStore();
