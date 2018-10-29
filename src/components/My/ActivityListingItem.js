import React from 'react';
import {inject} from "mobx-react/index";
import Link from "react-router-dom/es/Link";

@inject('activityStore', 'activityListingStore')
class ActivityListingItem extends React.Component {
    constructor() {
        super();
        this.state = {
            showActivityItem: true
        };

        this.onRemove = (activity_listing) => {
            this.props.activityListingStore.deleteActivityListing(activity_listing._id);
            this.setState({showActivityItem: false})
        };
    }

    render() {
        const activity = this.props.activity;
        const activity_listing = this.props.activity_listing;
        let activity_image = activity.images[0].path;

        return (
            <React.Fragment>
                {this.state.showActivityItem &&
                <div className="vendorBlock sg-bd-3">
                    <div
                        className="vendorHeading sg-inline-middle sg-bg-2 sg-bd-3 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                        style={{padding: '20px 15px', width: '100%', boxSizing: 'border-box'}}>
                        <div className="vendor-img">
                            <img src={activity_image} style={{width: '100%'}} alt={""}/>
                        </div>
                        <Link className="sg-inline-middle" to={"/my"} params={{activity: null}}>
                            <p className="vendor-name sg-f-ttl sg-inline-middle sg-inline-flex-grow"
                               style={{margin: '0 10px'}}>{activity.title}
                            </p>
                        </Link>
                    </div>
                    <div className="body-row">
                        <div className="main sg-inline-top">
                            <div className="two-col-2 col sg-inline-flex-grow sg-f-ttl" style={{margin: '10px 0'}}>
                                <div className="sg-inline-top sg-c-2 f-style-ovr1"
                                     style={{width: '100%', paddingBottom: '7px'}}>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Количество человек</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Длительность</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Цена</span>
                                    </div>
                                    <div className="remove-convert"
                                         style={{width: '28px', position: 'relative', top: '-6px'}}>
                                        <div className="remove">
                                            <img src={"images/icon_close.png"} alt="remove" style={{width: '28px'}}
                                                 onClick={() => {
                                                     this.onRemove(activity_listing)
                                                 }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="sg-inline-top sg-f-ttl" style={{width: '100%'}}>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-quantity">{activity_listing.customers}</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-quantity">{activity_listing.duration.period}</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-price">{activity_listing.cost}
                                            {activity_listing.currency.title}</span>
                                    </div>
                                    <div style={{width: '28px'}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: '0 20px'}}>
                        </div>
                    </div>
                </div>}
            </React.Fragment>
        );
    }
}

export default ActivityListingItem;
