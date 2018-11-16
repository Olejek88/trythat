import {observable, action} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";

class LuminaryStore {
    @observable luminaryErrors;
    @observable updatingLuminary;
    @observable updatingLuminaryErrors;

    luminary =
        {   id: '888888',
            verified: false,
            verifiedDate: new Date(),
            rating: 0.0,
            description: 'Нет описания',
            fullDescription: 'Нет описания',
            user: userStore.currentUser
        };

    @action getLuminary(luminary_id) {
        return agent.Luminary.get(luminary_id)
            .catch(action(err => {
                throw err;
            }));
    }

    @action createLuminary(luminary) {
        return agent.Luminary
            .create(luminary)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new LuminaryStore();
