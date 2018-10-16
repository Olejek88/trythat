import React from 'react';
import {observer} from 'mobx-react';
import WishListPopItem from "../WishList/WishListPopItem";
import {inject} from "mobx-react/index";

@observer
@inject('activityStore')
class PopWish extends React.Component {
    render() {
        let wishList = '';
        const activities = this.props.activityStore.getTestWishActivities();
        const activityStore = this.props.activityStore;
        console.log (activities);
        if (activities) {
            wishList = activities.map(function (activity,i) {
                let price = activityStore.loadTestActivityMinimumPrice(activity);
                return (<WishListPopItem activity={activity} key={i} price={price}/>);
            });
        }
        else wishList = 'Список желаний пуст';

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
                                                {wishList}
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
                                    <a href={"wishlist"} className="goto-link">Смотреть весь список</a>
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
