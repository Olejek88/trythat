import React from 'react';
import OrderListPopItem from "../Orders/OrderListPopItem";
import {inject} from "mobx-react/index";
import {action} from "mobx/lib/mobx";

class PopCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            count: 0,
            height: 0,
            sum: 0,
            orderList: 'Корзина пуста'
        };
        this.orderList = [];
    }

    componentWillMount() {
        let self = this;
        let count = 0;
        let predicate = {
            filter: 'order-status',
            id: 1
        };
        this.props.orderStore.setPredicate(predicate);
        this.props.orderStore.loadOrders().then(action((orders) => {
            orders.forEach(function (order, i) {
                let activity = order.activityListing.activity;
                if (count<=5) {
                    self.setState({sum: self.state.sum + order.activityListing.cost});
                    self.orderList.push(<OrderListPopItem activity={activity} key={i} order={order}/>);
                }
                count++;
            });
            self.setState({count: self.orderList.length});
            self.props.commonStore.ordersCount = self.orderList.length;
            window.localStorage.setItem('orders_count', self.orderList.length.toString(10));
            self.setState({height: self.orderList.length * 80});
            self.setState({orderList: self.orderList}, () => {
                self.setState({updated: true})
            });
        }));
    }

    render() {
        return (
            <React.Fragment>
                {this.state.count > 0 &&
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
                                <div id="cart-popup-item-count" style={{display: 'inline'}}></div>
                                <div id="cart-popup-items" style={{height: this.state.height + 'px'}}>
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
                                                {this.state.updated &&
                                                this.state.orderList
                                                }
                                                <div className="seperator sg-bd-2 sg-no-bd-top">
                                                </div>
                                            </ul>
                                        </div>
                                        <div className="mCSB_scrollTools"
                                             style={{position: 'absolute', display: 'none'}}>
                                            <div className="mCSB_draggerContainer" style={{position: 'relative'}}>
                                                <div className="mCSB_dragger"
                                                     style={{position: 'absolute', top: '0px'}}>
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
                                        <a href={"/#/cart"} className="goto-link sg-text-transform">корзина</a>
                                    </div>
                                    <div className="subtotal" style={{maxWidth: '150px'}}>
                                        Подитог: {this.state.sum}р.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </React.Fragment>
        );
    }
}

export default inject('orderStore', 'commonStore')(PopCart);
