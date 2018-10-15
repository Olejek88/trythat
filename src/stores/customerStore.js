import {observable, action} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";

class CustomerStore {
    @observable customerErrors;
    @observable updatingCustomer;
    @observable updatingCustomerErrors;

    customer =
        {   _id: '1',
            user: userStore.getTestUser(),
            positive: 1,
            negative: 2,
            active: true
        };

    @action getTestCustomer() {
        return this.customer;
    }

    @action getCustomer() {
        this.customerErrors = undefined;
        return agent.Customer.forUser(this.customer.user._id)
            .catch(action(err => {
                this.customerErrors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }));
    }


    @action createCustomer(customer) {
        return agent.Customer.create(customer);
    }
}

export default new CustomerStore();
