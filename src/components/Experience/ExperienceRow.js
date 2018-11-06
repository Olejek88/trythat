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
        console.log (this.props.activities);
        let activities = this.props.activities;
        if (activities) {
            activities.forEach(function (activity, i) {
                activitiesList.push(<Experience activity={activity} key={i}/>);
            });
        }
        console.log (activitiesList);
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
