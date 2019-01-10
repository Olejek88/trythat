import React from 'react';
import ActivityStarAverage from "./ActivityStarAverage";
import ActivityReview from "./ActivityReview";
import {action} from "mobx/lib/mobx";
import {inject} from "mobx-react/index";

class ActivityReviews extends React.Component {
    constructor(props) {
        super(props);
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
        this.loadData(this.props.activity);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({activity: nextProps.activity});
        this.loadData(nextProps.activity);
    }

    loadData(activity) {
        if (activity) {
            let self = this;
            let total = 0;
            let sum = 0;
            let predicate = {
                filter: 'activity',
                id: activity.id
            };
            this.props.reviewStore.setPredicate(predicate);
            this.props.reviewStore.loadLocalReviews().then(action((reviews) => {
                self.reviewList = [];
                reviews.forEach(function (review, i) {
                    self.reviewList.push(<ActivityReview review={review} key={i}/>);
                    total++;
                    sum += review.rate;
                });
                self.setState({reviewList: self.reviewList});
                if (total > 0)
                    self.setState({averageMark: {rate: (sum / total), total: total}});
                self.setState({updated: true});
            }));
        }
    }

    render() {
        return (
            <div className="reviews-section" data-html="" style={{
                clear: 'both', borderBottom: '1px solid #e1e1e1',
                borderTop: '1px solid #e1e1e1'
            }}>
                <div className="product_sec_div reviews view_all_link_container desktop ">
                    <div className="product_sec_header ">
                        <div className="product_sec_title sg-f-ttl">Отзывы клиентов
                            <React.Fragment>
                                {this.state.updated &&
                                <ActivityStarAverage rate={this.state.averageMark.rate}
                                                     total={this.state.averageMark.total}/>
                                }
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

export default inject('reviewStore')(ActivityReviews);
