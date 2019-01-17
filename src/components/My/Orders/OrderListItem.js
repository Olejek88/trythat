import React from 'react';
import {inject} from "mobx-react/index";
import Link from "react-router-dom/es/Link";

class OrderListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOrderItem: true
        };

        this.onAccept = (activity) => {
            //this.props.orderStore.updateOrder();
        };
    }

    componentDidMount() {

    }

    render() {
        const order = this.props.order;
        console.log(order);
        const activity = this.props.order.activityListing.activity;
        let activity_rating = activity.luminary.rating;
        let activity_image = this.props.commonStore.apiServer + activity.activityImages[0].image.path;
        let luminary_image = this.props.commonStore.apiServer + activity.luminary.user.image.path;
        let luminary_name = activity.luminary.user.firstName + " " + activity.luminary.user.lastName;
        return (
            <React.Fragment>
                {this.state.showOrderItem &&
                <div className="vendorBlock sg-bd-3">
                    <div
                        className="vendorHeading sg-inline-middle sg-bg-2 sg-bd-3 sg-no-bd-top sg-no-bd-left sg-no-bd-right vendor-list">
                        <div className="vendor-img">
                            <img src={luminary_image} style={{width: '100%'}} alt={""}/>
                        </div>
                        <p className="vendor-name sg-f-ttl sg-inline-middle sg-inline-flex-grow"
                           style={{margin: '0 10px'}}>{luminary_name}
                            <span className="sg-c-2" style={{margin: '0 5px'}}> ({activity_rating}) </span>
                        </p>
                    </div>
                    <div className="body-row">
                        <div className="main sg-inline-top">
                            <div className="two-col-1 col sg-f-ttl"
                                 style={{margin: '10px 0', width: '100%', display: 'inline-flex'}}>
                                <div style={{margin: '0 10px', width: '20%'}}>
                                    <img src={activity_image} style={{width: '140px', borderRadius: '5px'}} alt={""}/>
                                </div>
                                <div style={{margin: '0 10px', width: '80%'}}>
                                    <div><span className="js-pdpDetails sg-c-1">
                                        {activity.title}</span></div>
                                    <div className="sg-c-2">{activity.description.substr(0, 220) + ".."}</div>
                                    <div className="sg-c-2">
                                    </div>
                                    <div className="action-button">
                                        <div className="sg-inline-flex-grow text-align-center action-button__list_item">
                                            <div className="button-green primaryButton button size-m" onClick={() => {
                                                     this.onAccept(this.order)
                                                 }}>
                                                <div className="title-container"><p className="title">
                                                    <span style={{display: 'inline-block'}}>Принять</span>
                                                </p></div>
                                            </div>
                                        </div>
                                        <div className="sg-inline-flex-grow text-align-center action-button__list_item">
                                            <div className="button-red primaryButton button size-m" onClick={() => {
                                                     this.onAccept(this.order)
                                                 }}>
                                                <div className="title-container"><p className="title">
                                                    <span style={{display: 'inline-block'}}>Отклонить</span>
                                                </p></div>
                                            </div>
                                        </div>
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

export default inject('orderStore', 'activityStore', 'commonStore', 'activityListingStore')(OrderListItem);
