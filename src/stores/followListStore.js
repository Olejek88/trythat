import {action} from 'mobx';
import agent from "../agent";
import luminaryStore from "./luminaryStore";
import customerStore from "./customerStore";

class FollowListStore {
    isLoading = false;
    followListRegistry = new Map();

    staticData = [
        {
            id: '1',
            customer: customerStore.customer,
            luminary: luminaryStore.luminary
        },
    ];

    loadFollowList(customer) {
        this.isLoading = true;
        return agent.FollowList.get(customer.id)
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }


    isFollow(customer, luminary) {
        return agent.FollowList.isFollow(customer.id, luminary.id)
            .catch(action(err => {
                throw err;
            }));
    }

    follow(follow) {
        return agent.FollowList.follow(follow)
            .catch(action(err => {
                throw err;
            }))
    }

    unFollow(id) {
        return agent.FollowList.unFollow(id)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new FollowListStore();
