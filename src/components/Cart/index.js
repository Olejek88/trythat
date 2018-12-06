import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import OrderListItem from "../Orders/OrderListItem";
import {action} from "mobx/lib/mobx";

@inject('orderStore')
@withRouter
export default class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            updated: false,
            count: 0,
            height: 0,
            sum: 0,
            orderList: 'Корзина пуста'
        };
        this.orderList=[];
        this.onSubmit = () => {
            this.props.history.push("/cart/checkout");
        };
    }

    componentWillMount() {
        let self = this;
        let predicate = {
            filter: 'order-status',
            id: 1
        };
        this.props.orderStore.setPredicate(predicate);
        this.props.orderStore.loadOrders().then(action((orders) => {
            if (orders) {
                orders.forEach(function (order, i) {
                    let activity = order.activityListing.activity;
                    self.setState({sum: self.state.sum + order.activityListing.cost});
                    self.orderList.push(<OrderListItem activity={activity} key={i} order={order}/>);
                });
                self.setState({count: self.orderList.length});
                self.setState({orderList: self.orderList},() => {
                    console.log(self.state.orderList);
                    self.setState({updated: true})
                });
            }
        }));
    }

    render() {
        return (
            <div id="shopping-cart">
                <div className="body">
                    <div className="box">
                        <div className="main-title sg-inline-middle"
                             style={{width: '100%', marginBottom: '30px'}}>
                            <a className="sg-inline-middle sg-c-1 sg-f-bdy" href="/"
                               style={{flex: '.75', marginTop: '20px'}}>
                                        <span
                                            className="continue-shopping sg-text-transform sg-arrow-l ">&lt; Продолжить</span>
                            </a>
                            <h3 className="sg-f-dspl-m sg-inline-flex-grow"
                                style={{marginTop: '20px'}}>Корзина</h3>
                        </div>
                        <div className="sg-inline-top" style={{width: '100%'}}>
                            <div className="sg-inline-flex-grow" style={{width: '100%'}}>
                                <div id="left-block">
                                    <div id="product-table" className="">
                                        <div className="table-body">
                                            {this.state.orderList}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="right-block" className="sg-f-bdy ">
                                <div id="summary-box" className="summary-box  sg-bd-3">
                                    <div style={{padding: '20px 10px 10px'}}>
                                        <div className="sg-inline-middle"
                                             style={{width: '100%', marginBottom: '5px'}}>
                                            <p className="title sg-inline-flex-grow">Подитог
                                                <span className="sg-c-2">({this.state.count})</span>
                                            </p>
                                            <p className="value">
                                                <span className="productTotal_summary">{this.state.sum}</span>
                                            </p>
                                        </div>
                                        <div className="row js-total-travel-cost sg-inline-middle"
                                             style={{margin: '5px 0 5px 0', width: '100%', display: 'none'}}>
                                            <p className="title sg-inline-flex-grow">Дополнительно</p>
                                            <p className="value">
                                                <span className="travelTotal_summary">0.00р</span>
                                            </p>
                                        </div>
                                        <hr/>
                                        <div className="currency-disclaimer sg-f-bdy-s">
                                            *Данная цена окончательна и не может быть изменена без обоюдного
                                            согласия
                                            обеих сторон.
                                        </div>
                                        <div className="row">
                                            <div className="start-checkout  primaryButton button"
                                                 style={{width: '100%'}} tabIndex="0" onClick={this.onSubmit}>
                                                <div className="title-container">
                                                    <p className="title">Оформить</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="shipping-estimation"
                                         className=" sg-bd-2 sg-no-bd-bottom sg-no-bd-left sg-no-bd-right"
                                         style={{padding: '15px 10px', boxSizing: 'border-box'}}>
                                        <div className="estimation-result-block"
                                             style={{marginTop: '15px', display: 'none'}}>
                                            <hr/>
                                            <div className="sg-inline-middle total" style={{width: '100%'}}>
                                                <p className="sg-inline-flex-grow">Итого</p>
                                                <p className="value"><span id="grandTotal"></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="help-box" className="disp-ovr1" style={{marginTop: '10px'}}>
                                    <div id="customer-support" style={{width: '100%'}}
                                         className="secondaryButton button">
                                        <div className="title-container"><p className="title">Поддержка</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
