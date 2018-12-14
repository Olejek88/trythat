import React from 'react';
import ActivityStar from "./ActivityStar";
import reviewStore from "../../stores/reviewStore";

class ActivityReview extends React.Component {
    constructor(props) {
        super(props);
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
            this.setState({updated: true});
        }
    }

    render() {
        return (
            <div className="review_item">
                {this.state.updated &&
                <div className="review_stars_div " data-average-rating={this.state.review.rate}>
                    <ActivityStar date={this.state.review.date} rate={this.state.review.rate}/>
                    <div className="review_content sg-f-bdy fs-1 sg-c-2">{this.state.review.description}
                    </div>
                    {this.state.review.customer.user.firstName}
                </div>
                }
            </div>
        );
    }
}

export default ActivityReview;
