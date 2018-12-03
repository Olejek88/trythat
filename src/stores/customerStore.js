import {action, observable} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";

class CustomerStore {
    @observable customerErrors;
    @observable updatingCustomer;
    @observable updatingCustomerErrors;

    @observable customer =
        {   id: '888888',
            user: userStore.getUser(),
            positive: 0,
            negative: 0,
            active: true
        };

    @action getCustomer(id) {
        this.customerErrors = undefined;
        return agent.Customer.get(id)
            .catch(action(err => {
                console.log(err);
            }));
    }

    @action createCustomer(customer) {
        return agent.Customer
            .create(customer)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new CustomerStore();
