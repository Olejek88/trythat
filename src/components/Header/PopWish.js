import React from 'react';
import {observer} from 'mobx-react';
import WishListPopItem from "../WishList/WishListPopItem";
import {inject} from "mobx-react/index";
import {action} from "mobx/lib/mobx";

@inject('activityStore', 'activityListingStore', 'userStore')
@observer
class PopWish extends React.Component {
    constructor() {
        super();
        this.state = {
            updated: false,
            wishList: 'Список желаний пуст'
        };
        this.wishList = 'Список желаний пуст';
    }

    componentWillMount() {
        let self = this;
        let predicate = {
            filter: 'wish',
            id: this.props.userStore.currentUser.id
        };
        this.props.activityStore.setPredicate(predicate);
        this.props.activityStore.loadActivities().then(action((activities) => {
                activities.forEach(function (activity, i) {
                    const activityListingStore = this.props.activityListingStore;
                    activityListingStore.loadActivityListing(activity).then(action(() => {
                        const activityPrice = activityListingStore.loadActivityListingMinimumPrice();
                        self.wishList.push(<WishListPopItem activity={activity} key={i} price={activityPrice}/>);
                        self.setState({wishList: self.wishList});
                    }));
                });
            }));
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
                                    <a href={"/#/my/wish"} className="goto-link">Смотреть весь список</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopWish;
