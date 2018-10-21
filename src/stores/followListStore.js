import { observable, action } from 'mobx';
import luminaryStore from "./luminaryStore";
import customerStore from "./customerStore";
import agent from "../agent";

class FollowListStore {
    @observable staticData = [
        {
            _id: '1',
            customer: customerStore.getTestCustomer(),
            luminary: luminaryStore.getTestLuminary()
        },
    ];

    @action loadTestFollowList() {
        return this.staticData;
    }

    @action isFollow(customer, luminary) {
        return agent.isFollow(customer, luminary)
            .then(({answer}) => {
                return answer;
            })
    }

    @action follow(customer, luminary) {
        return agent.follow(customer, luminary)
            .then(({answer}) => {
                return answer;
            })
    }

    @action unFollow(customer, luminary) {
        return agent.unFollow(customer, luminary)
            .then(({answer}) => {
                return answer;
            });
    }
}

export default new FollowListStore();
