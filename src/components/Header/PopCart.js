import React from 'react';
import {observer} from 'mobx-react';
import OrderListPopItem from "../Orders/OrderListPopItem";
import {inject} from "mobx-react/index";

@observer
@inject('orderStore')
class PopCart extends React.Component {
    render() {
        let orderList = '';
        const orderStore = this.props.orderStore;
        const orders = orderStore.loadTestOrders();
        let sum = 0;
        if (orders) {
            orderList = orders.map(function (order, i) {
                let activity = order.listing.activity;
                sum += order.listing.cost;
                console.log (order);
                return (<OrderListPopItem activity={activity} key={i} order={order}/>);
            });
        }
        else orderList = 'Корзина пуста';
        return (
            <div id="cart-popup-wrapper" className="io-popup-wrapper">
                <div id="cart-popup-box" className="sg-bg-3 sg-bd-3">
                    <div id="cart-popup-carrot" className="io-arrow-popup-carrot" style={{marginLeft: '420px'}}>
                    </div>
                    <div id="cart-popup-added-block">
                        <div style={{margin: '12px 0 0 20px'}}>
                            <p id="cart-popup-added-message">
                            <span className="added-icon">
                            </span>
                                <span className="added-text sg-text-transform">добавлены в корзину</span>
                            </p>
                        </div>
                    </div>
                    <div id="cart-popup-content" style={{marginTop: '0px'}}>
                        <div id="cart-popup" className="io-arrow-popup">
                            <div id="cart-popup-item-count" style={{display: 'none'}}>1</div>
                            <div id="cart-popup-items" style={{height: '83px'}}>
                                <div className="mCustomScrollBox" id="mCSB_1"
                                     style={{
                                         position: 'relative',
                                         height: '100%',
                                         overflow: 'hidden',
                                         maxWidth: '100%'
                                     }}>
                                    <div className="mCSB_container mCS_no_scrollbar"
                                         style={{position: 'relative', top: '0'}}>
                                        <ul style={{padding: '0 10px'}}>
                                            {orderList}
                                            <div className="seperator sg-bd-2 sg-no-bd-top">
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="mCSB_scrollTools" style={{position: 'absolute', display: 'none'}}>
                                        <div className="mCSB_draggerContainer" style={{position: 'relative'}}>
                                            <div className="mCSB_dragger" style={{position: 'absolute', top: '0px'}}>
                                                <div className="mCSB_dragger_bar" style={{position: 'relative'}}>
                                                </div>
                                            </div>
                                            <div className="mCSB_draggerRail">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer sg-f-dspl-s sg-inline-middle"
                                 style={{
                                     width: '100%',
                                     justifyContent: 'space-between',
                                     padding: '10px 20px',
                                     boxSizing: 'border-box'
                                 }}>
                                <div className="goto-cart">
                                    <a href="/#/cart" className="goto-link sg-text-transform">корзина</a>
                                </div>
                                <div className="subtotal" style={{maxWidth: '150px'}}>
                                    Подитог: {sum}р.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopCart;
