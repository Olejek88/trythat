import React from 'react';
import WishListPopItem from "../WishList/WishListPopItem";
import {inject} from "mobx-react/index";
import {action} from "mobx/lib/mobx";

class PopWish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            wishList: 'Список желаний пуст'
        };
    }

    componentWillMount() {
        let self = this;
        let count = 1;
        let wishListItems = [];
        let customer = this.props.userStore.currentCustomer;
        if (customer) {
            this.props.wishListStore.loadWishList(customer).then(() => {
                this.props.wishListStore.wishListRegistry.forEach(function (wishList, i) {
                    let activity = wishList.activity;
                    const activityListingStore = self.props.activityListingStore;
                    activityListingStore.loadActivityListing(activity).then(action(() => {
                        const activityPrice = activityListingStore.loadActivityListingMinimumPrice();
                        wishListItems.push(<WishListPopItem activity={activity} key={count} price={activityPrice}/>);
                        self.setState({wishList: wishListItems});
                        self.setState({updated: true});
                        count++;
                    }));
                });
            });
        }
    }

    render() {
        return (
            <div id="wish-popup-wrapper" className="io-popup-wrapper">
                <div id="wish-popup-box" className="sg-bg-3 sg-bd-3">
                    <div id="wish-popup-carrot" className="io-arrow-popup-carrot" style={{marginLeft: '400px'}}>
                    </div>
                    <div id="wish-popup-content" className="sg-f-subttl"
                         style={{marginTop: '0px', textAlign: 'center'}}>
                        <div id="wish-popup" className="io-arrow-popup">
                            <div id="wish-popup-items" style={{height: '82px'}} className="mCustomScrollbar _mCS_1">
                                <div className="mCustomScrollBox" id="mCSB_1" style={{
                                    position: 'relative',
                                    height: '100%', overflow: 'hidden', maxWidth: '100%'
                                }}>
                                    <div className="mCSB_container mCS_no_scrollbar"
                                         style={{position: 'relative', top: '0'}}>
                                        <ul className="wish-popup-ul">
                                            <React.Fragment>
                                                {this.state.updated &&
                                                this.state.wishList
                                                }
                                            </React.Fragment>
                                            <div
                                                className="separator sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right">
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div style={{float: 'left', margin: '0px 0 0 20px'}}>
                                    <a href={"/#/wish_list"} className="goto-link">Смотреть весь список</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('activityStore', 'activityListingStore', 'wishListStore', 'userStore')(PopWish);
