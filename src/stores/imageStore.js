import {observable, action} from 'mobx';
import agent from '../agent';

export class ImageStore {
    @observable loadingImage;
    @observable isLoading = false;
    @observable predicate = {};

    @observable userImage = {
        _id: '3',
        title: 'Олег Иванов',
        path: 'images/luminary2.jpg'
    };

    @observable images = [
        {
            _id: '1',
            title: 'Путшествие к центру Земли',
            path: 'images/example_experience.jpg'
        },
        {
            _id: '2',
            title: 'Путшествие к центру Земли',
            path: 'images/example_experience.jpg'
        }
    ];

    @action setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.predicate = predicate;
    }

    $req() {
        if (this.predicate.filter && this.predicate.id)
            return agent.Image.filter(this.predicate.filter, this.predicate.id);
        return agent.Image.all();
    }

    @action createImage(image) {
        return agent.Image.create(image)
            .then(({image}) => {
                return image;
            });
    }

    @action loadImages() {
        this.isLoading = true;
        this.$req()
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                //console.log(err);
                throw err;
            }));
        return this.images;
    }

    @action deleteImage(image) {
        return agent.Image.del(image._id)
            .catch(action(err => {
                throw err;
            }));
    }

    @action loadImage(id) {
        this.isLoading = true;
        agent.Image.get(id)
            .catch(action(err => {
                throw err;
            }));
        return this.userImage;
    }
}

export default new ImageStore();
