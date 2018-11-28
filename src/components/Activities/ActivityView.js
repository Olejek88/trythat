import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import ExperienceTitle from "../Experience/ExperienceTitle";
import ExperienceRow from "../Experience/ExperienceRow";

@inject('activityStore', 'activityCategoryStore', 'userStore', 'cityStore', 'categoryStore', 'trendingStore', 'occasionStore')
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
        this.setState({activitiesRows:[], filter: nextProps.filter, id: nextProps.i});
        this.fillList(nextProps)
    }

    componentWillMount() {
        this.setState({activitiesRows:[], filter: this.props.match.params.filter, id: this.props.match.params.id});
        this.fillList(this.props)
    }

    componentDidUpdate() {
        if (!this.state.updated)
            this.setState({updated: true});
    }

    fillList(props) {
        let my = this;
        let activitiesRow = [];
        let first_activity = null;
        let count = 0;
        let predicate = {
            filter: this.state.filter,
            id: this.state.id
        };
        if (props.i>0 && props.filter!=='') {
            predicate.filter = props.filter;
            predicate.id = props.i;
        }
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
                    my.state.activitiesRows.push(<ExperienceRow activities={activitiesRow} key={count}/>);
                    activitiesRow = [];
                }
            });
            if (count % 4 !== 0) {
                my.state.activitiesRows.push(<ExperienceRow activities={activitiesRow} key={count}/>);
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
                    case 'category':
                        let category = this.props.categoryStore.loadCategory(my.state.id);
                        if (category)
                            my.state.activitiesRows[0]=
                                <ExperienceTitle key={100000001} title={'Лучшие впечатления в категории ' + category.title}/>;
                        break;
                    case 'activity-category':
                        let activity_category = this.props.activityCategoryStore.loadActivityCategory(my.state.id);
                        if (activity_category)
                            my.state.activitiesRows[0]=
                                <ExperienceTitle key={100000001} title={'Лучшие впечатления в категории '
                                + activity_category.title}/>;
                        break;
                    case 'occasion':
                        let occasion = this.props.occasionStore.loadOccasion(my.state.id);
                        if (occasion)
                            my.state.activitiesRows[0]=<ExperienceTitle key={10000001} title={occasion.title + ' впечатления'}/>;
                        break;
                    case 'trend':
                        let trend = this.props.trendingStore.loadTrending(my.state.id);
                        if (trend)
                            my.state.activitiesRows[0]=<ExperienceTitle key={10000001} title={'Лучшие ' + trend.title +
                            ' впечатления'}/>;
                        break;
                    default:
                        my.state.activitiesRows[0]=<ExperienceTitle key={10000001} title="Лучшие впечатления для Вас"/>;
                        break;
                }
            } else {
                my.state.activitiesRows[0]=<ExperienceTitle key={10000001} title="Лучшие впечатления для Вас"/>;
            }
            my.setState({updated: false});
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
