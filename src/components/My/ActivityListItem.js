import React from 'react';
import {inject} from "mobx-react/index";
import Link from "react-router-dom/es/Link";

@inject('activityStore','activityListingStore')
class ActivityListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            showActivityItem: true
        };

        this.onRemove = (activity) => {
            console.log('remove');
            this.props.activityStore.deleteActivity(activity);
            this.setState({showActivityItem: false})
        };
    }

    render() {
        const activity = this.props.activity;

        let activity_listing_link = "/my/listing/" + activity._id;
        let activity_image = this.props.activity.images[0].path;

        let activity_price = this.props.activityListingStore.loadActivityListingMinimumPrice();
        let activity_quantity = this.props.activityListingStore.loadActivityListingQuantity();
        let activity_duration = this.props.activityListingStore.loadActivityListingDuration();

        //let activity_listing = this.props.activityListingStore.loadActivityListing(activity);

        let luminary_image = activity.luminary.user.image.path;
        let luminary_name = activity.luminary.user.firstName + " " + activity.luminary.user.lastName;

        return (
            <React.Fragment>
                {this.state.showActivityItem &&
                <div className="vendorBlock sg-bd-3">
                    <div className="vendorHeading sg-inline-middle sg-bg-2 sg-bd-3 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                        style={{padding: '20px 15px', width: '100%', boxSizing: 'border-box'}}>
                        <div className="vendor-img">
                            <img src={luminary_image} style={{width: '100%'}} alt={""}/>
                        </div>
                        <p className="vendor-name sg-f-ttl sg-inline-middle sg-inline-flex-grow"
                           style={{margin: '0 10px'}}>{luminary_name}
                            <span className="sg-c-2" style={{margin: '0 5px'}}> 1 </span>
                        </p>
                    </div>
                    <div className="body-row">
                        <div className="main sg-inline-top">
                            <div className="two-col-1 col sg-inline-top sg-f-ttl" style={{margin: '10px 0'}}>
                                <div><a href={activity_listing_link} className="sg-c-1">
                                    <img src={activity_image} style={{width: '140px'}} alt={""}/>
                                </a>
                                </div>
                                <div style={{margin: '0 10px', width: '50%'}}>
                                    <div><a className="js-pdpDetails sg-c-1">
                                        {activity.title}</a></div>
                                    <div className="sg-c-2">{activity.description.substr(0,88)}</div>
                                    <div className="sg-c-2">
                                    </div>
                                    <div className="convert" style={{marginTop: '10px', cursor: 'pointer'}}>
                                        <Link className="sg-inline-middle"
                                              to={activity_listing_link} params={{activity: activity}}>
                                            <div className={this.state.favoredClass}
                                                 style={{width: '22px', height: '22px', backgroundSize: 'cover'}}>
                                            </div>
                                            <span className="wishlist-text sg-c-2 sg-f-btn sg-text-transform"
                                                  style={{margin: '2px 2px 2px 5px'}}>Редактировать</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
                                                     this.onRemove(activity)
                                                 }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="sg-inline-top sg-f-ttl" style={{width: '100%'}}>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-quantity">{activity_quantity}</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-quantity">{activity_duration}</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-price">{activity_price}</span>
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

export default ActivityListItem;
