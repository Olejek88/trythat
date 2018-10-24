import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import OrderListItem from "../Orders/OrderListItem";

@inject('orderStore')
@withRouter
export default class Checkout extends React.Component {
    constructor() {
        super();
        let order;

        this.state = {
            'balanceZero': "Your balance is zero. You can place order now.",
            'add_shipping_address': "Add a Shipping Address",
            'add_credit_card': "Add a Card",
            'add_payment_method': "Add a Payment Method",
            'cardWillDelete': "The Credit Card will be deleted once you confirm.",
            'pleaseEnterInputs': "Please enter %fieldName%.",
            'pleaseSelectInputs': "Please select %fieldName%.",
            'pleaseEnterValidInputs': "Please enter valid %fieldName%.",
            'checkCCExpiration': "Please check the expiration date of your credit card.",
            'charge_post_checkout': "Calculated and charged post checkout",
            'amount_will_be_charged': "%amount% will be charged to your credit card.",
            'summary_manyItems': "%itemCount% items",
            'summary_oneItem': "1 item",
            'pleaseEnterGuestInfo': "Please enter first name, last name and a valid email.",
            'emailAlreadyEntered': "Email has already been entered.",
            'enterAtLeastOne': "Please enter at least one participant.",
            'creditCardHolderName': "credit card holder name",
            'creditCardNumber': "credit card number",
            'expirationYear': "expiration year",
            'expirationMonth': "expiration month",
            'cvvNumber': "CVV number",
            'invalid_shipping_country': "We are sorry. The shipping country is not available to bill.",
            'check_cc_number_correct': "Please make sure your credit card number is correct.",
            'make_sure_cc_type': "Please make sure your credit card is %ccTypeName%.",
            'shipping_error_msg': "Please enter your shipping address. Press \"Save\" at the end of the section before placing your order.",
            'shipping_error_msg_short': "Please enter your shipping address.",
            'billing_error_msg': "Please enter your billing information. Press \"Save\" at the end of the section before placing your order.",
            'billing_error_msg_short': "Please enter your billing information.",
            'refresh_try_again': "Please refresh and try again.",
            'try_again': "Please try again.",
            'account_error_msg': "We are unable to update your account information.",
            'account_firstName_format': "First Name can not contain special characters and numbers",
            'account_lastName_format': "Last Name can not contain special characters and numbers",
            'account_email_empty': "Email address cannot be empty",
            'account_email_invalid': "Invalid email address"
        };
    };

    render() {
        let orderList = '';
        const orderStore = this.props.orderStore;
        const orders = orderStore.loadOrders();
        let orders_count = 0;
        let sum = 0;
        if (orders) {
            orderList = orders.map(function (order, i) {
                let activity = order.listing.activity;
                sum += order.listing.cost;
                orders_count++;
                return (<OrderListItem activity={activity} key={i} order={order} checkout={true}/>);
            });
        }
        else orderList = 'Корзина пуста';
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
                                                                       id="current_email" aria-required="true"
                                                                       disabled="disabled"
                                                                       style={{
                                                                           background: '#FFF',
                                                                           height: '38px',
                                                                           width: '100%'
                                                                       }}
                                                                       value="olejek8@yandex.ru"/>
                                                                <p className="fineprint">
                                                                </p>
                                                            </div>
                                                            <div className="sibs  txt-ovr-3"
                                                                 style={{marginBottom: '5px', width: '49%'}}>
                                                                <input id="updateEmail"
                                                                       style={{
                                                                           margin: '0',
                                                                           display: 'inline-block',
                                                                           verticalAlign: 'middle'
                                                                       }}
                                                                       value="1" name="updateEmail" type="checkbox"/>
                                                                <label style={{verticalAlign: 'middle'}}>Обновить
                                                                    е-мэйл</label>
                                                            </div>
                                                        </div>
                                                        <div className="sg-inline-middle txt-ovr-3"
                                                             style={{justifyContent: 'space-between', width: '100%'}}>
                                                            <div id="updateEmailRow"
                                                                 className="sibs emailInput txt-ovr-3"
                                                                 style={{marginBottom: '5px', width: '49%'}}>
                                                                <label className="input-label f-style-ovr1">Новый
                                                                    е-мэйл</label>
                                                                <input className="checkout-acct-email-disp js-req"
                                                                       id="emailAddress"
                                                                       style={{height: '38px', width: '100%'}}
                                                                       value="olejek8@yandex.ru"
                                                                       name="emailAddress" type="text"/>
                                                                <p className="fineprint">
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row one-row-sec js-parent"
                                                         style={{textAlign: 'right'}}>
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
                                                        <p className="step-num">3</p>
                                                    </div>
                                                    <p className="step-label" style={{margin: '0 5px'}}>Адрес доставки
                                                        (если
                                                        нужен сертификат)</p>
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
                                                                           type="text"/></div>
                                                                <div style={{padding: '0 5px'}}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row one-row-sec js-parent">
                                                            <div
                                                                className="js-shipping-save act-btn small secondaryButton button "
                                                                style={{float: 'right'}} tabIndex="0">
                                                                <div className="title-container"><p
                                                                    className="title">Сохранить</p></div>
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
                                                                               name="cardHolderName" id="cardHolderName"
                                                                               value="" type="text"/>
                                                                    </div>
                                                                    <div style={{padding: '0 5px'}}>
                                                                    </div>
                                                                    <div className="sec sg-inline-flex-grow">
                                                                        <label className="input-label">Номер
                                                                            карты</label>
                                                                        <input style={{width: '100%'}} maxLength="30"
                                                                               aria-required="true" required="required"
                                                                               autoComplete="off"
                                                                               name="cardNumber" id="cardNumber"
                                                                               value="" type="text"/>
                                                                    </div>
                                                                </div>
                                                                <div style={{margin: '10px 0'}}>
                                                                    <div className="sec sg-inline-flex-grow">
                                                                        <label className="input-label">Срок действия</label>
                                                                        <div className="sg-inline-top exp-div"
                                                                             style={{width: '100%'}}>
                                                                            <div className="sg-inline-flex-grow">
                                                                                <select style={{width: '100%'}}
                                                                                        aria-required="true"
                                                                                        required="required"
                                                                                        className="sg-bg-3 sg-inline-flex-grow"
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
                                                                        <div className="sg-inline-middle" style={{width: '100%'}}>
                                                                            <input style={{width: '60px', display: 'block'}}
                                                                                maxLength="4" aria-required="true"
                                                                                required="required"
                                                                                autoComplete="off" name="cvc" id="cvc"
                                                                                type="text" />
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
                                                    <p className="step-label" style={{margin: '0 5px'}}>Посмотрите на
                                                        свой
                                                        заказ еще раз</p>
                                                </div>
                                            </div>

                                            <div id="product-table" className="">
                                                <div className="table-body">
                                                    {orderList}
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
                                                <p className="title sg-inline-flex-grow">Подитог
                                                    <span className="sg-c-2">({orders_count})</span>
                                                </p>
                                                <p className="value">
                                                    <span className="productTotal_summary">{sum}</span>
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
