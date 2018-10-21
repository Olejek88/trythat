import React from 'react';
import {observer} from 'mobx-react';
import reviewStore from "../../stores/reviewStore";
import ActivityStarAverage from "./ActivityStarAverage";
import ActivityReview from "./ActivityReview";

@observer
class ActivityReviews extends React.Component {
    render() {
        const activity = this.props.activity;
        const reviews = reviewStore.loadTestReviews();
        const averageMark = reviewStore.getTestAverageMark(activity);
        let reviewsFragments = reviews.map(function (review, i) {
            return (<ActivityReview review={review} key={i}/>);
        });

        return (
            <div className="reviews-section" data-html="" style={{clear: 'both', borderBottom: '1px solid #e1e1e1',
                borderTop: '1px solid #e1e1e1'}}>
                <div className="product_sec_div reviews view_all_link_container desktop ">
                    <div className="product_sec_header ">
                        <div className="product_sec_title sg-f-ttl">Отзывы клиентов
                            <React.Fragment>
                                <ActivityStarAverage rate={averageMark[0]} total={averageMark[1]}/>
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="reviews_list clearfix">
                        <React.Fragment>
                            {reviewsFragments}
                        </React.Fragment>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityReviews;
