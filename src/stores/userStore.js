import {observable, action} from 'mobx';
import agent from "../agent";
import cityStore from "./cityStore";
import imageStore from "./imageStore";
import countryStore from "./countryStore";

export class UserStore {
    currentUser =
        {   id: '',
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            phone: '',
            city_id: 0,
            image: '',
            country_id: 0,
            password: ''
        };
    currentCustomer;
    currentLuminary;
    @observable loadingUser;
    @observable updatingUser;
    @observable updatingUserErrors;

    // constructor() {
    //     this.currentUser = this.testData;
    // }

    testData =
        {   id: '1',
            username: 'olejek',
            email: 'olejek8@yandex.ru',
            firstName: 'Олег',
            lastName: 'Иванов',
            birthDate: new Date(1978,8,28,0,0,0),
            phone: '+79000242832',
            city: cityStore.defaultData,
            image: imageStore.images[0],
            country: countryStore.defaultData,
            password: '123456'
        };

    customer =
        {   id: '888888',
            user: this.currentUser,
            positive: 0,
            negative: 0,
            active: true
        };

    luminary =
        {   id: '888888',
            verified: false,
            verifiedDate: new Date(),
            rating: 0.0,
            description: 'Нет описания',
            fullDescription: 'Нет описания',
            user: this.currentUser
        };

    @action getUser() {
        //return this.pullUser();
        return this.testData;
    }

    @action pullUser() {
        this.loadingUser = true;
        return agent.Auth.current()
            .then(action((user) => {
                if(user[0]) {
                    this.currentUser = user[0];
                    this.currentCustomer = this.getCustomerByUser(this.currentUser.id);
                    this.currentLuminary = this.getLuminaryByUser(this.currentUser.id);
                }
            }))
            .finally(action(() => {
                this.loadingUser = false;
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.testData;
    }

    @action updateUser(newUser) {
        this.updatingUser = true;
        //console.log(newUser);
        return agent.Auth.save(newUser,newUser.id)
            .then(action((user) => {
                console.log(user);
                this.currentUser = user;
                console.log(this.currentUser);
            }))
            .finally(action(() => {
                this.updatingUser = false;
            }));
        //return this.testData;
    }

    @action changeUserPassword(user, password, repeatPassword, newPassword) {
        this.updatingUser = true;
        if (password.toString() === repeatPassword.toString()) {
            return agent.Auth.password(user, password, newPassword)
                .then(action((user) => {
                    this.currentUser = user;
                    console.log(user);
                }))
                .finally(action(() => {
                    this.updatingUser = false;
                }))
        }
    }

    @action forgetUser() {
        this.currentUser = undefined;
    }

    @action getCustomerByUser(user_id) {
        return agent.Customer.forUser(user_id)
            .then(action((customer) => {
                console.log(customer);
                this.currentCustomer = customer;
                console.log(this.currentCustomer);
            }))
            .catch(action(err => {
                console.log(this.customer);
                return this.customer;
            }))
            .finally(action(() => {
                this.updatingUser = false;
            }));
    }

    @action getLuminaryByUser(user_id) {
        return this.luminary;
/*

        return agent.Luminary.forUser(user_id)
            .catch(action(err => {
                console.log(err);
                return this.luminary;
            }));
*/
    }
}

export default new UserStore();
