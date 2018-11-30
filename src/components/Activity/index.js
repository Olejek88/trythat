import React from 'react';
import {observer} from 'mobx-react';
import ActivityDescription from "./ActivityDescription";
import ActivityPhoto from "./ActivityPhoto";
import ActivitySelect from "./ActivitySelect";
import ActivityDetails from "./ActivityDetails";
import ActivityHowItWorks from "./ActivityHowItWorks";
import ActivityAboutLuminary from "./ActivityAboutLuminary";
import ActivityYouMayLike from "./ActivityYouMayLike";
import {withRouter} from "react-router-dom";
import ActivityReviews from "./ActivityReviews";
import {inject} from "mobx-react/index";

@inject('activityStore','activityListingStore')
@observer
@withRouter
class Activity extends React.Component {
    constructor() {
        super();
        this.state = {
            showActivityItem: true,
            activity: null
        };
    }

    componentDidMount() {
        this.props.activityStore.loadActivity(this.props.match.params.id)
            .then((activity) => {
                    this.setState({activity: activity});
                    let predicate = {
                        filter: 'luminary',
                        id: this.state.activity.luminary.id
                    };
                    this.props.activityStore.setPredicate(predicate);
                    //this.setState ({activities: this.props.activityStore.loadActivities()});
                    //this.props.activityListingStore.loadActivityListing(this.state.activity);
            });
    }

    render() {
        return (
            <div id="content">
                <div className="product-section ">
                    <div className="inner-product-section"
                         style={{width: '100%', maxWidth: '1124px', margin: '0 auto'}}>
                        <div className="p-top-sec">
                            <React.Fragment>
                                <ActivityPhoto activity={this.state.activity}/>
                                <ActivitySelect activity={this.state.activity}/>
                                <ActivityDescription activity={this.state.activity}/>
                                <ActivityDetails activity={this.state.activity}/>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <React.Fragment>
                    <ActivityHowItWorks/>
                    <ActivityReviews activity={this.state.activity} />
                    <ActivityAboutLuminary activity={this.state.activity} />
                    <ActivityYouMayLike activity={this.state.activity} />
                </React.Fragment>
            </div>
        );
    }
}

export default Activity;
