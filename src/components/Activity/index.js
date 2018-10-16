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

@observer
@withRouter
@inject('activityStore')
class Activity extends React.Component {
    render() {
        const activity = this.props.activityStore.loadTestActivity();
        const activities = this.props.activityStore.loadTestActivitiesLuminary();
        return (
            <div id="content">
                <div className="product-section ">
                    <div className="inner-product-section"
                         style={{width: '100%', maxWidth: '1124px', margin: '0 auto'}}>
                        <div className="p-top-sec">
                            <React.Fragment>
                                <ActivityPhoto activity={activity}/>
                                <ActivitySelect activity={activity}/>
                                <ActivityDescription activity={activity}/>
                                <ActivityDetails activity={activity}/>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <React.Fragment>
                    <ActivityHowItWorks/>
                    <ActivityReviews activity={activity}/>
                    <ActivityAboutLuminary luminary={activity.luminary} activities={activities}/>
                    <ActivityYouMayLike activity={activity}/>
                </React.Fragment>
            </div>
        );
    }
}

export default Activity;
