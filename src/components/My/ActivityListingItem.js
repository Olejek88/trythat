import React from 'react';
import {inject} from "mobx-react/index";
import Select from 'react-select';

@inject('activityStore', 'activityListingStore', 'durationStore', 'commonStore')
class ActivityListingItem extends React.Component {
    constructor() {
        super();
        this.activity = '';
        this.activity_listing = '';
        this.save_activity_listing = {};
        this.activity_image = '';

        this.activityListingDurations = [];
        this.activityListingCustomers = [
            {value: 1, label: "1"},
            {value: 2, label: "2"},
            {value: 3, label: '3'},
            {value: 4, label: '4'},
            {value: 5, label: '5'},
            {value: 6, label: '6'},
            {value: 7, label: '7'},
            {value: 8, label: '8'},
            {value: 9, label: '9'},
            {value: 10, label: '10'},
            {value: 15, label: '15'},
            {value: 20, label: '>20'},
            {value: 0, label: 'не ограничено'}
        ];

        this.state = {
            showActivityItem: true,
            activityListingDurations: [],
            customers: '',
            duration: '',
            cost: 1000
        };

        this.onRemove = (activity_listing) => {
            this.props.activityListingStore.deleteActivityListing(activity_listing.id);
            this.setState({showActivityItem: false})
        };

        this.onSave = () => {
            console.log(this.activity_listing);
            this.save_activity_listing = {
                id: this.activity_listing.id,
                activity_id: this.activity.id,
                duration_id: this.state.duration.value,
                cost: this.state.cost,
                customers: this.state.customers.value
            };
            this.props.activityListingStore.updateActivityListing(this.save_activity_listing);
        };

        this.handleSelectActivityDurationChange = (event) => {
            this.setState({duration: event});
        };

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };

        this.handleChange = (e) => {
            console.log (e);
            this.setState({customers: e});
        };
    }

    componentDidMount() {
        let self = this;
        this.activity = this.props.activity;
        this.activity_listing = this.props.activity_listing;
        this.activity_image = this.props.commonStore.apiServer+this.activity.activityImages[0].image.path;
        this.setState({cost: this.props.activity_listing.cost});
        this.activityListingCustomers.forEach(function (customers) {
            if (customers.value === self.activity_listing.customers) {
                self.setState({customers: customers});
            }
        });
        this.props.durationStore.loadDurations().then(() => {
            let durations = this.props.durationStore.durationsRegistry.values();
            self.activityListingDurations = Array.from(durations).map(x => ({label: x.duration, value: x.id}));
            self.setState({activityListingDurations: self.activityListingDurations});
            self.activityListingDurations.forEach(function (duration) {
                console.log(duration);
                if (duration.value === self.activity_listing.duration.id) {
                    self.setState({duration: duration});
                }
            });
            this.setState({durationList: self.durationList});
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.showActivityItem &&
                <div className="vendorBlock sg-bd-3">
                    <div
                        className="vendorHeading sg-inline-middle sg-bg-2 sg-bd-3 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                        style={{padding: '20px 15px', width: '100%', boxSizing: 'border-box'}}>
                        <div className="vendor-img">
                            <img src={this.activity_image} style={{width: '40px', height: '40px'}} alt={""}/>
                        </div>
                            <p className="vendor-name sg-f-ttl sg-inline-middle sg-inline-flex-grow"
                               style={{margin: '0 10px'}}>{this.activity.title}
                            </p>
                    </div>
                    <div className="body-row">
                        <div className="main sg-inline-top">
                            <div className="two-col-2 col sg-inline-flex-grow sg-f-ttl" style={{margin: '10px 0'}}>
                                <div className="sg-inline-top sg-c-2 f-style-ovr1"
                                     style={{width: '100%', paddingBottom: '7px'}}>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Количество человек</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center', width: '280px'}}>
                                        <span>Длительность</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Цена</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Действия</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                    </div>
                                </div>
                                <div className="sg-inline-top sg-f-ttl" style={{width: '100%'}}>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <Select
                                            style={{width: '100%', top: '5px'}}
                                            name="customers"
                                            id="customers"
                                            value={this.state.customers}
                                            placeholder={"Количество"}
                                            className="sg-f-hdr participants js-participants js-numGuests sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                                            onChange={(e) => this.handleChange(e)}
                                            options={this.activityListingCustomers}
                                        />
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <Select
                                            style={{width: '100%', top: '5px'}}
                                            name="duration"
                                            id="duration"
                                            value={this.state.duration}
                                            placeholder={"Продолжительность"}
                                            className="sg-f-hdr participants js-participants js-numGuests sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                                            onChange={(e) => this.handleSelectActivityDurationChange(e)}
                                            options={this.state.activityListingDurations}
                                        />
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <input style={{background: '#FFF', width: '100px', color: 'hsl(0,0%,50%)', fontSize: '13px'}}
                                               type="text"
                                               name="title"
                                               value={this.state.cost}
                                               onChange={this.updateState('cost')}/>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <div className="button-blue primaryButton button" style={{width: '90px'}}
                                             onClick={() => {
                                                 this.onSave()
                                             }}>
                                            <div className="title-container"><p className="title">
                                                <span style={{display: 'inline-block'}}>Сохранить</span>
                                            </p></div>
                                        </div>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <div className="button-red primaryButton button" style={{width: '90px'}}
                                             onClick={() => {
                                                 this.onRemove(this.activity_listing)
                                             }}>
                                            <div className="title-container"><p className="title">
                                                <span style={{display: 'inline-block'}}>Удалить</span>
                                            </p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: '0 20px'}}>
                        </div>
                    </div>
                </div>
                }
            </React.Fragment>
        );
    }
}

export default ActivityListingItem;
