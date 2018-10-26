import {observable, action} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";

class LuminaryStore {
    @observable luminaryErrors;
    @observable updatingLuminary;
    @observable updatingLuminaryErrors;

    @observable luminary =
        {   _id: '1',
            verified: true,
            verifiedDate: new Date(),
            rating: 5.0,
            description: 'Гуру-йог 15ой категории по воздухоплаванию на глубине',
            fullDescription: 'Признанный как один из самых важных йогов в Челябинске, Олег возглавлял центр выращивания еды на сезонном и местном уровне, поддерживая местную продовольственную экономику',
            user: userStore.getUser()
        };

    @action getLuminary(user_id) {
        this.luminaryErrors = undefined;
        agent.Luminary.forUser(user_id)
            .catch(action(err => {
                this.luminaryErrors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }));
        return this.luminary;
    }

    @action createLuminary(luminary) {
        return agent.Luminary.create(luminary);
    }
}

export default new LuminaryStore();
