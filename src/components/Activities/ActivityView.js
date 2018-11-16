import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import ExperienceTitle from "../Experience/ExperienceTitle";
import ExperienceRow from "../Experience/ExperienceRow";
import {action} from "mobx/lib/mobx";

@inject('activityStore', 'userStore')
@withRouter
export default class ActivityView extends React.Component {
    constructor() {
        super();
        this.state = {
            activitiesRows: [],
            updated: false
        };
    }

    componentWillMount() {
        let predicate = {
            filter: this.props.filter,
            id: this.props.id,
            limit: 12
        };
        this.props.activityStore.setPredicate(predicate);
    }

    componentDidMount() {
        let my = this;
        let activitiesRow = [];
        let activitiesRows = my.state.activitiesRows;
        let count = 0;
        this.props.activityStore.loadActivities().then(action((activities) => {
            if (activities) {
                switch (my.props.filter) {
                    case 'city':
                        if (activities[0].location)
                            my.state.activitiesRows.push(<ExperienceTitle key={1}
                                                                 title={'Лучшие впечатления в Вашем городе ' + activities[0].location.city.title}/>);
                        break;
                    case 'occasion':
                        if (activities[0].occasion)
                            my.state.activitiesRows.push(<ExperienceTitle key={1}
                                                                 title={'Лучшие впечатления на случай ' + activities[0].occasion.title}/>);
                        break;
                    case 'trends':
                        if (activities[0].trending)
                            my.state.activitiesRows.push(<ExperienceTitle key={1}
                                                                 title={'Лучшие впечатления для ' + activities[0].trending.title}/>);
                        break;
                    default:
                        my.state.activitiesRows.push(<ExperienceTitle key={1} title="Лучшие впечатления для Вас"/>);
                        break;
                }
                activities.forEach(function (activity, i) {
                    activitiesRow.push(activity);
                    count++;
                    if (count % 4 === 0) {
                        //activitiesRows = my.state.activitiesRows;
                        activitiesRows.push(<ExperienceRow activities={activitiesRow} key={i}/>);
                        my.setState({activitiesRows: activitiesRows});
                        activitiesRow = [];
                    }
                });
                my.setState({updated: true});
            } else {
                my.state.activitiesRows.push(<ExperienceTitle key={1} title="Лучшие впечатления для Вас"/>);
            }
        }));
    }

    render() {
        return (
            <React.Fragment>
                {this.state.activitiesRows}
            </React.Fragment>
        );
    }
};
