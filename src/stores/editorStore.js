import {action, observable} from 'mobx';
import activityStore from "./activityStore";

class EditorStore {

   inProgress = false;
   errors = undefined;
   activitySlug = undefined;

   title = '';
   description = '';
   body = '';
   tagList = [];

   setActivitySlug(activitySlug) {
    if (this.activitySlug !== activitySlug) {
      this.reset();
      this.activitySlug = activitySlug;
    }
  }

   loadInitialData() {
    if (!this.activitySlug) return Promise.resolve();
    this.inProgress = true;
    return activityStore.loadActivity(this.activitySlug, { acceptCached: true })
      .then(action((activity) => {
        if (!activity) throw new Error('Can\'t load original activity');
        this.title = activity.title;
        this.description = activity.description;
        this.tags = activity.tags;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }

   reset() {
    this.title = '';
    this.description = '';
    this.tagList = [];
  }

   setTitle(title) {
    this.title = title;
  }

   setDescription(description) {
    this.description = description;
  }

   addTag(tag) {
    if (this.tagList.includes(tag)) return;
    this.tagList.push(tag);
  }

   removeTag(tag) {
    this.tagList = this.tagList.filter(t => t !== tag);
  }

   submit() {
    this.inProgress = true;
    this.errors = undefined;
    const activity = {
      title: this.title,
      description: this.description,
      tagList: this.tagList,
      slug: this.activitySlug,
    };
    return (this.activitySlug ? activityStore.updateActivity(activity) : activityStore.createActivity(activity))
      .catch(action((err) => {
        this.errors = err.response && err.response.body && err.response.body.errors; throw err;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }
}

export default new EditorStore();
