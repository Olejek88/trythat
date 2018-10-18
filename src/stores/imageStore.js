import {observable, action} from 'mobx';

class ImageStore {
    @observable loadingImage;

    userImage = {
        _id: '3',
        title: 'Олег Иванов',
        path: 'images/luminary2.jpg'};

    images = [
        {   _id: '1',
            title: 'Путшествие к центру Земли',
            path: 'images/example_experience.jpg'},
        {   _id: '2',
            title: 'Путшествие к центру Земли',
            path: 'images/example_experience.jpg'}
    ];

    @action pullImage() {
        this.loadingImage = true;
    }

    getTestImages() {
        return this.images;
    }

    getTestUserImage() {
        return this.userImage;
    }

}

export default new ImageStore();
