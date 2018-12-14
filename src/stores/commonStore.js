import {action, observable, reaction} from 'mobx';
import agent from '../agent';

class CommonStore {
    ordersCount = window.localStorage.getItem('orders_count');
     appName = 'TryThat';
     apiServer = 'http://api.tt.ru/';
     token = window.localStorage.getItem('jwt');
     user_id = window.localStorage.getItem('user_id');
     appLoaded = false;

     tags = [];
     isLoadingTags = false;

    constructor() {
        reaction(
            () => this.token,
            (token) => {
                if (token) {
                    window.localStorage.setItem('jwt', token);
                } else {
                    window.localStorage.removeItem('jwt');
                }
            }
        );
    }

     loadTags() {
        this.isLoadingTags = true;
        return agent.Tags.getAll()
            .then(action(({tags}) => {
                this.tags = tags.map(t => t.toLowerCase());
            }))
            .finally(action(() => {
                this.isLoadingTags = false;
            }))
            .catch(action(err => {
                throw err;
            }))
    }

     setToken(token) {
        this.token = token;
    }

     setId(id) {
        this.user_id = id;
        window.localStorage.setItem('user_id', this.user_id);
    }

     setAppLoaded() {
        this.appLoaded = true;
    }

}

export default new CommonStore();
