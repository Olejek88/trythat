import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import ExperienceTitle from "../Experience/ExperienceTitle";
import ExperienceRow from "../Experience/ExperienceRow";
import {action} from "mobx/lib/mobx";

@inject('activityStore', 'userStore', 'cityStore')
@withRouter
export default class ActivityView extends React.Component {
    constructor() {
        super();
        this.state = {
            activitiesRows: [],
            updated: false,
            filter: '',
            id: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({activitiesRows:[], filter: nextProps.filter, id: nextProps.i});
        this.fillList()
    }

    componentDidMount() {
        this.setState({filter: this.props.match.params.filter, id: this.props.match.params.id});
        this.fillList()
    }

    fillList() {
        let my = this;
        let activitiesRow = [];
        let first_activity = null;
        let activitiesRows = my.state.activitiesRows;
        let count = 0;

        let predicate = {
            filter: this.state.filter,
            id: this.state.id,
            limit: 12
        };
        this.props.activityStore.setPredicate(predicate);

        this.props.activityStore.loadActivities().then(() => {
            my.state.activitiesRows.push(
                <ExperienceTitle key={100000001} title={'Лучшие впечатления для Вас'}/>);

            this.props.activityStore.activitiesRegistry.forEach(function (activity, i) {
                activitiesRow.push(activity);
                first_activity = activity;
                count++;
                if (count % 4 === 0) {
                    //activitiesRows = my.state.activitiesRows;
                    activitiesRows.push(<ExperienceRow activities={activitiesRow} key={count}/>);
                    my.setState({activitiesRows: activitiesRows});
                    activitiesRow = [];
                }
            });
            if (count % 4 !== 0) {
                activitiesRows.push(<ExperienceRow activities={activitiesRow} key={count}/>);
                my.setState({activitiesRows: activitiesRows});
                activitiesRow = [];
            }

            if (first_activity) {
                switch (my.state.filter) {
                    case 'city':
                        let city = this.props.cityStore.loadCity(my.state.id);
                        if (city)
                            my.state.activitiesRows[0]=
                                <ExperienceTitle key={100000001} title={'Лучшие впечатления в Вашем городе '
                                + city.title}/>;
                        break;
                    case 'occasion':
                        if (first_activity.occasion)
                            my.state.activitiesRows[0]=<ExperienceTitle key={10000001} title={'Лучшие впечатления на случай '
                            + first_activity.occasion.title}/>;
                        break;
                    case 'trends':
                        if (first_activity.trending)
                            my.state.activitiesRows[0]=<ExperienceTitle key={10000001} title={'Лучшие впечатления для '
                            + first_activity.trending.title}/>;
                        break;
                    default:
                        my.state.activitiesRows[0]=<ExperienceTitle key={10000001} title="Лучшие впечатления для Вас"/>;
                        break;
                }
            } else {
                my.state.activitiesRows[0]=<ExperienceTitle key={10000001} title="Лучшие впечатления для Вас"/>;
            }
            my.setState({updated: true});
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.updated && this.state.activitiesRows}
            </React.Fragment>
        );
    }
};
