import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import OrderListItem from "../Orders/OrderListItem";
import ExperienceRow from "../Experience/ExperienceRow";

@inject('orderStore')
@withRouter
export default class Checkout extends React.Component {
    constructor() {
        super();
        let order;
        this.state = {
            'Shipping': "Shipping",
            'ShippingEstimation': "Shipping Estimation",
            'Estimation': "Estimation",
            'save_cc_error_title': "Save %cc% Error",
            'credit_card': "Credit Card",
            'save': "SAVE",
            'verify': "Verify",
            'billing_address': "Billing Address",
            'first name': "First Name",
            'last name': "Last Name",
            'street address': "street address",
            'city': "City",
            'state': "State",
            'country': "Country",
            'zip code': "zip code",
            'valid zip code': "valid zip code",
            'valid credit card number': "valid credit card number",
            'phone number': "Phone number",
            'correct phone number': "correct phone number",
            'giftFrom': "From",
            'giftTo': "To",
            'recipientEmail': "Recipient Email",
            'correctRecipientEmail': "Correct Recipient Email",
            'giftFromGiftGiver': "You have a gift from %giftGiver%",
            'giftGiverBought': "%giftGiver% has bought you a gift from IfOnly. Take a look below.",
            'dearRecipient': "Dear %giftRecipient%,",
            'enter_valid_GC': "Please enter a valid gift certificate number.",
            'balanceZero': "Your balance is zero. You can place order now.",
            'gcPcApplied': "This gift certificate or promo code has been applied to your total.",
            'add_shipping_address': "Add a Shipping Address",
            'pay_with_paypal': "Pay With Paypal",
            'add_credit_card': "Add a Card",
            'add_payment_method': "Add a Payment Method",
            'cardWillDelete': "The Credit Card will be deleted once you confirm.",
            'shippingWillDelete': "The Shipping Address will be deleted once you confirm.",
            'deleteConfirm': "Delete Confirm",
            'pleaseEnterInputs': "Please enter %fieldName%.",
            'pleaseSelectInputs': "Please select %fieldName%.",
            'pleaseEnterValidInputs': "Please enter valid %fieldName%.",
            'giftSchedulingOption': "Please choose a gift scheduling option.",
            'dateGiftEmail': "Please choose a date to send your gift email.",
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
            'shipping_method_error_msg': "Shipping Method Change Error<br>If you continue to receive this error please contact ifonly.com concierge.",
            'gc_promo_apply_error_msg': "Apply Gift Certificate \/ Promotion Error<br>If you continue to receive this error please contact ifonly.com concierge.",
            'contact_concierge': "If you continue to receive this error please contact ifonly.com concierge.",
            'refresh_try_again': "Please refresh and try again.",
            'try_again': "Please try again.",
            'account_error_msg': "We are unable to update your account information.",
            'account_firstName_format': "First Name can not contain special characters and numbers",
            'account_lastName_format': "Last Name can not contain special characters and numbers",
            'account_email_empty': "Email address cannot be empty",
            'account_email_invalid': "Invalid email address",
            'hyatt_points_earned_msg': "Earn %points% World of Hyatt Base Points for this purchase"
        };
    };
}
render()
{
    return (
        <div id="checkout">
            <div className="body">
                <div className="box">
                    <div id="page-overlay" className="checkout_page_overlay"></div>
                    <form name="checkoutForm" id="checkoutForm" style={{marginTop: '30px'}} action="/cart/checkout"
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
                                        <p className="errorSummary sg-c-error"></p>
                                    </div>
                                    <select className="js-default-country">
                                    </select>
                                    <div id="accountInfo" className="section" style={{marginBottom: '30px'}}>
                                        <div style={{marginBottom: '10px'}}>
                                            <div className="step sg-inline-middle row sg-f-ttl">
                                                <div className="sg-inline-middle checkout_step_title">
                                                    <p className="step-num">1</p>
                                                </div>
                                                <p className="step-label" style={{margin: '0 5px'}}>Подтвердите Ваш
                                                    аккаунт</p>
                                            </div>
                                        </div>

                                        <div id="account-info-form"
                                             className="js-record-sec checkout-panel sg-bd-2 sg-bg-2 sg-f-bdy-s sg-f-hdr"
                                             style={{padding: '20px'}}>
                                            <div style="width: 100%;">
                                                <div className="sg-inline-flex-grow">
                                                    <div className="sg-inline-middle txt-ovr-3"
                                                         style={{justifyContent: 'space-between', width: '100%'}}>
                                                        <div id="account-info-firstName"
                                                             style={{marginBottom: '5px', width: '49%'}}>
                                                            <label className="input-label f-style-ovr1"
                                                                   htmlFor="AccountInfo_firstName">Имя *</label>
                                                            <input className="firstName js-req"
                                                                   aria-required="true" required="required"
                                                                   style={{height: '38px', width: '100%'}}
                                                                   id="firstName" name="firstName" type="text"/>
                                                            <p className="fineprint"></p>
                                                        </div>
                                                        <div id="account-info-lastName"
                                                             style={{marginBottom: '5px', width: '49%'}}>
                                                            <label className="input-label f-style-ovr1"
                                                                   htmlFor="AccountInfo_lastName">Фамилия *</label>
                                                            <input className="lastName js-req"
                                                                   aria-required="true" required="required"
                                                                   style={{height: '38px', width: '100%'}}
                                                                   id="lastName" name="lastName" type="text"/>
                                                            <p className="fineprint"></p>
                                                        </div>
                                                    </div>
                                                    <div className="sg-inline-middle txt-ovr-3"
                                                         style={{justifyContent: 'space-between', width: '100%'}}>
                                                        <div className="sibs emailInput txt-ovr-3"
                                                             style={{marginBottom: '5px', width: '49%'}}>
                                                            <label className="input-label f-style-ovr1"
                                                                   htmlFor="AccountInfo_current_email">Е-мэйл</label>
                                                            <input className="checkout-acct-email-disp js-req"
                                                                   id="current_email" aria-required="true"
                                                                   disabled="disabled"
                                                                   style={{
                                                                       background: '#FFF',
                                                                       height: '38px',
                                                                       width: '100%'
                                                                   }}
                                                                   value="olejek8@yandex.ru"/>
                                                            <p className="fineprint"></p>
                                                        </div>
                                                        <div className="sibs  txt-ovr-3"
                                                             style={{marginBottom: '5px', width: '49%'}}>
                                                            <input id="AccountInfo_updateEmail"
                                                                   style={{
                                                                       margin: '0',
                                                                       display: 'inline-block',
                                                                       verticalAlign: 'middle'
                                                                   }}
                                                                   value="1" name="updateEmail" type="checkbox"/>
                                                            <label style={{verticalAlign: 'middle'}}
                                                                   htmlFor="updateEmail">Обновить е-мэйл</label>
                                                        </div>
                                                    </div>
                                                    <div className="sg-inline-middle txt-ovr-3"
                                                         style={{justifyContent: 'space-between', width: '100%'}}>
                                                        <div id="updateEmailRow" className="sibs emailInput txt-ovr-3"
                                                             style={{marginBottom: '5px', width: '49%'}}>
                                                            <label className="input-label f-style-ovr1"
                                                                   htmlFor="AccountInfo_emailAddress">Новый
                                                                е-мэйл</label>
                                                            <input className="checkout-acct-email-disp js-req"
                                                                   id="emailAddress"
                                                                   style={{height: '38px', width: '100%'}}
                                                                   value="olejek8@yandex.ru"
                                                                   name="AccountInfo[emailAddress]" type="text"/>
                                                            <p className="fineprint"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row one-row-sec js-parent" style={{textAlign: 'right'}}>
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
                                    <style type="text/css">
                                        #checkout.mobile #account-info-form
                                        #account-info-save {width: 100%;}
                                    </style>
                                    <div id="shipping" className="section" style={{marginBottom: '30px'}}>
                                        <div style={{marginBottom: '10px'}}>
                                            <div className="step sg-inline-middle row sg-f-ttl">
                                                <div className="sg-inline-middle checkout_step_title">
                                                    <p className="step-num">3</p>
                                                </div>
                                                <p className="step-label" style={{margin: '0 5px'}}>Адрес доставки (если
                                                    нужен сертификат)</p>
                                            </div>
                                        </div>
                                        <div id="shipping-info-form">
                                            <div className="row js-shipping-info-error">
                                                <p className="errorSummary sg-c-error"></p>
                                            </div>
                                            <div id="shipping-info">
                                                <div className="js-form-sec checkout-panel">
                                                    <div className="form js-parent" id="shipping-address-form">
                                                        <div className="sg-inline-top"
                                                             style={{width: '100%', margin: '10px 0'}}>
                                                            <div className="sec sg-inline-flex-grow">
                                                                <label className="input-label"
                                                                       htmlFor="shippingCompanyName">Компания</label>
                                                                <input style={{display: 'block', width: '100%'}}
                                                                       name="shippingCompanyName"
                                                                       id="shippingCompanyName" type="text"/>
                                                            </div>
                                                            <div style={{padding: '0 5px'}}></div>
                                                            <div className="sec sg-inline-flex-grow">
                                                                <label className="input-label"
                                                                       htmlFor="shippingPhone">Номер телефона</label>
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
                                                                <label className="input-label"
                                                                       htmlFor="CheckoutForm_shippingStreet1">
                                                                    Адрес</label>
                                                                <input style={{display: 'block', width: '100%'}}
                                                                    aria-required="true" required="required"
                                                                    name="shippingStreet" id="shippingStreet"
                                                                    type="text" /></div>
                                                            <div style={{padding: '0 5px'}}></div>
                                                        </div>
                                                    </div>
                                                    <div className="row one-row-sec js-parent">
                                                        <div className="js-shipping-save act-btn small secondaryButton button "
                                                            style={{float:'right'}} tabIndex="0">
                                                            <div className="title-container"><p
                                                                className="title">Сохранить</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="shipping-info-sec js-info-sec checkout-panel"
                                                    style="display:none;">
                                                    <div className="block-1">
                                                        <p className="js-sn fo-15-n-s4"></p>
                                                        <p className="js-sa fo-15-n-s4"></p>
                                                    </div>
                                                    <div className="block-2 js-change"
                                                         data-target=".js-form-sec">
                                                        <img src="/images/icon_arrow_down_000.png">
                                                            <p>CHANGE</p>
                                                    </div>
                                                    <div className="clearAll"></div>
                                                </div>


                                            </div>

                                        </div>

                                        <div className="row addressWarning"
                                             style="margin: 10px 0 0 15px;"></div>

                                    </div>
                                    <div id="payment" className="section" style="margin-bottom: 30px;">
                                        <div className="sg-inline-bottom"
                                             style="width: 100%; margin-bottom: 10px; ">
                                            <div
                                                className="step sg-inline-middle sg-inline-flex-grow sg-f-ttl">
                                                <div className="sg-inline-middle"
                                                     style="border-radius: 50%; border: 2px solid #000; width: 32px; height: 32px; justify-content: center;">
                                                    <p className="step-num">4</p>
                                                </div>
                                                <p className="step-label" style="margin:0 5px;">Billing</p>
                                            </div>
                                            <div className="secure_checkout_div  sg-inline-middle">
                                                <div className="sg-lock-icon "></div>
                                                <span>secure checkout</span>
                                            </div>
                                        </div>
                                        <div className="js-no-payment checkout-panel"
                                             style="margin-bottom: 10px; display:none;">
                                            <p className="display-block fo-15-n-s4">No payment is
                                                required.</p>
                                        </div>

                                        <div className="row js-payment-error clearfix">
                                            <p className="errorSummary sg-c-error"></p>
                                        </div>


                                        <div id="payment-method" className="sg-bd-2 sg-bg-2 record"
                                             style="box-sizing: border-box;">
                                            <style>
                                                .credit-card-info-sec
                                                .hyatt_earned_points_msg {width:100%; padding: 5px 0 0 22px; box-sizing:border-box;}
                                                .mobile .credit-card-info-sec .block-1
                                                .holder-name {margin - bottom:5px;}
                                                .credit-card-info-sec.checkout-panel {margin:unset;}
                                                #checkout .radio {margin - top:5px;}
                                                #payment-method .credit-card-info-sec .block-1 {width: 100%}
                                            </style>

                                            <div id="credit-card" className="checkout-panel" style="">
                                                <input name="type" value="creditCard" type="hidden">
                                                    <div id="paymentType-CreditCard"
                                                         className="payment-option js-p-option sg-inline-middle"
                                                         style="width: 100%;">
                                                        <div
                                                            className="name-wrapper sg-inline-middle sg-inline-flex-grow">
                                                            <div className="radio normal">
                                                                <div className="inside-radio normal"></div>
                                                            </div>
                                                            <div className="radio-text">
                                                                            <span className="name"
                                                                                  htmlFor="paymentType-CreditCard">Credit Card</span>
                                                            </div>
                                                        </div>
                                                        <div className="sg-inline-middle" style="">
                                                            <img src="/images/creditcards.png"
                                                                 alt="credit cards" style="height:32px;">
                                                        </div>
                                                    </div>
                                                    <div id="payment-by-creditcard" className="js-panel"
                                                         style="display:none;">
                                                        <iframe id="iframe-cc-add"
                                                                src="https://pay.ifonly.com/pay/index.php?r=cart/getCCFormHtml&amp;sh=713738777667da327323488e7d3fe07eea0781044476cba08866da7f75f45355&amp;su=933998&amp;ss=153043784&amp;sd=1&amp;si=87.249.222.179&amp;sc=Msqie1lqxOUpLhsh3b69&amp;fid=cart&amp;st=1&amp;checkoutType=cart"
                                                                style="width:100%; height:700px;"
                                                                scrolling="no">
                                                            <p>Your browser does not support iframes.</p>
                                                        </iframe>
                                                    </div>
                                            </div>

                                        </div>
                                        <input name="CheckoutForm[isFirstAttempt]"
                                               id="CheckoutForm_isFirstAttempt" value="1"
                                               type="hidden"><input name="CheckoutForm[ccAuthId]"
                                                                    id="CheckoutForm_ccAuthId"
                                                                    type="hidden"><input
                                            name="CheckoutForm[ccTypeName]" id="CheckoutForm_ccTypeName"
                                            type="hidden"><input name="CheckoutForm[ccId]"
                                                                 id="CheckoutForm_ccId" type="hidden"><input
                                            name="CheckoutForm[billingAddressId]"
                                            id="CheckoutForm_billingAddressId" type="hidden"><input
                                            name="CheckoutForm[billingCountryShortCode]"
                                            id="CheckoutForm_billingCountryShortCode" type="hidden"><input
                                            name="CheckoutForm[billingCountryId]"
                                            id="CheckoutForm_billingCountryId" type="hidden"><input
                                            name="CheckoutForm[billingState]" id="CheckoutForm_billingState"
                                            type="hidden"><input name="CheckoutForm[billingZip]"
                                                                 id="CheckoutForm_billingZip" type="hidden"><input
                                            name="CheckoutForm[billingCity]" id="CheckoutForm_billingCity"
                                            type="hidden"><input name="CheckoutForm[orderId]"
                                                                 id="CheckoutForm_orderId"
                                                                 type="hidden"><input
                                            name="CheckoutForm[paymentTypeId]"
                                            id="CheckoutForm_paymentTypeId" type="hidden"><input
                                            name="CheckoutForm[totalTravelCost]"
                                            id="CheckoutForm_totalTravelCost" value="0" type="hidden"><input
                                            name="CheckoutForm[shipping]" id="CheckoutForm_shipping"
                                            value="0" type="hidden"><input name="CheckoutForm[tax]"
                                                                           id="CheckoutForm_tax" value="0"
                                                                           type="hidden"><input
                                            id="payableTotal" autoComplete="off" value="500" name=""
                                            type="hidden"><input id="payableBalance" autoComplete="off"
                                                                 value="500" name="" type="hidden"><input
                                            name="CheckoutForm[checksum]" id="CheckoutForm_checksum"
                                            value="13966.111" type="hidden">
                                            <div id="gc-promo-block" style="margin-top: 10px;">
                                                <div>
                                                    <label className="sg-f-hdr"
                                                           htmlFor="gift-certificate-input"
                                                           style="margin: 0 5px; ">Promo Code / Gift
                                                        Certificate or Redemption Code</label>
                                                </div>
                                                <div style="margin-top: 10px;">
                                                    <div className="sg-inline-middle" style="width: 100%;">
                                                        <input className="sg-inline-flex-grow"
                                                               id="gift-certificate-input"
                                                               style="height: 44px; margin: 5px;"
                                                               maxLength="20" type="text">
                                                            <div className="small secondaryButton button "
                                                                 id="apply-gift-certificate"
                                                                 style="margin: 5px" tabIndex="0">
                                                                <div className="title-container"><p
                                                                    className="title">APPLY</p></div>
                                                            </div></div>
                                                    <div id="gc-error" style="margin-top: 10px;">
                                                        <p className="errorSummary sg-c-error"></p>
                                                    </div>
                                                    <ul id="gift-certificate-list"
                                                        className="sg-f-bdy"></ul>

                                                    <div id="gc-result" style="display: none;"></div>
                                                </div>

                                                <div className="row checkout-panel sg-bd-2 sg-bg-2"
                                                     style="padding: 20px; display:none;" id="user-info">
                                                    <p style="margin-bottom: 15px;">Please enter your
                                                        contact info</p>
                                                    <div
                                                        className="sg-inline-middle sg-f-bdy-s txt-ovr-3 f-style-ovr1"
                                                        style="width: 100%; justify-content: space-evenly;">
                                                        <div
                                                            className="contact-info-field sg-inline-flex-grow">
                                                            <div className="sec sg-inline-flex-grow"><label
                                                                className="input-label"
                                                                htmlFor="CheckoutForm_userFirstName">First
                                                                Name</label><input style="display: block;"
                                                                                   name="CheckoutForm[userFirstName]"
                                                                                   id="CheckoutForm_userFirstName"
                                                                                   value="olejek8"
                                                                                   type="text"></div>
                                                        </div>
                                                        <div
                                                            className="contact-info-field sg-inline-flex-grow">
                                                            <div className="sec sg-inline-flex-grow"><label
                                                                className="input-label"
                                                                htmlFor="CheckoutForm_userLastName">Last
                                                                Name</label><input style="display: block;"
                                                                                   name="CheckoutForm[userLastName]"
                                                                                   id="CheckoutForm_userLastName"
                                                                                   type="text"></div>
                                                        </div>
                                                        <div
                                                            className="contact-info-field sg-inline-flex-grow">
                                                            <div className="sec sg-inline-flex-grow"><label
                                                                className="input-label"
                                                                htmlFor="CheckoutForm_userPhone">Phone
                                                                Number</label><input
                                                                className="pretifyPhone"
                                                                style="display: block;"
                                                                name="CheckoutForm[userPhone]"
                                                                id="CheckoutForm_userPhone" type="text">
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="contact-info-field sg-inline-flex-grow">
                                                            <label style="" className="input-label"
                                                                   htmlFor="CheckoutForm_userCountryShortCode">Country</label>
                                                            <input name="CheckoutForm[userCountryId]"
                                                                   id="CheckoutForm_userCountryId"
                                                                   value="181" type="hidden"> <select
                                                                style="background-color:white;display:block; width:unset;border-radius:unset;height:28.5px;padding: 0 10px; background: url(/images/mobile-dropdown.png) no-repeat scroll 100% 3px / 35px auto;"
                                                                name="CheckoutForm[userCountryShortCode]"
                                                                id="CheckoutForm_userCountryShortCode">
                                                                <option value="">Select a country</option>
                                                                <option value="AR">Argentina</option>
                                                                <option value="AW">Aruba</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="BS">Bahamas</option>
                                                                <option value="BH">Bahrain</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BO">Bolivia</option>
                                                                <option value="BA">Bosnia and Herzegovina
                                                                </option>
                                                                <option value="BW">Botswana</option>
                                                                <option value="BR">Brazil</option>
                                                                <option value="BG">Bulgaria</option>
                                                                <option value="KH">Cambodia</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="CL">Chile</option>
                                                                <option value="CN">China</option>
                                                                <option value="CO">Colombia</option>
                                                                <option value="CR">Costa Rica</option>
                                                                <option value="HR">Croatia</option>
                                                                <option value="CY">Cyprus</option>
                                                                <option value="CZ">Czech Republic</option>
                                                                <option value="DK">Denmark</option>
                                                                <option value="DO">Dominican Republic
                                                                </option>
                                                                <option value="EC">Ecuador</option>
                                                                <option value="EG">Egypt</option>
                                                                <option value="SV">El Salvador</option>
                                                                <option value="EE">Estonia</option>
                                                                <option value="FI">Finland</option>
                                                                <option value="FR">France</option>
                                                                <option value="DE">Germany</option>
                                                                <option value="GR">Greece</option>
                                                                <option value="GT">Guatemala</option>
                                                                <option value="HN">Honduras</option>
                                                                <option value="HK">Hong Kong</option>
                                                                <option value="HU">Hungary</option>
                                                                <option value="IN">India</option>
                                                                <option value="ID">Indonesia</option>
                                                                <option value="IE">Ireland</option>
                                                                <option value="IL">Israel</option>
                                                                <option value="IT">Italy</option>
                                                                <option value="JM">Jamaica</option>
                                                                <option value="JP">Japan</option>
                                                                <option value="JO">Jordan</option>
                                                                <option value="KE">Kenya</option>
                                                                <option value="KW">Kuwait</option>
                                                                <option value="LV">Latvia</option>
                                                                <option value="LB">Lebanon</option>
                                                                <option value="LT">Lithuania</option>
                                                                <option value="LU">Luxembourg</option>
                                                                <option value="MK">Macedonia</option>
                                                                <option value="MY">Malaysia</option>
                                                                <option value="MT">Malta</option>
                                                                <option value="MU">Mauritius</option>
                                                                <option value="MX">Mexico</option>
                                                                <option value="ME">Montenegro</option>
                                                                <option value="MA">Morocco</option>
                                                                <option value="NP">Nepal</option>
                                                                <option value="NL">Netherlands</option>
                                                                <option value="NZ">New Zealand</option>
                                                                <option value="NI">Nicaragua</option>
                                                                <option value="NG">Nigeria</option>
                                                                <option value="NO">Norway</option>
                                                                <option value="OM">Oman</option>
                                                                <option value="PA">Panama</option>
                                                                <option value="PY">Paraguay</option>
                                                                <option value="PE">Peru</option>
                                                                <option value="PH">Philippines</option>
                                                                <option value="PL">Poland</option>
                                                                <option value="PT">Portugal</option>
                                                                <option value="PR">Puerto Rico</option>
                                                                <option value="QA">Qatar</option>
                                                                <option value="RO">Romania</option>
                                                                <option value="RU"
                                                                        selected="selected">Russia
                                                                </option>
                                                                <option value="SA">Saudi Arabia</option>
                                                                <option value="RS">Serbia</option>
                                                                <option value="SC">Seychelles</option>
                                                                <option value="SG">Singapore</option>
                                                                <option value="SK">Slovakia</option>
                                                                <option value="SI">Slovenia</option>
                                                                <option value="ZA">South Africa</option>
                                                                <option value="KR">South Korea</option>
                                                                <option value="ES">Spain</option>
                                                                <option value="SE">Sweden</option>
                                                                <option value="CH">Switzerland</option>
                                                                <option value="TW">Taiwan</option>
                                                                <option value="TZ">Tanzania</option>
                                                                <option value="TH">Thailand</option>
                                                                <option value="TR">Turkey</option>
                                                                <option value="AE">United Arab Emirates
                                                                </option>
                                                                <option value="GB">United Kingdom</option>
                                                                <option value="US">United States</option>
                                                                <option value="UY">Uruguay</option>
                                                                <option value="VN">Vietnam</option>
                                                                <option value="ZM">Zambia</option>
                                                            </select></div>
                                                        <div
                                                            className="contact-info-field sg-inline-flex-grow">
                                                            <div className="sec sg-inline-flex-grow"><label
                                                                className="input-label"
                                                                htmlFor="CheckoutForm_userZip">Zip
                                                                Code</label><input style="display: block;"
                                                                                   name="CheckoutForm[userZip]"
                                                                                   id="CheckoutForm_userZip"
                                                                                   type="text"></div>
                                                        </div>
                                                    </div>
                                                    <div className="row js-user-info-error">
                                                        <p className="errorSummary sg-c-error"></p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div id="review" className="section">
                                        <div style="margin-bottom: 10px;">
                                            <div className="step sg-inline-middle row sg-f-ttl">
                                                <div className="sg-inline-middle"
                                                     style="border-radius: 50%; border: 2px solid #000; width: 32px; height: 32px; justify-content: center;">
                                                    <p className="step-num">5</p>
                                                </div>
                                                <p className="step-label" style="margin:0 5px;">Review Your
                                                    Order</p>
                                            </div>
                                        </div>

                                        <div id="product-table" className="">
                                            <div className="table-body">
                                                <div className="vendorBlock sg-bd-2" vendorid="1479">

                                                    <div
                                                        className="sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right sg-bg-2 sg-inline-middle js-vendor-heading vendorHeading desktop"
                                                        style="width: 100%; padding: 20px 15px; box-sizing: border-box;">
                                                        <div className="vendor-img" style="">
                                                            <img
                                                                src="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/1479/original_micah_adrian_1_1__L.jpg"
                                                                style="width: 100%;">
                                                        </div>

                                                        <p className="vendor-name sg-f-hdr sg-inline-flex-grow desktop "
                                                           style="margin: 0 5px;">
                                                            Joseph Jewell <span
                                                            className="item-count sg-c-2">1 item</span>
                                                        </p>

                                                        <div
                                                            className="phone pdp_question_mark js-vendor-level button sg-inline-middle "
                                                            lvl="2" style="" service_vendorid="0"
                                                            seller_vendorid="1479" pid="6983"
                                                            data-origin="productPage" data-siteid="1"
                                                            data-type="product" data-id="6983"
                                                            data-imgsrc="" data-name=""
                                                            data-subject="About Case of 90 Plus Trio Pinot Noir by Breakthrough Winemaker Joseph Jewell"
                                                            tabIndex="0">
                                                            <div className="sg-chatbubble "></div>
                                                            <span
                                                                className="txt-ovr-2 sg-hover-primary sg-text-transform"
                                                                style="padding:0 0 0 5px;">ask a question</span>
                                                        </div>
                                                    </div>
                                                    <div className="js-oii-row oii-row body-row "
                                                         data-pid="6983" data-oiiid="0">

                                                        <div className="main sg-inline-top ">

                                                            <div
                                                                className="three-col-1 col  sg-inline-top sg-inline-flex-grow"
                                                                style="margin-top: 10px;">
                                                                <div className="img" style="">
                                                                    <a href="/beer-wine-and-spirits/product/6983/case-of-90-plus-trio-pinot-noir-by-breakthrough-winemaker-joseph-jewell/0/72/">
                                                                        <div
                                                                            style="background: url('https://d5xydlzdo08s0.cloudfront.net/media/celebrities/1479/products/joseph_jewell_style_shoot-111_1__S.jpg'); background-size: cover;"></div>
                                                                    </a>
                                                                </div>
                                                                <div className="sg-inline-flex-grow"
                                                                     style="margin:0 10px;">
                                                                    <div>
                                                                        <a className="sg-c-1"
                                                                           href="/beer-wine-and-spirits/product/6983/case-of-90-plus-trio-pinot-noir-by-breakthrough-winemaker-joseph-jewell/0/72/">Case
                                                                            of 5.923-Plus Trio Pinot Noir by
                                                                            Breakthrough Winemaker Joseph
                                                                            Jewell</a>
                                                                        <input className="js-pdisplay-name"
                                                                               value="Case of 90-Plus Trio Pinot Noir by Breakthrough Winemaker Joseph Jewell"
                                                                               type="hidden">
                                                                            <input className="js-orderId"
                                                                                   value="" type="hidden">
                                                                    </div>
                                                                    <div style="display: none;">Joseph
                                                                        Jewell
                                                                    </div>
                                                                    <div style=""></div>
                                                                </div>
                                                            </div>

                                                            <div style="flex:1; ">
                                                                <div className="three-col-2  "
                                                                     style="margin-top: 10px; flex:1; ">
                                                                    <div
                                                                        className="sg-inline-top sg-c-2 f-style-ovr1"
                                                                        style="width: 100%;">
                                                                        <div
                                                                            style="flex:0.7; text-align: center;">
                                                                                        <span
                                                                                            className="label">Qty</span>
                                                                        </div>
                                                                        <div className="sg-inline-flex-grow"
                                                                             style="text-align: center;">
                                                                                        <span
                                                                                            className="label">Price</span>
                                                                        </div>
                                                                        <div className="sg-inline-flex-grow"
                                                                             style="text-align: center;">
                                                                                        <span
                                                                                            className="label">Total</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="sg-inline-top"
                                                                         style="width: 100%;">
                                                                        <div
                                                                            style="flex:0.7; text-align: center;">
                                                                                        <span className="js-quantity"
                                                                                              style="display:inline-block;margin-left:-5px;">1</span>
                                                                        </div>
                                                                        <div
                                                                            className="js-price sg-inline-flex-grow"
                                                                            style="text-align: center;"
                                                                            data-p-table-price="US$500"
                                                                            data-p-table-points-price="">
                                                                            ₽32.904,30
                                                                        </div>
                                                                        <div
                                                                            className="js-amount sg-inline-flex-grow"
                                                                            style="text-align: center;"
                                                                            data-p-table-total="US$500"
                                                                            data-p-table-points-total="">
                                                                            ₽32.904,30
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="three-col-3 shipment-item js-err-con"
                                                                    style="margin-top: 10px; text-align:right; flex:1; padding: 0 0 0 5px;">
                                                                    <div className="js-shipping-method">
                                                                        <select pid="6983" num="1"
                                                                                className="shippingMethodId"
                                                                                ship-from="US" data-smid="3"
                                                                                data-minmax="5-99"
                                                                                autocomplete="off"
                                                                                style="width: 185px; display: none;"
                                                                                name="shippingMethodId">
                                                                            <option value="3"
                                                                                    selected="selected"
                                                                                    className="domestic"
                                                                                    disabled=""
                                                                                    style="display: none;">Standard
                                                                                Shipping
                                                                            </option>
                                                                            <option value="17"
                                                                                    className="international">International
                                                                                Standard
                                                                            </option>
                                                                        </select><p
                                                                        className="standard-shipping"
                                                                        style="">Standard Shipping</p></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style="padding:20px;">
                                                        </div>
                                                        <div className="shipping-msg sg-c-error"
                                                             style="padding: 10px 20px;">
                                                            <p>Allow 4 days to ship</p>
                                                        </div>

                                                        <div
                                                            className="p-block js-p-block checkout-p-block sg-f-hdr infobox_container  desktop"
                                                            style="padding: 10px 20px;">
                                                            <div className="p-form js-data js-p-form "
                                                                 data-sellerid="1479" data-pid="6983"
                                                                 data-num="1" data-vid="1479" data-dm="120"
                                                                 data-blm="0" data-mbld="365" data-mbb="0"
                                                                 data-cl="95436" data-cbn="Joseph Jewell"
                                                                 data-lrm="0.0000" data-ltf=""
                                                                 data-rrm="0.0000" data-rtf="" data-wtd=""
                                                                 data-ntf="">
                                                                <div className="restrict"
                                                                     style="margin: 0 20px 10px;">Cannot
                                                                    ship to addresses in MA, ND, NH, and UT
                                                                </div>
                                                                <div
                                                                    className="info-box js-cart sg-bd-2 sg-no-bd-bottom"
                                                                    style="width: 100%;">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="next-steps main"
                                                             style="float: left;  display:none; ">
                                                            <div className="sg-f-ttl"
                                                                 style="margin-bottom:16px;">Next Steps
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <script type="text/javascript">
                                            $(document).ready(function () {
                                            if($('.three-col-3.shipment-item').children().length < 1) {
                                            $('.three-col-2').css('flex','1');
                                            $('.three-col-2').css('text-align','right');
                                            $('.three-col-3.shipment-item').css('display','none');
                                        }
                                        })
                                            ;

                                            /*
                                             *  Assign value to popAgeVerification here --- number 0/1
                                             */
                                            popAgeVerification = 1;
                                            var mobileDir = (g_is_mobile) ? '/m' : '';

                                            $('.review-btn').click( function (){

                                            var g_url_review_main = mobileDir+"/profile/dashboard/productreview/";
                                            var itemId = $(this).attr('data-oii');

                                            if( itemId === undefined || itemId === 0 ){
                                            alertEx('Please refresh the page and submit again.');
                                            return false;
                                        }
                                            window.location = g_url_review_main+itemId;
                                            //window.location = g_url_review_main .'?itemId='. itemId;

                                        })
                                            ;

                                            $('#provide-details-btn').click( function (){

                                            var g_url_orders = mobileDir+"/profile/dashboard/purchases?search=";
                                            var orderId = $(this).attr('data-orderId');

                                            if( orderId === undefined || orderId === 0 ){
                                            alertEx('Please refresh the page and submit again.');
                                            return false;
                                        }
                                            window.location = g_url_orders+orderId;
                                            //window.location = g_url_review_main .'?itemId='. itemId;

                                        })
                                            ;

                                        </script>
                                    </div>

                                    <div
                                        className="checkout-panel sg-bg-2 sg-bd-2 sg-inline-middle sg-f-hdr"
                                        style="padding: 20px; margin-bottom: 40px;">
                                        <div className="sg-inline-flex-grow" style="text-align: center;">
                                            <p className="value">
                                                <span style="margin-right: 10px;">Total </span>
                                                <span className="grandTotal_summary">₽32.904,30</span>
                                            </p>
                                        </div>
                                        <div className="" style="width:533px;">
                                            <div className="place-order gc primaryButton button"
                                                 style="width: 100%;" tabIndex="0">
                                                <div className="title-container"><p className="title">Place
                                                    Order</p></div>
                                            </div>
                                        </div>

                                    </div>


                                    <style type="text/css">
                                        .opt-in-charity, .opt-in-partner {cursor: pointer;}
                                        .opt-in-charity .checkbox, .opt-in-partner
                                        .checkbox {width:16px; height: 16px; float: left; margin: 2px 4px 0 0; background: url(/images/io/check_box.png) no-repeat;}
                                        .opt-in-charity.selected .checkbox, .opt-in-partner.selected
                                        .checkbox {background - position - y: -16px;}

                                        #gift-hint p.message,
                                        p.fineprint {color:#777;float:left; width:100%; margin-top: 5px; margin-bottom: 10px;}
                                        #gift-hint p.message.full {width:450px; margin:5px 0 10px 15px;}


                                        #shipping div.addressWarning {float: left;color:orange;display:none}
                                        #shipping-info .row .errorSummary {font - style: initial;}

                                        #address-suggestion-dialog .update-address p{
                                        font - family: 'source-sans-pro-n4',sans-serif;
                                    }

                                        #address-suggestion-dialog .orignal-address p{
                                        font - family: 'source-sans-pro-n4',sans-serif;
                                    }

                                        #gifting .cal-header{margin: 0px;}

                                        #gifting .gift-receive-options .standard {float:left;width:200px;}

                                        .errorMessage {font - size:13px; color:#FD6340;font-family:georgia;font-style: italic;}

                                        #gifting .cal-time{display:none;}
                                        #checkout .conciergeBlock .sec {padding - left: 0px;}
                                        #checkout .conciergeBlock
                                        .input-label {display:inline-block; min-width:100px}


                                        .mobile #cc-edit-form
                                        .sec {flex - basis: 100%; margin-top:5px;} /* credit card number */

                                        .mobile #cc-edit-form .exp-div select{width:100%}


                                        #checkout .selected .radio {border: 1px solid #00A94F;}
                                        #checkout .selected .inside-radio {background - color: #00A94F;}
                                        #cc-edit-form
                                        .row{width: 100%; box-sizing: border-box; display: inline-flex; align-items: center; margin: 10px 0;}
                                        .js-record-sec .js-record.selected {border: 3px solid #00A94F;}
                                        .steps-widget-num {margin - right: 10px; margin-left: 0px;}
                                        .rtl .steps-widget-num {margin - left: 10px; margin-right: 0px;}

                                        .checkout-panel {margin: 10px 0;}

                                        #gc-promo-block .row.checkout-panel
                                        .contact-info-field {height: 60px;}

                                        #review {margin - bottom: 30px;}

                                    </style>

                                    <script type="text/javascript">
                                        var sessck = "Msqie1lqxOUpLhsh3b69";
                                        var errCount = 0;
                                        ioReady(function (){
                                        window.setTimeout("checkIfSessionExpired()", (g_thisHost === 'www' ? 30 : 10) * 60 * 1000); // check if it is more than 30 minutes
                                    })
                                        ;

                                        function checkIfSessionExpired() {
                                        $.ajax({
                                            type: "POST",
                                            url: '/common/validateSession',
                                            data: {sessck: sessck},
                                            timeout: 10000,
                                            dataType: 'json'
                                        })
                                            .done(function (data) {
                                                if (data.result > 0 && data.loggedIn > 0 && data.loggedInManually > 0) {
                                                    window.setTimeout("checkIfSessionExpired()", 10000); // after 30 minutes, check it in every 10 seconds
                                                } else {
                                                    alertEx(data.msg);
                                                    // redirect after 5 seconds
                                                    // it will display session expires screen for guestCheckoutUser
                                                    window.setTimeout(function () {
                                                        location.href = g_is_mobile ? '/m' : '/';
                                                    }, 5000);
                                                }
                                            })
                                            .fail(function (xhr, textStatus, error) {
                                                console.log(xhr);
                                                console.log(error);
                                                alertEx(textStatus);
                                                // redirect after 5 seconds
                                                // it will display session expires screen for guestCheckoutUser
                                                window.setTimeout(function () {
                                                    location.href = g_is_mobile ? '/m' : '/';
                                                }, 5000);
                                            });
                                    }
                                    </script>
                                </div>
                            </div>

                            <div className="main-col-2">

                                <style>
                                    .summary-box {width: 100%; box-sizing: border-box;}
                                    .summary-box .label, .summary-box .title {flex: 1;}
                                    .summary-box
                                    .row {width: 100%; box-sizing: border-box; padding: 0 10px; display: inline-flex; align-items: flex-start;}
                                    .summary-box.cart_summary .row .title span {white - space:nowrap;}
                                </style>

                                <div className="js-summary summary-sec sg-f-bdy"
                                     style="position: relative; top: 0px;">
                                    <div className="cart_summary summary-box sg-bd-2 sg-c-2 ">
                                        <div className="row" style="margin: 15px 0 0 0;">
                                            <p className="title sg-c-1">Subtotal <span
                                                className="js-sumary-items-cnt sg-c-2">(1 item)</span></p>
                                            <p className="value"><span
                                                className="productTotal_summary sg-c-1">₽32.904,30</span>
                                            </p>
                                        </div>
                                        <div className="row travel-row"
                                             style="display:none; margin-top: 5px;">
                                            <p className="label">Total Travel Fee</p>
                                            <p className="value"><span className="travel-amount"></span></p>
                                        </div>
                                        <div className="row" style="margin-top: 5px;">
                                            <p className="label">Total Shipping</p>
                                            <p className="value"><span
                                                className="shipping-amount">(not yet calculated)</span>
                                            </p>
                                        </div>

                                        <div className="row" style="margin-top: 5px;">
                                            <p className="label">Tax</p>
                                            <p className="value"><span
                                                className="tax_amount_summary">TBD</span></p>
                                        </div>
                                        <div className="row gift-certificate-row"
                                             style="display:none; margin-top: 5px;">
                                            <p className="label">Gift Certificate</p>
                                            <p className="value"><span
                                                className="gift-certificate-amount"></span></p>
                                        </div>
                                        <div className="row store-credit-row"
                                             style="display:none; margin-top: 5px;">
                                            <p className="label">Store Credit</p>
                                            <p className="value"><span
                                                className="store-credit-amount"></span></p>
                                        </div>
                                        <div className="row discount-row"
                                             style="display:none; margin-top: 5px;">
                                            <p className="label">Discount</p>
                                            <p className="value"><span className="discount-amount"></span>
                                            </p>
                                        </div>
                                        <div
                                            className="row total sg-bg-2 sg-c-1 sg-bd-2 sg-no-bd-left sg-no-bd-right sg-no-bd-bottom"
                                            style="padding: 10px;padding-bottom:10px;">
                                            <p className="label" style="line-height: 18px;">
                                                Total<br>
                                                <span className="sg-c-2 sg-f-bdy-s">In RUB</span>
                                            </p>
                                            <p className="value">
                                                            <span
                                                                className="grandTotal_summary total fo-15-n-s4 label">₽32.904,30</span>*
                                            </p>

                                        </div>
                                        <div className="row checkout-currency-converter"
                                             style="padding-top: 5px;">
                                            <p className="title" style="line-height: 18px;">
                                                            <span
                                                                className="sg-c-1"><strong>Total Price: </strong></span>
                                                <br>
                                                    <span className="sg-f-bdy-s">In USD</span>
                                            </p>
                                            <p className="value sg-c-1 js-checkout-grand-total">US$500.00</p>
                                        </div>
                                        <
                                        !--
                                        <div className="row sg-c-2 sg-f-bdy-s" style="padding-bottom: 5px;">
                                            In USD <!--Local currency in USD            </div> -->
                                            <hr className="sg-bd-2 sg-no-bd-top" style="margin: 0 5px">
                                                <div className="row sg-f-bdy-s">
                                                    <p>*The price in RUB is an approximate conversion. You
                                                        will be charged in the local currency, USD, which is
                                                        displayed above.</p>
                                                </div>
                                        </div>


                                        <div style="margin-top: 10px; width: 100%;">
                                            <div className="place-order gc primaryButton button"
                                                 style="width:100%;" tabIndex="0">
                                                <div className="title-container"><p className="title">Place
                                                    Order</p></div>
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

export default Checkout;
