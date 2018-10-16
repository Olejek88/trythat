import {observable, action} from 'mobx';
import agent from '../agent';
import imageStore from "./imageStore";
import cityStore from "./cityStore";
import countryStore from "./countryStore";

class UserStore {
    @observable currentUser;
    @observable loadingUser;
    @observable updatingUser;
    @observable updatingUserErrors;
    testData =
        {   _id: '1',
            username: 'olejek',
            email: 'olejek8@yandex.ru',
            firstName: 'Олег',
            lastName: 'Иванов',
            birthDate: new Date(1978,8,28,0,0,0),
            city: cityStore.loadTestCity(),
            country: countryStore.loadTestCountry(),
            phone: '+79000242832',
            image: imageStore.getTestUserImage(),
            password: '123456'
        };
    @action getTestUser() {
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
            }))
    }

    @action updateUser(newUser) {
        this.updatingUser = true;
        return agent.Auth.save(newUser)
            .then(action(({user}) => {
                this.currentUser = user;
                console.log(newUser);
                console.log(user);
            }))
            .finally(action(() => {
                this.updatingUser = false;
            }))
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
