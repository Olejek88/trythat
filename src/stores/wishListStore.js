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
            customer: customerStore.customer,
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
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        this.staticData.forEach(activity =>
            this.wishListRegistry.set(activity._id, activity));
        return this.staticData;
    }

    @action isWished(customer, activity) {
        return agent.WishList.isWished(customer, activity)
            .catch(action(err => {
                throw err;
            }))
            .then((answer) => {
                return answer;
            })
    }

    @action wish(wish) {
        return agent.WishList.wish(wish)
            .catch(action(err => {
                throw err;
            }));
    }

    @action unWish(wish) {
        return agent.WishList.unWish(wish.id)
            .catch(action(err => {
                throw err;
            }))
            .then(({answer}) => {
                return answer;
            });
    }
}

export default new WishListStore();
