import React from 'react';
import {observer} from 'mobx-react';

@observer
class ActivitySelect extends React.Component {
    render() {
        return (
            <div className="right-box action-box" style="margin-bottom: 40px;">
                <div className="p-attributes " data-productid="325">
                    <h2 className="lum-name sg-f-dspl-s ">Alice Waters</h2>
                    <p className="charity-name sg-f-bdy sg-c-2 ">
                        <img src="icon_ribbon.png" style="width: 12.5px; "/>
                        <span>Benefiting The Edible Schoolyard Project</span>
                    </p>
                    <div className="name-group" style="float:left; width: 100%; margin-top:34px;">
                        <h1 className="p-name sg-f-ttl">Dine in the Heart of the Chez Panisse Kitchen</h1>
                        <div className="p-shortDesc body-text  sg-f-bdy" data-limit="68" data-height="132"
                             style="height: 68px;">
                            <p>Journey to the Berkeley restaurant where the farm-to-table and&nbsp;locally sourced
                                ingredients movement was invented. A special table is set just for you in the
                                kitchen,&nbsp;many consider the best seat in the house, and until now, one that was
                                impossible to reserve.</p>
                            <span className="js-viewMore sg-c-primary sg-text-transform"
                                  data-selector="#pdp .p-shortDesc"
                                  style="cursor: pointer; position: absolute; bottom: 0px; right: 0px; background-color: rgb(255, 255, 255);">... more</span>
                            <span className="js-viewLess sg-c-primary sg-text-transform"
                                  data-selector="#pdp .p-shortDesc"
                                  style="cursor: pointer;"> less</span>
                        </div>
                    </div>
                    <div style="clear: both">
                    </div>
                </div>

                <form name="orderDetail" id="order-detail" className="form" action="/" method="POST">
                    <input value="b60fb209b081b7f23b80dcd03d362bf01cfd1b3a" name="stk" type="hidden"/>
                    <input id="guest-checkout" name="guest-checkout" value="0" type="hidden"/>
                    <div className="p-form" data-view="_preCheckoutForm_new" style="border: none; background: none;">
                        <div className="js-p-form product-section-p-form sg-bg-2 sg-bd-2 ">
                            <div className="info-box js-err-con ">
                                <table className="sg-bg-2 sg-bd-2 sg-no-bd-left sg-no-bd-right sg-no-bd-top"
                                       style="width: 100%;">
                                    <tbody>
                                    <tr className="sg-inline-top sg-f-hdr"
                                        style="padding: 10px; box-sizing: border-box; width: 100%;">
                                        <td className="attr-field loc js-attr-row attr-geographic sg-inline-flex-grow">
                                            <div>
                                                <img src="icon_loc.png"/><p>Berkeley, California</p>
                                            </div>
                                        </td>
                                        <td className="attr-field js-attr-row attr-guests attr-guest2 sg-inline-flex-grow">
                                            <div>
                                                <img src="icon_manypeeps.png"/>
                                                <div>
                                                    <p style="max-width:none;">2 people</p>
                                                    <p style="display:none">2 people</p>
                                                </div>
                                            </div>

                                        </td>
                                        <td className="attr-field js-attr-row attr-duration attr-duration2 sg-inline-flex-grow">
                                            <div>
                                                <img src="icon_clock.png"/>
                                                <div>
                                                    <p>2.5 hours</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="widget-row" style="">
                                    <input value="" name="scenario" id="scenario" type="hidden"/>
                                    <input name="userId" id="userId" type="hidden"/>
                                    <div
                                        className="sg-bg-2 sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right preCheckOutField displayonly_div event_venue_row"
                                        style="padding: 10px;">
                                        <div className="sg-inline-top"
                                             style="width:100%; position: relative; flex-wrap:nowrap;">
                                            <div className="sg-inline-middle displayonly_title "
                                                 style="padding-left: 30px; box-sizing: border-box;">
                                            </div>
                                            <p style="line-height:22px;">Chez Panisse
                                                <a className="google-map-address-link " href="/" style=""
                                                   target="_blank" title="Opens In New Window">Map it</a>
                                            </p>
                                        </div>
                                        <div className="displayonly_content">
                                        </div>
                                    </div>
                                    <div className="row preCheckOutField sg-bg-3" id="addPeople">
                                        <select
                                            className="sg-f-hdr participants js-participants js-numGuests sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                                            data-peopleexception="" onChange="" style="width: 100%;display:none;"
                                            name="numGuests" id="numGuests">
                                            <option value="2" selected="selected">2 people</option>
                                        </select>
                                        <input className="js-ori-numGuests" value="2" data-exceptionguestprice=""
                                               type="hidden"/>
                                        <div className="row" id="addPeopleError"
                                             style="display:none; color: #FD6340 !important;
                                             font-family: georgia;font-style: italic;font-size: 13px; box-sizing:border-box; padding:5px 10px;">
                                            <p style="color: #FD6340 !important;font-family: georgia;font-style: italic;font-size: 13px; ">
                                                Incorrect Number Of People
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row preCheckOutField sg-bg-3" id="addDuration">
                                        <input name="durationMinutes" className="js-durationMinutes"
                                               data-exceptiontime="" data-exceptiondurationprice=""
                                               id="CartItemSocialInfo_durationMinutes" value="2.5" type="hidden"/>
                                        <input name="addDurationCost" id="CartItemSocialInfo_addDurationCost" value="0"
                                               type="hidden"/>
                                        <input className="js-ori-durationMinutes" value="2.5" type="hidden"/>
                                    </div>
                                    <div className="schedule-button preCheckOutField">
                                        <a href="/" className="allowAllUsers" tabIndex="-1">
                                            <input
                                                className="sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right sg-placeholder-primary js-display-date js-schedule calender-field  negotiate-schedule-picker  "
                                                placeholder="Preferred Date And Time"
                                                data-error="Please select date and time" readOnly="" value=""
                                                onClick="" tabIndex="0" style="background-image: url(icon_cal.png); background-repeat: no-repeat;
                                                background-size: 22px; height: 44px; width: 100%; background-position-x: 10px;
                                                background-position-y: center; box-sizing: border-box; padding: 10px; padding-left: 40px;"
                                                type="text"/>
                                        </a>
                                        <input className="js-date-1" name="Schedule[date][0]" value="" type="hidden"/>
                                        <input className="js-date-2" name="Schedule[date][1]" value="" type="hidden"/>
                                        <input className="js-ori-date-1" value="" type="hidden"/>
                                        <input className="js-ori-date-2" value="" type="hidden"/>
                                    </div>
                                    <input value="0" name="optionsError" id="optionsError" type="hidden"/>
                                    <div className="row sub-prods-row clearfix">
                                        <input id="customRadioBoxInput" value="105048" name="sub_option" type="hidden"/>
                                        <ul className="optionProducts"
                                            style="float: left; margin-top: 8px; margin-left: 6px; width: 100%;">
                                            <li className="customRadioBox optionProduct"
                                                data-gc="0" data-sellerid="2269" data-pid="105048"
                                                data-vid="36" data-dm="150" data-blm="40320" data-mbld="365"
                                                data-mbb="0" data-num="0" data-oii="0"
                                                data-inc-price-per-person="0" data-inc-price-per-hour="0">
                                                <span className="radio" tabIndex="0"></span>
                                                <span className="label">8:30pm</span>
                                            </li>
                                            <li className="customRadioBox optionProduct" pid="105049"
                                                data-gc="0" data-sellerid="2269" data-pid="105049"
                                                data-vid="36" data-dm="150" data-blm="40320" data-mbld="365"
                                                data-mbb="0" data-num="0" data-oii="0"
                                                data-inc-price-per-person="0" data-inc-price-per-hour="0">
                                                <span className="radio" tabIndex="0"></span>
                                                <span className="label">6:00pm</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="clearAll">
                                    </div>
                                </div>
                                <div className="errorSummary js-error-summary"
                                     style="display:none; padding:5px 15px; background:white;">
                                    * Please select an option
                                </div>
                            </div>

                            <div className="buyBox  desktop " style="clear:both;">
                                <div className="price-sec sg-f-hdr  desktop  " style="">
                                    <p className="sg-inline-middle price " style="justify-content: space-between;">
                                        <span className="priceText">US$1,000/person</span>
                                        <span id="travelCostDisplay"></span>
                                        <span className="totalPriceText">Total <font id="totalPrice" price="2000.00"
                                                                                     incrementalprice="0">US$2,000</font></span>
                                        <span className="soldout celeb-color sg-c-1"></span>
                                    </p>
                                    <div className="clearAll"></div>
                                </div>

                                <div className="buy-button-row desktop " style="">
                                    <div id="buynow-button" style="width:100%"
                                         className=" sg-text-transform  primaryButton button" data-pid="325"
                                         tabIndex="0">
                                        <div className="title-container"><p className="title">buy now</p></div>
                                    </div>
                                </div>
                                <div className="clearAll"></div>
                            </div>
                        </div>
                        <div className="social_wiget_div sg-f-hdr sg-bd-2 desktop " style="text-align:center">
                            <div className="wishlist  secondaryButton sg-cursor " pid="325" lvl="1" tabIndex="0">
                                <div className="pdp heart_img" pid="325"></div>
                                <p className="pdp wishlist-text title sg-text-transform">add to wishlist</p>
                            </div>
                            <table className="btn_table sg-bd-2 sg-no-bd-bottom sg-no-bd-left sg-no-bd-right">
                                <tbody>
                                <tr>
                                    <td className="left_td share_td sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-bottom "
                                        style="">
                                        <a href="#" className="button sg-inline-middle" lvl="2" id="sweepstake-share"
                                           data-type="" style="justify-content:center">
                                            <img style="width:28px; vertical-align: middle;"
                                                 src="icon_share_green.png"/>
                                            <span className="sg-text-transform txt-ovr-2 sg-hover-primary">share</span>
                                        </a>
                                    </td>
                                    <td className="right_td question_td" style="">
                                        <div className="phone pdp_question_mark  button sg-inline-middle allowAllUsers"
                                             lvl="2" style="" service_vendorid="0" seller_vendorid="2269" pid="325"
                                             data-origin="productPage" data-siteid="1" data-type="product" data-id="325"
                                             data-imgsrc="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/36/waters_350px__L.jpg"
                                             data-name="IfOnly"
                                             data-subject="About Supper in the Kitchen at Chez Panisse" tabIndex="0">
                                            <div className="sg-chatbubble "></div>
                                            <span className="txt-ovr-2 sg-hover-primary sg-text-transform"
                                                  style="padding:0 0 0 5px;">ask a question</span></div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="clearAll">
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ActivitySelect;
