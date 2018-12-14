import {action} from 'mobx';
import agent from '../agent';
import userStore from './userStore';
import commonStore from './commonStore';

class AuthStore {
    inProgress = false;
    errors = undefined;

    values = {
        username: '',
        email: '',
        password: '',
    };

    setUsername(username) {
        this.values.username = username;
    }

    setEmail(email) {
        this.values.email = email;
    }

    setPassword(password) {
        this.values.password = password;
    }

    reset() {
        this.values.username = '';
        this.values.email = '';
        this.values.password = '';
    }

    login() {
        this.inProgress = true;
        this.errors = undefined;
        return agent.Auth.login(this.values.email, this.values.password)
            .then(({token, id}) => {
                console.log(token);
                console.log(id);
                commonStore.setToken(token);
                commonStore.setId(id);
            })
            .then(() => userStore.pullUser())
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }))
            .finally(action(() => {
                this.inProgress = false;
            }));
    }

    register() {
        this.inProgress = true;
        this.errors = undefined;
        return agent.Auth.register(this.values.username, this.values.email, this.values.password)
        //.then(({user}) => commonStore.setToken(user.token))
        //.then(() => userStore.pullUser())
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }))
            .finally(action(() => {
                this.inProgress = false;
            }));
    }

    logout() {
        commonStore.setToken(undefined);
        commonStore.setId(undefined);
        userStore.forgetUser();
        window.localStorage.setItem('user', JSON.stringify(undefined));
        return Promise.resolve();
    }

    current() {
        return Promise.resolve();
    }
}

export default new AuthStore();
