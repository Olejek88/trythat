import React from 'react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";
import WishListItem from "./WishListItem";
import {action} from "mobx/lib/mobx";

class WishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: 0,
            wishList: []
        };
    }

    componentWillMount() {
        let self = this;
        let count = 1;
        let customer = this.props.userStore.currentCustomer;
        let wishListItems = [];
        if (customer) {
            this.props.wishListStore.loadWishList(customer).then(() => {
                this.props.wishListStore.wishListRegistry.forEach(function (wishList, i) {
                    let activity = wishList.activity;
                    const activityListingStore = self.props.activityListingStore;
                    activityListingStore.loadActivityListing(activity).then(action(() => {
                        const activityPrice = activityListingStore.loadActivityListingMinimumPrice();
                        wishListItems.push(<WishListItem wishList={wishList} key={count} price={activityPrice}/>);
                        self.setState ({wishList: wishListItems});
                    }));
                    count++;
                });
            });
        }
    }

    render() {
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
                                            {this.state.wishList}
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

export default inject('activityStore', 'activityListingStore', 'wishListStore', 'userStore')(withRouter(WishList));
