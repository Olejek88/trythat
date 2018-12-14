import {action} from 'mobx';
import agent from '../agent';

export class ActivityImageStore {

    createImage(image) {
        return agent.ActivityImage.create(image)
            .then((image) => {
            });
    }

    loadImages(activity_id) {
        this.isLoading = true;
        return agent.ActivityImage.all(activity_id)
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    deleteImage(image) {
        return agent.ActivityImage.del(image.id)
            .catch(action(err => {
                throw err;
            }));
    }

    loadImage(id) {
        this.isLoading = true;
        return agent.ActivityImage.get(id)
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new ActivityImageStore();
