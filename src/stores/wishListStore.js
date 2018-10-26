import { observable, action } from 'mobx';
import agent from "../agent";
import activityStore from "./activityStore";
import customerStore from "./customerStore";

class WishListStore {
    @observable isLoading = false;
    @observable wishListRegistry = observable.map();

    @observable staticData = [
        {
            _id: '1',
            activity: activityStore.loadActivity(1),
            customer: customerStore.getCustomer(),
            date: new Date()
        },
    ];

    @action loadTestWishList(customer) {
        agent.WishList.forCustomer(customer._id)
            .then(action(({ activities}) => {
                this.wishListRegistry.clear();
                activities.forEach(activity =>
                    this.wishListRegistry.set(activity._id, activity));
            }))
            .finally(action(() => { this.isLoading = false; }));

        this.staticData.forEach(activity =>
            this.wishListRegistry.set(activity._id, activity));
        return this.staticData;
    }

    @action isWished(customer, activity) {
        return agent.WishList.isWished(customer, activity)
            .then(({answer}) => {
                return answer;
            })
    }

    @action wish(customer, activity) {
        return agent.WishList.wish(customer, activity)
            .then(({answer}) => {
                return answer;
            })
    }

    @action unWish(customer, activity) {
        return agent.WishList.unWish(customer, activity)
            .then(({answer}) => {
                return answer;
            });
    }
}

export default new WishListStore();
