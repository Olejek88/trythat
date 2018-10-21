import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import {parse as qsParse} from 'query-string';
import ExperienceTitle from "../Experience/ExperienceTitle";
import ExperienceRow from "../Experience/ExperienceRow";

@inject('activityStore', 'userStore')
@withRouter
export default class ActivityView extends React.Component {
    constructor() {
        super();
        this.state = {
            activitiesRows: []
        };
    }

    componentWillMount() {
        let predicate = {
            filter: this.props.filter,
            id: this.props.id
        };
        this.props.activityStore.setPredicate(predicate);
    }

    componentDidMount() {
        let activities = this.props.activityStore.loadTestActivities(12);
        let my = this;
        let activitiesRow = [];
        let activitiesRows = my.state.activitiesRows;
        let count = 0;
        if (activities && activities.length>0) {
            switch (my.props.filter) {
                case 'city':
                    activitiesRows.push(<ExperienceTitle key={1} title={'Лучшие впечатления в Вашем городе '+ activities[0].location.city.title}/>);
                    break;
                case 'occasion':
                    activitiesRows.push(<ExperienceTitle key={1} title={'Лучшие впечатления на случай '+ activities[0].occasion.title}/>);
                    break;
                case 'trends':
                    activitiesRows.push(<ExperienceTitle key={1} title={'Лучшие впечатления для '+ activities[0].trending.title}/>);
                    break;
                default:
                    activitiesRows.push(<ExperienceTitle key={1} title="Лучшие впечатления для Вас"/>);
                    break;
            }
        }
        activities.forEach(function (activity, i) {
            activitiesRow.push(activity);
            count++;
            if (count % 4 === 0) {
                activitiesRows = my.state.activitiesRows;
                activitiesRows.push(<ExperienceRow activities={activitiesRow} key={i}/>);
                my.setState({activitiesRows: activitiesRows});
                activitiesRow = [];
            }
        });
    }

    componentDidUpdate(previousProps) {
        if (
            this.getTab(this.props) !== this.getTab(previousProps) ||
            this.getTag(this.props) !== this.getTag(previousProps)
        ) {
            this.props.activityStore.setPredicate(this.getPredicate());
            this.props.activityStore.loadActivity();
        }
    }

    getTag(props = this.props) {
        return qsParse(props.location.search).tag || "";
    }

    getTab(props = this.props) {
        return qsParse(props.location.search).tab || 'all';
    }

    getPredicate(props = this.props) {
        switch (this.getTab(props)) {
            case 'feed':
                return {myFeed: true};
            case 'tag':
                return {tag: qsParse(props.location.search).tag};
            default:
                return {};
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.activitiesRows}
            </React.Fragment>
        );
    }
};
