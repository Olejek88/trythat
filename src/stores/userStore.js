import {observable, action} from 'mobx';
import agent from "../agent";
import cityStore from "./cityStore";
import imageStore from "./imageStore";
import countryStore from "./countryStore";

export class UserStore {
    @observable currentUser;
    @observable loadingUser;
    @observable updatingUser;
    @observable updatingUserErrors;

    constructor() {
        //this.currentUser = this.testData;
    }

    @observable testData =
        {   _id: '1',
            username: 'olejek',
            email: 'olejek8@yandex.ru',
            firstName: 'Олег',
            lastName: 'Иванов',
            birthDate: new Date(1978,8,28,0,0,0),
            phone: '+79000242832',
            image: imageStore.loadImage(1),
            city: cityStore.loadCity(1),
            country: countryStore.loadCountry(1),
            password: '123456'
        };

    @action getUser() {
        //return this.pullUser();
        return this.testData;
    }

    @action pullUser() {
        this.loadingUser = true;
        return agent.Auth.current()
            .then(action(({user}) => {
                this.currentUser = user;
            }))
            .finally(action(() => {
                this.loadingUser = false;
            }));
        //return this.testData;
    }

    @action updateUser(newUser) {
        this.updatingUser = true;
        agent.Auth.save(newUser)
            .then(action(({user}) => {
                this.currentUser = user;
                console.log(newUser);
                console.log(user);
            }))
            .finally(action(() => {
                this.updatingUser = false;
            }));
        return this.testData;
    }

    @action changeUserPassword(user, password, repeatPassword, newPassword) {
        this.updatingUser = true;
        if (password.toString() === repeatPassword.toString()) {
            return agent.Auth.password(user, password, newPassword)
                .then(action(({user}) => {
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
}

export default new UserStore();
