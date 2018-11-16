import React from 'react';
import {observer} from 'mobx-react';
import ActivityStar from "./ActivityStar";
import reviewStore from "../../stores/reviewStore";

@observer
class ActivityReview extends React.Component {
    constructor() {
        super();
        this.state = {
            review: reviewStore.staticData,
            updated: false
        };
    }

    componentDidMount() {
        this.setState({review: this.props.review});
    }

    componentDidUpdate() {
        if (this.props.review && !this.state.updated) {
            console.log(this.props.review);
            this.setState ({updated: true});
        }
    }

    render() {
        return (
            <div className="review_item">
                <div className="review_stars_div " data-average-rating={this.state.review.rate}>
                    <ActivityStar date={this.state.review.date} rate={this.state.review.rate}/>
                    <div className="review_content sg-f-bdy fs-1 sg-c-2">{this.state.review.description}
                    </div>
                    {this.state.review.customer.user.firstName}
                </div>
            </div>
        );
    }
}

export default ActivityReview;
