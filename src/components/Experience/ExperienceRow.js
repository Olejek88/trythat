import React from 'react';
import {inject} from 'mobx-react';
import Experience from "./Experience";

@inject('activityStore')
class ExperienceRow extends React.Component {
    render() {
        let activitiesList = [];
/*
        if (this.props.luminary) {
            let predicate = {
                filter: 'luminary',
                id: this.props.luminary._id,
                limit: 4
            };
            this.props.activityStore.setPredicate(predicate);
        }
        let activities = this.props.activityStore.loadActivities();
*/
        let activities = this.props.activities;
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
