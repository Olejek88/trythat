import React from 'react';
import {inject} from 'mobx-react';
import OrderListItem from "../Orders/OrderListItem";
import {action} from "mobx/lib/mobx";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: [],
            sum: 0,
            orders_count: 0,
            firstName: '',
            lastName: '',
            company: '',
            address: '',
            phone: '',
            email: '',
            cardHolderName: '',
            cardNumber: '',
            cvc: ''
        };
        this.orderList = [];
        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };
    };

    componentDidMount() {
        let self = this;
        let predicate = {
            filter: 'order-status',
            id: 1
        };
        if (this.props.userStore.currentUser) {
            this.setState({firstName: this.props.userStore.currentUser.firstName});
            this.setState({lastName: this.props.userStore.currentUser.lastName});
            this.setState({phone: this.props.userStore.currentUser.phone});
            this.setState({email: this.props.userStore.currentUser.email});
        }

        this.props.orderStore.setPredicate(predicate);
        this.props.orderStore.loadOrders().then(action((orders) => {
            if (orders) {
                orders.forEach(function (order, i) {
                    let activity = order.activityListing.activity;
                    self.setState({sum: self.state.sum + order.activityListing.cost});
                    self.orderList.push(<OrderListItem activity={activity} key={i} order={order}/>);
                });
                self.setState({orders_count: self.orderList.length});
                self.setState({orderList: self.orderList}, () => {
                    self.setState({updated: true})
                });
            }
        }));
    }

    render() {
        return (
            <div id="content" style={{width: '1120px'}}>
                <div id="checkout" className="body">
                    <div className="box">
                        <div id="page-overlay" className="checkout_page_overlay">
                        </div>
                        <form name="checkoutForm" id="checkoutForm" style={{marginTop: '30px'}} action={"cart/checkout"}
                              method="POST">
                            <div className="title txt-align-ovr1">
                                <h3 className="sg-f-dspl-m">Обработка</h3>
                            </div>
                            <div id="top-block">
                            </div>
                            <div className="sg-inline-top" style={{width: '100%', marginTop: '30px'}}>
                                <div className="sg-inline-flex-grow">
                                    <div className="main-col-1 js-main-col sg-f-bdy">
                                        <div className="row" id="shipping-err-msg">
                                            <p className="errorSummary sg-c-error">
                                            </p>
                                        </div>
                                        <div id="accountInfo" className="section" style={{marginBottom: '30px'}}>
                                            <div style={{marginBottom: '10px'}}>
                                                <div className="step sg-inline-middle row sg-f-ttl">
                                                    <div className="checkout_step_title sg-inline-middle">
                                                        <p className="step-num">1</p>
                                                    </div>
                                                    <p className="step-label" style={{margin: '0 5px'}}>Подтвердите Ваш
                                                        аккаунт</p>
                                                </div>
                                            </div>

                                            <div id="account-info-form"
                                                 className="js-record-sec checkout-panel sg-bg-2 sg-bd-5 sg-f-bdy-s sg-f-hdr"
                                                 style={{padding: '20px'}}>
                                                <div style={{width: '100%'}}>
                                                    <div className="sg-inline-flex-grow">
                                                        <div className="sg-inline-middle txt-ovr-3"
                                                             style={{justifyContent: 'space-between', width: '100%'}}>
                                                            <div id="account-info-firstName"
                                                                 style={{marginBottom: '5px', width: '49%'}}>
                                                                <label className="input-label f-style-ovr1">Имя
                                                                    *</label>
                                                                <input className="firstName js-req"
                                                                       aria-required="true" required="required"
                                                                       style={{height: '38px', width: '100%'}}
                                                                       value={this.state.firstName}
                                                                       onChange={this.updateState('firstName')}
                                                                       id="firstName" name="firstName" type="text"/>

                                                                <p className="fineprint">
                                                                </p>
                                                            </div>
                                                            <div id="account-info-lastName"
                                                                 style={{marginBottom: '5px', width: '49%'}}>
                                                                <label className="input-label f-style-ovr1">Фамилия
                                                                    *</label>
                                                                <input className="lastName js-req"
                                                                       aria-required="true" required="required"
                                                                       style={{height: '38px', width: '100%'}}
                                                                       value={this.state.lastName}
                                                                       onChange={this.updateState('lastName')}
                                                                       id="lastName" name="lastName" type="text"/>
                                                                <p className="fineprint">
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="sg-inline-middle txt-ovr-3"
                                                             style={{justifyContent: 'space-between', width: '100%'}}>
                                                            <div className="sibs emailInput txt-ovr-3"
                                                                 style={{marginBottom: '5px', width: '49%'}}>
                                                                <label
                                                                    className="input-label f-style-ovr1">Е-мэйл</label>
                                                                <input className="checkout-acct-email-disp js-req"
                                                                       id="emailAddress"
                                                                       style={{height: '38px', width: '100%'}}
                                                                       value={this.state.email}
                                                                       readOnly={true}
                                                                       name="emailAddress" type="text"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row one-row-sec js-parent"
                                                         style={{textAlign: 'right', display: 'none'}}>
                                                        <div
                                                            className="js-account-save act-btn small secondaryButton button"
                                                            id="account-info-save" tabIndex="0">
                                                            <div className="title-container">
                                                                <p className="title">Сохранить изменения</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="shipping" className="section" style={{marginBottom: '30px'}}>
                                            <div style={{marginBottom: '10px'}}>
                                                <div className="step sg-inline-middle row sg-f-ttl">
                                                    <div className="sg-inline-middle checkout_step_title">
                                                        <p className="step-num">2</p>
                                                    </div>
                                                    <p className="step-label" style={{margin: '0 5px'}}>Адрес доставки
                                                        (если нужен сертификат)</p>
                                                </div>
                                            </div>
                                            <div id="shipping-info-form">
                                                <div className="row js-shipping-info-error">
                                                    <p className="errorSummary sg-c-error">
                                                    </p>
                                                </div>
                                                <div id="shipping-info">
                                                    <div className="js-form-sec checkout-panel">
                                                        <div className="form js-parent" id="shipping-address-form">
                                                            <div className="sg-inline-top"
                                                                 style={{width: '100%', margin: '10px 0'}}>
                                                                <div className="sec sg-inline-flex-grow">
                                                                    <label className="input-label">Компания</label>
                                                                    <input style={{display: 'block', width: '100%'}}
                                                                           name="shippingCompanyName"
                                                                           onChange={this.updateState('company')}
                                                                           id="shippingCompanyName" type="text"/>
                                                                </div>
                                                                <div style={{padding: '0 5px'}}>
                                                                </div>
                                                                <div className="sec sg-inline-flex-grow">
                                                                    <label className="input-label">Номер
                                                                        телефона</label>
                                                                    <input className="pretifyPhone"
                                                                           style={{display: 'block', width: '100%'}}
                                                                           aria-required="true" required="required"
                                                                           name="shippingPhone" id="shippingPhone"
                                                                           value={this.state.phone}
                                                                           onChange={this.updateState('phone')}
                                                                           type="text"/>
                                                                </div>
                                                            </div>
                                                            <div className="sg-inline-top"
                                                                 style={{width: '100%', margin: '10px 0'}}>
                                                                <div className="sec sg-inline-flex-grow">
                                                                    <label className="input-label">Адрес</label>
                                                                    <input style={{display: 'block', width: '100%'}}
                                                                           aria-required="true" required="required"
                                                                           name="shippingStreet" id="shippingStreet"
                                                                           onChange={this.updateState('street')}
                                                                           type="text"/></div>
                                                                <div style={{padding: '0 5px'}}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row addressWarning" style={{margin: '10px 0 0 15px'}}>
                                            </div>
                                        </div>
                                        <div id="payment" className="section" style={{marginBottom: '30px'}}>
                                            <div className="sg-inline-bottom"
                                                 style={{width: '100%', marginBottom: '10px'}}>
                                                <div className="step sg-inline-middle sg-inline-flex-grow sg-f-ttl">
                                                    <div className="sg-inline-middle checkout_step_title">
                                                        <p className="step-num">3</p>
                                                    </div>
                                                    <p className="step-label" style={{margin: '0 5px'}}>Оплата</p>
                                                </div>
                                                <div className="secure_checkout_div sg-inline-middle">
                                                    <div className="sg-lock-icon">
                                                    </div>
                                                    <span>безопасная оплата</span>
                                                </div>
                                            </div>
                                            <div className="js-no-payment checkout-panel"
                                                 style={{marginBottom: '10px', display: 'none'}}>
                                                <p className="display-block fo-15-n-s4">Оплата не требуется</p>
                                            </div>
                                            <div className="row js-payment-error clearfix">
                                                <p className="errorSummary sg-c-error">
                                                </p>
                                            </div>

                                            <div id="payment-method" className="sg-bg-2 sg-bd-5 record"
                                                 style={{boxSizing: 'border-box', padding: '8px'}}>
                                                <div id="credit-card" className="checkout-panel">
                                                    <div id="paymentType-CreditCard"
                                                         className="payment-option js-p-option sg-inline-middle"
                                                         style={{width: '100%'}}>
                                                        <div
                                                            className="name-wrapper sg-inline-middle sg-inline-flex-grow">
                                                            <div className="radio normal">
                                                                <div className="inside-radio normal">
                                                                </div>
                                                            </div>
                                                            <div className="radio-text">
                                                                <span className="name">Картой</span>
                                                            </div>
                                                        </div>
                                                        <div className="sg-inline-middle">
                                                            <img src={"/images/creditcards.png"} alt="card"
                                                                 style={{height: '32px'}}/>
                                                        </div>
                                                    </div>
                                                    <div id="payment-by-creditcard" className="desktop">
                                                        <div className="row sg-f-bdy-s" id="cc-edit-form"
                                                             style={{marginTop: '10px'}}>
                                                            <div className="form js-parent"
                                                                 style={{
                                                                     width: '100%',
                                                                     paddingRight: '1px',
                                                                     boxSizing: 'border-box'
                                                                 }}>
                                                                <input name="type" value="creditCard" type="hidden"/>
                                                                <div className="sg-inline-top"
                                                                     style={{width: '100%', margin: '10px 0'}}>
                                                                    <div className="sec sg-inline-flex-grow">
                                                                        <label className="input-label">Владелец
                                                                            карты</label>
                                                                        <input style={{width: '100%'}} maxLength="100"
                                                                               aria-required="true" required="required"
                                                                               autoComplete="off"
                                                                               onChange={this.updateState('cardHolderName')}
                                                                               value={this.state.cardHolderName}
                                                                               name="cardHolderName" id="cardHolderName"
                                                                               type="text"/>
                                                                    </div>
                                                                    <div style={{padding: '0 5px'}}>
                                                                    </div>
                                                                    <div className="sec sg-inline-flex-grow">
                                                                        <label className="input-label">Номер
                                                                            карты</label>
                                                                        <input style={{width: '100%'}} maxLength="30"
                                                                               aria-required="true" required="required"
                                                                               autoComplete="off"
                                                                               value={this.state.cardNumber}
                                                                               onChange={this.updateState('cardNumber')}
                                                                               name="cardNumber" id="cardNumber"
                                                                               type="text"/>
                                                                    </div>
                                                                </div>
                                                                <div style={{margin: '10px 0'}}>
                                                                    <div className="sec sg-inline-flex-grow">
                                                                        <label className="input-label">Срок
                                                                            действия</label>
                                                                        <div className="sg-inline-top exp-div"
                                                                             style={{width: '100%'}}>
                                                                            <div className="sg-inline-flex-grow">
                                                                                <select style={{width: '100%'}}
                                                                                        aria-required="true"
                                                                                        required="required"
                                                                                        className="sg-bg-3 sg-inline-flex-grow"
                                                                                        onChange={this.updateState('expirationMonth')}
                                                                                        name="expirationMonth"
                                                                                        id="expirationMonth">
                                                                                    <option value="">Месяц</option>
                                                                                    <option value="1">01</option>
                                                                                    <option value="2">02</option>
                                                                                    <option value="3">03</option>
                                                                                    <option value="4">04</option>
                                                                                    <option value="5">05</option>
                                                                                    <option value="6">06</option>
                                                                                    <option value="7">07</option>
                                                                                    <option value="8">08</option>
                                                                                    <option value="9">09</option>
                                                                                    <option value="10">10</option>
                                                                                    <option value="11">11</option>
                                                                                    <option value="12">12</option>
                                                                                </select></div>
                                                                            <div style={{padding: '0 5px'}}>
                                                                            </div>
                                                                            <div className="sg-inline-flex-grow">
                                                                                <select style={{width: '100%'}}
                                                                                        aria-required="true"
                                                                                        className="sg-bg-3 sg-inline-flex-grow"
                                                                                        onChange={this.updateState('expirationYear')}
                                                                                        name="expirationYear"
                                                                                        id="expirationYear">
                                                                                    <option value="">Год</option>
                                                                                    <option value="2018">2018</option>
                                                                                    <option value="2019">2019</option>
                                                                                    <option value="2020">2020</option>
                                                                                    <option value="2021">2021</option>
                                                                                    <option value="2022">2022</option>
                                                                                    <option value="2023">2023</option>
                                                                                    <option value="2024">2024</option>
                                                                                    <option value="2025">2025</option>
                                                                                    <option value="2026">2026</option>
                                                                                    <option value="2027">2027</option>
                                                                                    <option value="2028">2028</option>
                                                                                    <option value="2029">2029</option>
                                                                                    <option value="2030">2030</option>
                                                                                </select></div>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{padding: '0 5px'}}>
                                                                    </div>
                                                                    <div className="sec sg-inline-flex-grow"
                                                                         style={{margin: '10px 0'}}>
                                                                        <label className="input-label">CVV</label>
                                                                        <div className="sg-inline-middle"
                                                                             style={{width: '100%'}}>
                                                                            <input style={{
                                                                                width: '60px',
                                                                                display: 'block'
                                                                            }}
                                                                                   maxLength="4" aria-required="true"
                                                                                   required="required"
                                                                                   value={this.state.cvc}
                                                                                   onChange={this.updateState('cvc')}
                                                                                   autoComplete="off" name="cvc"
                                                                                   id="cvc"
                                                                                   type="text"/>
                                                                            <div className="cvv-img cvv">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="review" className="section">
                                            <div style={{marginBottom: '10px'}}>
                                                <div className="step sg-inline-middle row sg-f-ttl">
                                                    <div className="sg-inline-middle checkout_step_title">
                                                        <p className="step-num">4</p>
                                                    </div>
                                                    <p className="step-label" style={{margin: '0 5px'}}>
                                                        Посмотрите на свой заказ еще раз</p>
                                                </div>
                                            </div>
                                            <div id="product-table" className="">
                                                <div className="table-body">
                                                    {this.state.orderList}
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{padding: '20px', marginBottom: '40px'}}>
                                        </div>
                                    </div>
                                </div>

                                <div className="main-col-2">
                                    <div id="summary-box" className="summary-box  sg-bd-3">
                                        <div style={{padding: '20px 10px 10px'}}>
                                            <div className="sg-inline-middle"
                                                 style={{width: '100%', marginBottom: '5px'}}>
                                                <p className="title sg-inline-flex-grow">Подитог&nbsp;
                                                    <span className="sg-c-2">({this.state.orders_count})</span>
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
                                                согласия обеих сторон.
                                            </div>
                                            <div className="row">
                                                <div className="start-checkout  primaryButton button"
                                                     style={{width: '100%'}} tabIndex="0">
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
                                                    <p className="value"><span id="grandTotal">
                                                    </span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('orderStore', 'userStore')(Checkout);
