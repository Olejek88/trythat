import {action} from 'mobx';
import agent from "../agent";
import activityStore from "./activityStore";
import customerStore from "./customerStore";

class WishListStore {
    isLoading = false;
    wishListRegistry = new Map();

    staticData = [
        {
            _id: '1',
            activity: activityStore.loadActivity(1),
            customer: customerStore.customer,
            date: new Date()
        },
    ];

    loadWishList(customer) {
        return agent.WishList.forCustomer(customer.id)
            .then(action((activities) => {
                this.wishListRegistry.clear();
                activities.forEach(activity =>
                    this.wishListRegistry.set(activity._id, activity));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    isWished(customer, activity) {
        return agent.WishList.isWished(customer, activity)
            .catch(action(err => {
                throw err;
            }));
    }

    wish(wish) {
        return agent.WishList.wish(wish)
            .catch(action(err => {
                throw err;
            }));
    }

    unWish(wish) {
        return agent.WishList.unWish(wish)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new WishListStore();
