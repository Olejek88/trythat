import { observable, action } from 'mobx';
import activityStore from "./activityStore";
import customerStore from "./customerStore";
import agent from "../agent";

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

    @action isWished(customer, activity) {
        return agent.isWished(customer, activity)
            .then(({answer}) => {
                return answer;
            })
    }

    @action wish(customer, activity) {
        return agent.wish(customer, activity)
            .then(({answer}) => {
                return answer;
            })
    }

    @action unWish(customer, activity) {
        return agent.unWish(customer, activity)
            .then(({answer}) => {
                return answer;
            });
    }
}

export default new WishListStore();
