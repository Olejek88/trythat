import React from 'react';
import {inject} from 'mobx-react';
import Experience from "./Experience";

@inject('activityStore')
class ExperienceRow extends React.Component {
    render() {
        let activitiesList = Array.of(undefined);
        let activities = this.props.activityStore.loadActivities();
        if (activities) {
            activities.forEach(function (activity, i) {
                activitiesList.push(<Experience activity={activity} key={i}/>);
            });
        }
        return (
            <div className="experience">
                <React.Fragment>
                    {activitiesList}
                </React.Fragment>
            </div>
        );
    }
}

export default ExperienceRow;
