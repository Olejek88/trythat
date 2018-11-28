import React from 'react';
import {inject} from "mobx-react/index";
import Link from "react-router-dom/es/Link";

@inject('activityStore','commonStore','activityListingStore')
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
        let activity_rating = activity.luminary.rating;
        let activity_image = this.props.commonStore.apiServer+this.props.activity.activityImages[0].image.path;
        let luminary_image = this.props.commonStore.apiServer+activity.luminary.user.image.path;
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
                            <span className="sg-c-2" style={{margin: '0 5px'}}> ({activity_rating}) </span>
                        </p>
                    </div>
                    <div className="body-row">
                        <div className="main sg-inline-top">
                            <div className="two-col-1 col sg-f-ttl" style={{margin: '10px 0', width: '100%', display: 'inline-flex'}}>
                                <div style={{margin: '0 10px', width: '20%'}}><img src={activity_image} style={{width: '140px'}} alt={""}/>
                                </div>
                                <div style={{margin: '0 10px', width: '80%'}}>
                                    <div><a className="js-pdpDetails sg-c-1">
                                        {activity.title}</a></div>
                                    <div className="sg-c-2">{activity.description.substr(0,220)+".."}</div>
                                    <div className="sg-c-2">
                                    </div>
                                    <div className="convert" style={{marginTop: '10px', cursor: 'pointer'}}>
                                        <Link className="sg-inline-middle"
                                              to={'/add/'+activity.id}>
                                            <div className={this.state.favoredClass}
                                                 style={{width: '22px', height: '22px', backgroundSize: 'cover'}}>
                                            </div>
                                            <span className="wishlist-text sg-c-2 sg-f-btn sg-text-transform"
                                                  style={{margin: '2px 2px 2px 5px'}}>Редактировать</span>
                                        </Link>
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
