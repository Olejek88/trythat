import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";
import OrderListItem from "./OrderListItem";
import Link from "react-router-dom/es/Link";
import MyMenu from "../My/MyMenu";

@inject('userStore', 'orderStore')
@observer
@withRouter
class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            selected_open: 'selected',
            selected_closed: '',
            selected_canceled: '',
            open_count: 0,
            closed_count: 0,
            canceled_count: 0
        };
        this.openOrdersRows = [];
        this.closedOrdersRows = [];
        this.canceledOrdersRows = [];
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.fillList(nextProps.match.params.filter);
    }

    componentWillMount() {
        this.fillList('close');
        this.fillList('cancel');
        this.fillList('open');
    }

    fillList(filter) {
        let self = this;

        let predicate = {
            filter: filter,
            id: this.props.userStore.currentCustomer._id,
            limit: 10
        };
        this.props.orderStore.setPredicate(predicate);
        let orders = this.props.orderStore.loadOrders();
        switch (filter) {
            case 'open':
                self.openOrdersRows = [];
                orders.forEach(function (order, i) {
                    self.openOrdersRows.push(<OrderListItem order={order} key={i}/>);
                });
                this.setState({open_count: orders.length});
                this.setState({selected_open: 'selected'});
                this.setState({selected_closed: ''});
                this.setState({selected_canceled: ''});
                break;
            case 'close':
                self.closedOrdersRows = [];
                orders.forEach(function (order, i) {
                    self.closedOrdersRows.push(<OrderListItem order={order} key={i}/>);
                });
                this.setState({closed_count: orders.length});
                this.setState({selected_open: '', selected_closed: 'selected', selected_canceled: ''});
                break;
            case 'cancel':
                self.canceledOrdersRows = [];
                orders.forEach(function (order, i) {
                    self.canceledOrdersRows.push(<OrderListItem order={order} key={i}/>);
                });
                this.setState({canceled_count: orders.length});
                this.setState({selected_open: ''});
                this.setState({selected_closed: ''});
                this.setState({selected_canceled: 'selected'});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="main" style={{
                minHeight: '100%', width: '100%', position: 'relative', margin: '0 auto',
                overflow: 'hidden', paddingTop: '80px'
            }}>
                <div id="vendor-admin" className="custom-form vendor-page">
                    <div className="page-left-col" style={{width: '15%'}}>
                        <MyMenu/>
                    </div>
                    <div className="page-right-col" style={{width: '85%', marginTop: '50px', marginLeft: '15%'}}>
                        <div className="view-container">
                            <div className="view-frame">
                                <div className="order_list_container vendor_portal_container desktop ">
                                    <div className="vendor_portal_header sg-f-dspl-m">
                                        Заказы
                                    </div>
                                    <div className="order_list_section">
                                        <div className="order_list_nav desktop">
                                            <div className="order_list_tabs sg-inline-bottom desktop ">
                                                <Link to="/orders/open" params={{filter: "open"}}>
                                                    <div
                                                        className={"js-order-tab js-order-tab-open order_list_tab desktop open "
                                                        + this.state.selected_open}>
                                                        <span className="tab_name_span">Открыт</span>
                                                        <span
                                                            className="order_count_span js-order-count-open">( {this.state.open_count} )</span>
                                                    </div>
                                                </Link>
                                                <Link to="/orders/close" params={{filter: "close"}}>
                                                    <div
                                                        className={"js-order-tab js-order-tab-completed order_list_tab desktop completed "
                                                        + this.state.selected_closed}>
                                                        <span className="tab_name_span">Закончен</span>
                                                        <span
                                                            className="order_count_span js-order-count-completed">( {this.state.closed_count} )</span>
                                                    </div>
                                                </Link>

                                                <Link to="/orders/cancel" params={{filter: "cancel"}}>
                                                    <div
                                                        className={"js-order-tab js-order-tab-cancelled order_list_tab desktop cancelled "
                                                        + this.state.selected_canceled}>
                                                        <span className="tab_name_span">Отменен</span>
                                                        <span
                                                            className="order_count_span js-order-count-cancelled">( {this.state.canceled_count} )</span>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="order_list_filters desktop ">
                                                <select className="js-sort-select" style={{width: '150px'}}
                                                        defaultValue={"mostrecent"}>
                                                    <option value="mostrecent">Последние</option>
                                                    <option value="oldest">Старые</option>
                                                </select>
                                            </div>
                                            <div style={{clear: 'both'}}>
                                            </div>
                                        </div>

                                        <div className="needdetails_warning_div js-needdetails_warning desktop">
                                            <img className="sg-image-error " src={"icon_error_red.png"} alt={"error"}/>
                                            Нужны детали
                                        </div>

                                        <div className="js-order-contents">
                                            <div className="js-order-content js-order-content-open order_content"
                                                 data-tab="open" data-loaded="1" data-page="1"
                                                 style={{display: 'block'}}>
                                                <div className="zerostate_div desktop">
                                                    <div className="zerostate_img_div">
                                                    </div>
                                                    <div className="zerostate_text">
                                                        {this.openOrdersRows}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="js-order-content js-order-content-completed order_content"
                                                 data-tab="completed" data-loaded="0" data-page="1"
                                                 style={{display: 'none'}}>
                                                <div className="zerostate_div desktop">
                                                    <div className="zerostate_img_div">
                                                    </div>
                                                    <div className="zerostate_text">
                                                        {this.closedOrdersRows}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="js-order-content js-order-content-cancelled order_content"
                                                 data-tab="cancelled" data-loaded="0" data-page="1"
                                                 style={{display: 'none'}}>
                                                <div className="zerostate_div desktop">
                                                    <div className="zerostate_img_div">
                                                    </div>
                                                    <div className="zerostate_text">
                                                        {this.canceledOrdersRows}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="orderlist_thankyou_overlay ifonly_overlay desktop"
                                     style={{display: 'none'}}>
                                    <div className="order_list_pop ifonly_pop">
                                        <div className="ifonly_pop_content">
                                            <img className="ifonly_pop_close_img start_conv_close_img"
                                                 src={"x-button-grey.png"} alt="close" tabIndex="0"/>
                                            <div className="thank_you_title">Thank you for submitting your schedule
                                            </div>

                                            <div className="thank_you_txt">
                                                The luminary will check his or her calendar and will get back to you at
                                                their earliest convenience.
                                                You will then receive an email confirming the details of the experience.
                                                If the luminary is unable to confirm your details, he or she will
                                                propose
                                                alternatives
                                            </div>
                                            <div className="btn_div">
                                                <button className="got_it_btn ifonly_btn">Принял</button>
                                            </div>
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

export default Orders;
