import {observable, action} from 'mobx';
import agent from '../agent';

class ImageStore {
    @observable loadingImage;

    @observable image = [
        {   _id: '1',
            title: 'Путшествие к центру Земли',
            path: 'example_experience.jpg'}
    ];

    @action pullImage() {
        this.loadingImage = true;
    }

    @action getTestImage() {
        return this.image;
    }

}

export default new ImageStore();
