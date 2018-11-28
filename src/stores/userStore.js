import {observable, action} from 'mobx';
import agent from "../agent";
import cityStore from "./cityStore";
import imageStore from "./imageStore";
import countryStore from "./countryStore";

export class UserStore {
    currentUser =
        {   id: 0,
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
        return this.currentUser;
    }

    @action pullUser() {
        this.loadingUser = true;
        let user_id = window.localStorage.getItem('user_id');
        if (user_id===undefined || user_id==='null' || user_id===null)
            return Promise.resolve(undefined);
        let user = window.localStorage.getItem('user');
        if (user!==undefined && user!=='undefined' && JSON.parse(user)) {
            this.currentUser = JSON.parse(user);
            //console.log(this.currentUser);
            if (window.localStorage.getItem('customer')!==undefined &&
                window.localStorage.getItem('customer')!=='undefined') {
                this.currentCustomer = JSON.parse(window.localStorage.getItem('customer'));
            }
            else {
                this.getCustomerByUser(this.currentUser.id).then(() => {
                    return Promise.resolve(this.currentUser);
                });
            }
            if (window.localStorage.getItem('luminary')!==undefined &&
                window.localStorage.getItem('luminary')!=='undefined') {
                this.currentLuminary = JSON.parse(window.localStorage.getItem('luminary'));
                //console.log(this.currentLuminary);
            }
            if (this.currentCustomer!=null)
                return Promise.resolve(this.currentUser);
        }
        return agent.Auth.current(user_id)
            .then(action((user) => {
                if(user) {
                    this.currentUser = user;
                    window.localStorage.setItem('user', JSON.stringify(user));
                    window.localStorage.setItem('user_id',user.id);
                    this.getCustomerByUser(this.currentUser.id);
                    this.getLuminaryByUser(this.currentUser.id);
                    this.loadingUser = false;
                }
            }))
            .catch(action(err => {
                throw err;
            }));
        //return this.testData;
    }

    @action updateUser(newUser) {
        this.updatingUser = true;
        console.log(newUser);
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
        return agent.Customer.get(user_id)
            .then(action((customer) => {
                this.currentCustomer = customer[0];
                window.localStorage.setItem('customer', JSON.stringify(customer[0]));
            }))
            .catch(action(err => {
                return this.customer;
            }))
            .finally(action(() => {
                this.updatingUser = false;
            }));
    }

    @action getLuminaryByUser(user_id) {
        return agent.Luminary.get(user_id)
            .then(action((luminary) => {
                this.currentLuminary = luminary[0];
                window.localStorage.setItem('luminary', JSON.stringify(luminary[0]));
            }))
            .catch(action(err => {
                console.log(err);
                return this.luminary;
            }));
        //return this.luminary;
    }
}

export default new UserStore();
