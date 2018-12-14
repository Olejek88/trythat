import React from 'react';
import {inject} from 'mobx-react';
import ActivityListItem from "./ActivityListItem";
import ActivityListingItem from "./ActivityListingItem";
import MyMenu from "./MyMenu";
import {action} from "mobx/lib/mobx";

class MyActivities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update: false,
            showSearch: true,
            search: '',
            header: 'Предложения'
        };
        this.activitiesRows = [];
        this.inputChange = this.inputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.fillList(nextProps);
    }

    componentWillMount() {
        /*
                if (!this.props.userStore.currentLuminary || this.props.userStore.currentLuminary.id==="888888")
                    this.props.history.replace('/my');
        */
        //console.log('componentWillMount');
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
        this.props.activityStore.loadActivities().then(action((activities) => {
            activities.forEach(function (activity, i) {
                self.activitiesRows.push(<ActivityListItem activity={activity} key={i}/>);
            });
        }));
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
            this.props.activityListingStore.loadActivityListing(activity).then(action((activity_listing) => {
                activity_listing.forEach(function (activity_list, i) {
                    self.activitiesRows.push(<ActivityListingItem activity={activity} activity_listing={activity_list}
                                                                  key={i}/>);
                });
            }));
            this.setState({showSearch: false});
        }
        else {
            if (nextProps) {
                filter = nextProps.match.params.filter;
                if (filter !== '') {
                    let predicate = {
                        filter: 'luminary',
                        id: this.props.userStore.currentLuminary.id
                    };
                    if (filter === 'wish') {
                        this.setState({header: 'Отслеживаемые'});
                    }
                    if (filter === 'current') {
                        this.setState({header: 'Предложения текущие'});
                    }
                    if (filter === 'closed') {
                        this.setState({header: 'Предложения завершенные'});
                    }
                    this.props.activityStore.setPredicate(predicate);
                }
            }
            else if (this.props.userStore.currentLuminary) {
                let predicate = {
                    filter: 'luminary',
                    id: this.props.userStore.currentLuminary.id
                };
                this.props.activityStore.setPredicate(predicate);
            }
            this.props.activityStore.loadActivities()
                .then(() => {
                    let activitiesList = Array.from(this.props.activityStore.activitiesRegistry.values());
                    activitiesList.forEach(function (activity, i) {
                        self.activitiesRows.push(<ActivityListItem activity={activity} key={i}/>);
                    });
                    this.setState({showSearch: true});
                    this.setState({update: true});
                }).catch(action(err => {
                //console.log(err);
                throw err;
            }));
            /*
                        this.props.activityStore.loadActivities().then(action((activities) => {
                            activities.forEach(function (activity, i) {
                                self.activitiesRows.push(<ActivityListItem activity={activity} key={i}/>);
                            })
                        })).catch(action(err => {
                            console.log(err);
                            throw err;
                        }));
            */
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

export default inject('userStore', 'activityStore', 'activityListingStore')(MyActivities);
