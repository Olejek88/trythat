import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import ActivityListItem from "./ActivityListItem";
import ActivityListingItem from "./ActivityListingItem";
import MyMenu from "./MyMenu";
import {action} from "mobx/lib/mobx";

@withRouter
@inject('userStore', 'activityStore', 'activityListingStore')
export default class MyActivities extends React.Component {
    constructor() {
        super();
        this.state = {
            showSearch: true,
            search: '',
            header: 'Предложения'
        };
        this.activitiesRows = [];
        this.inputChange = this.inputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.fillList(nextProps);
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.fillList(null);
    }

    inputChange(event) {
        let self = this;
        self.activitiesRows = [];
        this.setState({
            search: event.target.value
        });
        let predicate = {
            filter: 'search',
            id: this.state.search,
            limit: 10
        };
        this.props.activityStore.setPredicate(predicate);
        let activities = this.props.activityStore.loadActivities();
        activities.forEach(function (activity, i) {
            self.activitiesRows.push(<ActivityListItem activity={activity} key={i}/>);
        });
    }

    fillList(nextProps) {
        let filter = null;
        let activity = null;
        let self = this;
        self.activitiesRows = [];

        if (nextProps) {
            filter = nextProps.match.params.filter;
            if (filter === 'listing')
                activity = this.props.activityStore.loadActivity(nextProps.match.params.listing);
        }
        if (activity) {
            let activity_listing = this.props.activityListingStore.loadActivityListing(activity);
            activity_listing.forEach(function (activity_list, i) {
                self.activitiesRows.push(<ActivityListingItem activity={activity} activity_listing={activity_list}
                                                              key={i}/>);
            });
            this.setState({showSearch: false});
        }
        else {
            if (nextProps) {
                console.log(filter);
                filter = nextProps.match.params.filter;
                if (filter !== '') {
                    let predicate = {
                        filter: filter,
                        id: this.props.userStore.currentCustomer.id,
                        limit: 10
                    };
                    if (filter === 'wish') {
                        this.setState ({header: 'Отслеживаемые'});
                    }
                    if (filter === 'current') {
                        this.setState ({header: 'Предложения текущие'});
                    }
                    if (filter === 'closed') {
                        this.setState ({header: 'Предложения завершенные'});
                    }
                    this.props.activityStore.setPredicate(predicate);
                }
            }

            this.props.activityStore.loadActivities().then(action((activities) => {
                activities.forEach(function (activity, i) {
                    self.activitiesRows.push(<ActivityListItem activity={activity} key={i}/>);
                })
            })).catch(action(err => {
                console.log(err);
                throw err;
            }));
            this.setState({showSearch: true});
        }
    }

    render() {
        return (
            <div className="main" style={{
                minHeight: '100%', width: '100%', position: 'relative', margin: '0 auto',
                overflow: 'hidden', paddingTop: '80px'
            }}>
                <div id="vendor-admin" className="custom-form vendor-page">
                    <div className="page-left-col" style={{width: '15%'}}>
                        <MyMenu/>
                    </div>
                    <div className="page-right-col" style={{width: '85%', marginTop: '0px', marginLeft: '15%'}}>
                        <div className="view-container">
                            <div className="view-frame">
                                <div className="communication_div desktop">
                                    <div className="top_div">
                                        <div className="conversation_title sg-f-dspl-m">{this.state.header}</div>
                                        <div style={{clear: 'both'}}>
                                        </div>
                                    </div>
                                    {this.state.showSearch &&
                                    <div className="search_div">
                                        <input onChange={this.inputChange}
                                               className="vendor_search_text search_box sg-bd-8 ng-pristine ng-valid ng-touched"
                                               name="search" aria-label="Искать" placeholder="Искать"
                                               style={{paddingLeft: '50px', width: '100%'}} type="search"/>
                                    </div>
                                    }
                                    <div className="conversation_div">
                                        {this.activitiesRows}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
