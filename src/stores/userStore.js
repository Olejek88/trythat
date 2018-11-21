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
    @observable loadingUser;
    @observable updatingUser;
    @observable updatingUserErrors;

    // constructor() {
    //     this.currentUser = this.testData;
    // }

    testData =
        {   id: '0',
            username: 'olejek',
            email: 'olejek8@yandex.ru',
            firstName: 'Олег',
            lastName: 'Иванов',
            birthDate: new Date(1978,8,28,0,0,0),
            phone: '+79000242832',
            city: cityStore.defaultData,
            image: imageStore.userImage,
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
    currentCustomer = this.customer;
    currentLuminary = this.luminary;

    @action getUser() {
        //return this.pullUser();
        //return this.testData;
        return this.currentUser;
    }

    @action pullUser() {
        let self = this;
        this.loadingUser = true;
        return agent.Auth.current()
            .then(action((user) => {
                if(user[0]) {
                    this.currentUser = user[0];
                    this.getCustomerByUser(this.currentUser.id).then(action((customer) => {
                        if (customer)
                            self.currentCustomer = customer;
                    }));
                    this.getLuminaryByUser(this.currentUser.id).then(action((luminary) => {
                        if (luminary)
                            self.currentLuminary = luminary;
                        this.loadingUser = false;
                    }));
                }
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
        //return agent.Customer.forUser(user_id)
        return agent.Customer.get(1)
            .then(action((customer) => {
                this.currentCustomer = customer;
            }))
            .catch(action(err => {
                //console.log(this.customer);
                return this.customer;
            }))
            .finally(action(() => {
                this.updatingUser = false;
            }));
    }

    @action getLuminaryByUser(user_id) {
        return agent.Luminary.get(1)
        //return agent.Luminary.forUser(user_id)
            .catch(action(err => {
                console.log(err);
                return this.luminary;
            }));
        //return this.luminary;
    }
}

export default new UserStore();
