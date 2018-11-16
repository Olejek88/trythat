import { observable, action } from 'mobx';
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
        return agent.FollowList.get(customer)
            .then(action(({ followList}) => {
                this.followListRegistry.clear();
                followList.forEach(follow =>
                    this.followListRegistry.set(follow.id, follow));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
    }


    @action isFollow(customer, luminary) {
        return agent.FollowList.isFollow(customer, luminary)
            .then(({answer}) => {
                return answer;
            })
            .catch(action(err => {
                throw err;
            }));
    }

    @action follow(customer, luminary) {
        return agent.FollowList.follow(customer, luminary)
            .then(({answer}) => {
                return answer;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    @action unFollow(customer, luminary) {
        return agent.FollowList.unFollow(customer, luminary)
            .then(({answer}) => {
                return answer;
            })
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new FollowListStore();
