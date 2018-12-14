import {action, observable} from 'mobx';
import agent from '../agent';

class ProfileStore {

   profile = undefined;
   currentProfile;
   loadingProfile;
   updatingProfile;
   updatingProfileErrors;

   loadProfile(username) {
    this.loadingProfile = true;
    agent.Profile.get(username)
      .then(action(({ profile }) => { this.profile = profile; }))
      .finally(action(() => { this.loadingProfile = false; }))
  }

   follow() {
    if (this.profile && !this.profile.following) {
      this.profile.following = true;
      agent.Profile.follow(this.profile.username)
        .catch(action(() => { this.profile.following = false }));
    }
  }

   unfollow() {
    if (this.profile && this.profile.following) {
      this.profile.following = false;
      agent.Profile.unfollow(this.profile.username)
        .catch(action(() => { this.profile.following = true }));
    }
  }

     updateProfile(profile) {
        this.updatingProfile = true;
        return agent.Auth.save(profile)
            .then(action(({ user }) => { this.currentUser = user; }))
            .finally(action(() => { this.updatingProfile = false; }))
    }

}

export default new ProfileStore();
