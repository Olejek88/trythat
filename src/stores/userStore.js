import {observable, action} from 'mobx';
import agent from '../agent';

class UserStore {
    @observable currentUser;
    @observable loadingUser;
    @observable updatingUser;
    @observable updatingUserErrors;

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
