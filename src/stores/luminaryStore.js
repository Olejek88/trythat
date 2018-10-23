import {observable, action} from 'mobx';
import agent from '../agent';
import userStore from "./userStore";

class LuminaryStore {
    @observable luminaryErrors;
    @observable updatingLuminary;
    @observable updatingLuminaryErrors;

    luminary =
        {   _id: '1',
            verified: true,
            verifiedDate: new Date(),
            rating: 5.0,
            description: 'Гуру-йог 15ой категории по воздухоплаванию на глубине',
            fullDescription: 'Признанный как один из самых важных йогов в Челябинске, Олег возглавлял центр выращивания еды на сезонном и местном уровне, поддерживая местную продовольственную экономику',
            user: userStore.getUser()
        };

    @action getTestLuminary() {
        return this.luminary;
    }

    @action setActivitySlug(activitySlug) {
        if (this.activitySlug !== activitySlug) {
            this.comments = [];
            this.activitySlug = activitySlug;
        }
    }

    @action getLuminary() {
        this.luminaryErrors = undefined;
        return agent.Luminary.forUser(this.userSlug)
            .catch(action(err => {
                this.luminaryErrors = err.response && err.response.body && err.response.body.errors;
                throw err;
            }));
    }


    @action createLuminary(luminary) {
        return agent.Luminary.create(this.activitySlug, luminary);
    }
}

export default new LuminaryStore();
