import {action, observable} from 'mobx';
import agent from "../agent";
import luminaryStore from "./luminaryStore";
import customerStore from "./customerStore";

class FollowListStore {
    @observable isLoading = false;
    followListRegistry = new Map();

    staticData = [
        {
            id: '1',
            customer: customerStore.customer,
            luminary: luminaryStore.luminary
        },
    ];

    @action loadFollowList(customer) {
        this.isLoading = true;
        return agent.FollowList.get(customer.id)
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
    }


    @action isFollow(customer, luminary) {
        return agent.FollowList.isFollow(customer.id, luminary.id)
            .catch(action(err => {
                throw err;
            }));
    }

    @action follow(follow) {
        return agent.FollowList.follow(follow)
            .catch(action(err => {
                throw err;
            }))
    }

    @action unFollow(id) {
        return agent.FollowList.unFollow(id)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new FollowListStore();
