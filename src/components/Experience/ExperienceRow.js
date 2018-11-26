import React from 'react';
import {inject} from 'mobx-react';
import Experience from "./Experience";

@inject('activityStore')
class ExperienceRow extends React.Component {
    constructor() {
        super();
        this.state = {
            activitiesList: []
        };
        this.activitiesList = [];
    }

    componentWillMount() {
        let self = this;
        let activities = this.props.activities;
        if (activities) {
            activities.forEach(function (activity, i) {
                self.activitiesList.push(<Experience activity={activity} key={i}/>);
            });
            this.setState({activitiesList: this.activitiesList});
        }
    }
    render() {
        return (
            <div className="experience">
                <React.Fragment>
                    {this.state.activitiesList}
                </React.Fragment>
            </div>
        );
    }
}

export default ExperienceRow;
