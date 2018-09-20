import { observable, action } from 'mobx';
import agent from '../agent';

class ProfileStore {

  @observable profile = undefined;
  @observable currentProfile;
  @observable loadingProfile;
  @observable updatingProfile;
  @observable updatingProfileErrors;

  @action loadProfile(username) {
    this.loadingProfile = true;
    agent.Profile.get(username)
      .then(action(({ profile }) => { this.profile = profile; }))
      .finally(action(() => { this.loadingProfile = false; }))
  }

  @action follow() {
    if (this.profile && !this.profile.following) {
      this.profile.following = true;
      agent.Profile.follow(this.profile.username)
        .catch(action(() => { this.profile.following = false }));
    }
  }

  @action unfollow() {
    if (this.profile && this.profile.following) {
      this.profile.following = false;
      agent.Profile.unfollow(this.profile.username)
        .catch(action(() => { this.profile.following = true }));
    }
  }

    @action pullProfile() {
        this.loadingProfile = true;
        return agent.Auth.current()
            .then(action(({ user }) => { this.currentUser = user; }))
            .finally(action(() => { this.loadingProfile = false; }))
    }

    @action updateProfile(profile) {
        this.updatingProfile = true;
        return agent.Auth.save(profile)
            .then(action(({ user }) => { this.currentUser = user; }))
            .finally(action(() => { this.updatingProfile = false; }))
    }

}

export default new ProfileStore();
