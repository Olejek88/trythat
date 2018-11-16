import React from 'react';
import {observer} from 'mobx-react';
import reviewStore from "../../stores/reviewStore";
import ActivityStarAverage from "./ActivityStarAverage";
import ActivityReview from "./ActivityReview";
import {action} from "mobx/lib/mobx";

@observer
class ActivityReviews extends React.Component {
    constructor() {
        super();
        this.state = {
            activity: null,
            updated: false,
            averageMark: {
                rate: 0,
                total: 0
            },
            reviewList: []
        };
        this.reviewList = [];
    }

    componentDidMount() {
        this.setState({activity: this.props.activity});
        this.reviewList.push(<ActivityReview key={111}/>);
    }

    componentDidUpdate() {
        if (this.props.activity && !this.state.updated) {
            let self = this;
            let predicate = {
                filter: 'activity',
                id: this.props.activity.id
            };
            reviewStore.setPredicate(predicate);
            reviewStore.loadReviews().
                then(action((reviews) => {
                    const averageMark = reviewStore.getAverageMark();
                    self.setState({averageMark: averageMark});
                    reviews.forEach(function (review, i) {
                        self.reviewList.push(<ActivityReview review={review} key={i}/>);
                });
            })).catch(action(err => {
                    console.log("err=" + err);
                    throw err;
                }));
            self.setState ({updated: true});
        }
    }

    render() {
        return (
            <div className="reviews-section" data-html="" style={{clear: 'both', borderBottom: '1px solid #e1e1e1',
                borderTop: '1px solid #e1e1e1'}}>
                <div className="product_sec_div reviews view_all_link_container desktop ">
                    <div className="product_sec_header ">
                        <div className="product_sec_title sg-f-ttl">Отзывы клиентов
                            <React.Fragment>
                                <ActivityStarAverage rate={this.state.averageMark.rate} total={this.state.averageMark.total}/>
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="reviews_list clearfix">
                        <React.Fragment>
                            {this.state.updated &&
                                this.state.reviewList
                            }
                        </React.Fragment>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityReviews;
