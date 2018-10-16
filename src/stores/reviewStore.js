import { observable, action } from 'mobx';
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

    getTestAverageMark(activity) {
        let markArray=[0,0];
        this.staticData.forEach(function(review) {
            markArray[0]+=review.rate;
            markArray[1]++;
        });
        if (markArray[1]>0) {
            markArray[0]=markArray[0]/markArray[1];
            return markArray;
        }
        return markArray;
    }
}

export default new ReviewStore();
