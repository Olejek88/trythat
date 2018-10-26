import {observable, action} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";

class CustomerStore {
    @observable customerErrors;
    @observable updatingCustomer;
    @observable updatingCustomerErrors;

    @observable customer =
        {   _id: '1',
            user: userStore.getUser(),
            positive: 1,
            negative: 2,
            active: true
        };

    @action getCustomer(user_id) {
        this.customerErrors = undefined;
        agent.Customer.forUser(user_id)
            .catch(action(err => {
                this.customerErrors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }));
        return this.customer;
    }

    @action createCustomer(customer) {
        return agent.Customer.create(customer);
    }
}

export default new CustomerStore();
