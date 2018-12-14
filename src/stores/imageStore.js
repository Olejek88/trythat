import {action, observable} from 'mobx';
import agent from '../agent';

export class ImageStore {
     loadingImage;
     isLoading = false;
     predicate = {};

     userImage = {
        _id: '3',
        title: 'Олег Иванов',
        path: 'files/luminary.jpg'
    };

     images = [
        {
            _id: '1',
            title: 'Путшествие к центру Земли',
            path: 'files/balloon.jpg'
        },
        {
            _id: '2',
            title: 'Путшествие к центру Земли',
            path: 'files/balloon.jpg'
        }
    ];

     setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.predicate = predicate;
    }

    $req() {
        if (this.predicate.filter && this.predicate.id)
            return agent.Image.filter(this.predicate.filter, this.predicate.id);
        return agent.Image.all();
    }

     createImage(image) {
        return agent.Image.create(image).catch(action(err => {
                throw err;
            }));
    }

     loadImages() {
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

     deleteImage(image) {
        return agent.Image.del(image._id)
            .catch(action(err => {
                throw err;
            }));
    }

     loadImage(id) {
        this.isLoading = true;
        agent.Image.get(id)
            .catch(action(err => {
                throw err;
            }));
        return this.userImage;
    }
}

export default new ImageStore();
