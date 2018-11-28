import {observable, action, reaction} from 'mobx';
import agent from '../agent';

class CommonStore {

    @observable appName = 'TryThat';
    @observable apiServer = 'http://api.tt.ru/';
    @observable token = window.localStorage.getItem('jwt');
    @observable user_id = window.localStorage.getItem('user_id');
    @observable appLoaded = false;

    @observable tags = [];
    @observable isLoadingTags = false;

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

    @action loadTags() {
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

    @action setToken(token) {
        this.token = token;
    }

    @action setId(id) {
        this.user_id = id;
        window.localStorage.setItem('user_id', this.user_id);
    }

    @action setAppLoaded() {
        this.appLoaded = true;
    }

}

export default new CommonStore();
