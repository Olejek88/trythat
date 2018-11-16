import {observable, action} from 'mobx';
import agent from "../agent";
import activityStore from "./activityStore";
import customerStore from "./customerStore";

class ReviewStore {
    reviewRegistry = new Map();
    @observable isLoading = true;
    @observable predicate = {};

    staticData = {
        id: '1',
        activity: activityStore.defaultData,
        customer: customerStore.customer,
        date: new Date(),
        rate: 4,
        title: 'Неплохо',
        description: 'Все в целом хорошо, но когда шар пролетает через магму очень жарко'
    };

    clear() {
        this.reviewRegistry.clear();
    }

    @action setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    $req(count = 10, start = 0) {
        //console.log(this.predicate.filter + ' ' + this.predicate.id);
        if (this.predicate.filter && this.predicate.id)
            return agent.Review.filter(this.predicate.filter, this.predicate.id, this.predicate.limit, this.predicate.start);
        return agent.Review.all(count, start);
    }

    @action loadReviews() {
        this.isLoading = true;
        return this.$req()
            .then(action((reviews) => {
                this.reviewRegistry.clear();
                reviews.forEach(review =>
                    this.reviewRegistry.set(review._id, review));
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    @action loadReview(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const review = this.reviewRegistry.get(id);
            if (review) return Promise.resolve(review);
        }
        this.isLoading = true;
        return agent.Review.get(id)
            .then(action(({review}) => {
                this.reviewRegistry.set(id, review);
                return review;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    getAverageMark() {
        let markArray = [0, 0];
        this.reviewRegistry.forEach(function (review) {
            markArray[0] += review.rate;
            markArray[1]++;
        });
        if (markArray[1] > 0) {
            markArray[0] = markArray[0] / markArray[1];
            return markArray;
        }
        return markArray;
    }


    @action createReview(review) {
        return agent.Review.create(review)
            .then(({answer}) => {
                return answer;
            })
    }

    @action updateReview(review_id, review) {
        return agent.reviewRegistry.update(review_id, review)
            .then(({review}) => {
                this.reviewRegistry.set(review_id, review);
                return review;
            }).catch(action(err => {
                throw err;
            }))
    }

    @action deleteReview(review_id) {
        this.reviewRegistry.delete(review_id);
        return agent.reviewRegistry.del(review_id)
            .catch(action(err => {
                throw err;
            }));
    }

}

export default new ReviewStore();
