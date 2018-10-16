import React from 'react';
import {observer} from 'mobx-react';
import ActivityStar from "./ActivityStar";

@observer
class ActivityReview extends React.Component {
    render() {
        const review = this.props.review;
        return (
            <div className="review_item">
                <div className="review_stars_div " data-average-rating={review.rate}>
                    <ActivityStar date={review.date} rate={review.rate}/>
                    <div className="review_content sg-f-bdy fs-1 sg-c-2">{review.description}
                    </div>
                    {review.customer.user.firstName}
                </div>
            </div>
        );
    }
}

export default ActivityReview;
