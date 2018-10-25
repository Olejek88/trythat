import { observable, action } from 'mobx';
import agent from "../agent";
import luminaryStore from "./luminaryStore";
import customerStore from "./customerStore";

class FollowListStore {
    @observable isLoading = false;
    @observable followListRegistry = observable.map();

    @observable staticData = [
        {
            _id: '1',
            customer: customerStore.getCustomer(),
            luminary: luminaryStore.getLuminary(1)
        },
    ];

    @action loadFollowList(customer) {
        this.isLoading = true;
        agent.FollowList.get(customer)
            .then(action(({ followList}) => {
                this.followListRegistry.clear();
                followList.forEach(follow =>
                    this.followListRegistry.set(follow._id, follow));
            }))
            .finally(action(() => { this.isLoading = false; }));
        return this.staticData;
    }


    @action isFollow(customer, luminary) {
        return agent.FollowList.isFollow(customer, luminary)
            .then(({answer}) => {
                return answer;
            })
    }

    @action follow(customer, luminary) {
        return agent.FollowList.follow(customer, luminary)
            .then(({answer}) => {
                return answer;
            })
    }

    @action unFollow(customer, luminary) {
        return agent.FollowList.unFollow(customer, luminary)
            .then(({answer}) => {
                return answer;
            });
    }
}

export default new FollowListStore();
