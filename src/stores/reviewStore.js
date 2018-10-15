import { observable, action } from 'mobx';
import {computed} from "mobx/lib/mobx";
import activityStore from "./activityStore";
import customerStore from "./customerStore";

class ReviewStore {
    @observable staticData = [
        {
            _id: '1',
            activity: activityStore.loadTestActivity(),
            customer: customerStore.getTestCustomer(),
            date: new Date(),
            rate: 4,
            description: 'Все в целом хорошо, но когда шар пролетает через магму очень жарко'
        },
        {
            _id: '2',
            activity: activityStore.loadTestActivity(),
            customer: customerStore.getTestCustomer(),
            date: new Date(),
            rate: 5,
            description: 'Отлично! И кормят хорошо и йога на уровне. Стоит добавить только мини бар и развлечений на время поездки.'
        }
    ];

    @action loadTestReviews() {
        return this.staticData;
    }
}

export default new ReviewStore();
