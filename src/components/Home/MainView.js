import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom'
import {parse as qsParse} from 'query-string';
import Banner from "./Banner";
import MainCategories from "./MainCategories";
import ExperienceTitle from "../Experience/ExperienceTitle";
import ExperienceRow from "../Experience/ExperienceRow";
import FooterCategories from "../FooterCategories";

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activitiesRows: [],
            updated: false
        };
    }

    componentDidMount() {
        let predicate = {
             filter: '',
             id: 0
        };
        this.props.activityStore.setPredicate(predicate);
        let my = this;
        let activitiesRow = [];
        let activitiesRows = my.state.activitiesRows;
        let count = 0;
        this.props.activityStore.loadActivities().then(() => {
            this.props.activityStore.activitiesRegistry.forEach(function (activity, i) {
                activitiesRow.push(activity);
                count++;
                if (count % 4 === 0) {
                    activitiesRows.push(<ExperienceRow activities={activitiesRow} key={i}/>);
                    my.setState({activitiesRows: activitiesRows});
                    activitiesRow = [];
                }
            });
            if (count % 4 !== 0) {
                activitiesRows.push(<ExperienceRow activities={activitiesRow} key={count}/>);
                my.setState({activitiesRows: activitiesRows});
                activitiesRow = [];
            }
            my.setState({updated: true});
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
                <Banner/>
                <MainCategories/>
                <ExperienceTitle/>
                {this.state.updated && this.state.activitiesRows}
                <FooterCategories/>
            </React.Fragment>
        );
    }
}
export default inject('activityStore', 'commonStore', 'userStore')(withRouter(MainView));
