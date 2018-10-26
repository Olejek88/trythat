import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";
import WishListItem from "./WishListItem";

@observer
@withRouter
@inject('activityStore', 'activityListingStore', 'userStore')
class WishList extends React.Component {
    render() {
        let wishList = '';
        let predicate = {
            filter: 'wish',
            id: this.props.userStore.currentUser._id
        };
        this.props.activityStore.setPredicate(predicate);
        const activities = this.props.activityStore.loadActivities();
        const activityListingStore = this.props.activityListingStore;
        if (activities) {
            wishList = activities.map(function (activity,i) {
                activityListingStore.loadActivityListing(activity);
                const activityPrice = activityListingStore.loadActivityListingMinimumPrice();
                return (<WishListItem activity={activity} key={i} price={activityPrice}/>);
            });
        }
        else wishList = 'Список желаний пуст';
        return (
            <div id="content">
                <div className="view-container">
                    <div className="view-frame">
                        <div id="main-detail" className="wishlist_container">
                            <div id="account-content">
                                <div className="sg-inline-middle" style={{width: '100%', padding: '15px 0'}}>
                                    <div className="sg-inline-middle sg-inline-flex-grow">
                                        <h2 className="sg-f-dspl-m">Список желаний</h2>
                                        <div className="listed_heart_img"
                                             style={{width: '30px', height: '30px', backgroundSize: 'cover'}}>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ul id="wishlist" className="sg-f-dspl-s"
                                        style={{fontSize: '14px', height: '100%'}}>
                                        <React.Fragment>
                                            {wishList}
                                        </React.Fragment>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WishList;
