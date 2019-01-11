import {action} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";

class LuminaryStore {
    luminaryErrors;
    updatingLuminary;
    updatingLuminaryErrors;

    luminary =
        {
            id: '888888',
            verified: false,
            verifiedDate: new Date(),
            rating: 0.0,
            total: 0,
            description: 'Нет описания',
            fullDescription: 'Нет описания',
            user: userStore.testData
        };

    getLuminary(luminary_id) {
        return agent.Luminary.getLuminary(luminary_id)
            .catch(action(err => {
                throw err;
            }));
    }

    getByUser(user_id) {
        return agent.Luminary.get(user_id)
            .catch(action(err => {
                throw err;
            }));
    }

    getLuminaries() {
        return agent.Luminary.all()
            .catch(action(err => {
                throw err;
            }));
    }

    createLuminary(luminary) {
        return agent.Luminary
            .create(luminary)
            .catch(action(err => {
                throw err;
            }));
    }

    updateLuminary(luminary) {
        return agent.Luminary.update(luminary)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new LuminaryStore();
