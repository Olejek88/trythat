import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";

@observer
@withRouter
class Activity extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
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
                                        <div className="js-order-tab js-order-tab-open order_list_tab selected desktop open">
                                            <span className="tab_name_span">Открыт</span>
                                            <span className="order_count_span js-order-count-open">( 0 )</span>
                                        </div>
                                        <div className="js-order-tab js-order-tab-completed order_list_tab desktop completed">
                                            <span className="tab_name_span">Закончен</span>
                                            <span className="order_count_span js-order-count-completed">( 0 )</span>
                                        </div>
                                        <div className="js-order-tab js-order-tab-needdetails order_list_tab desktop needdetails">
                                            <span className="tab_name_span">Уточняется</span>
                                            <span className="order_count_span js-order-count-needdetails">( 0 )</span>
                                        </div>
                                        <div className="js-order-tab js-order-tab-cancelled order_list_tab desktop cancelled">
                                            <span className="tab_name_span">Отменен</span>
                                            <span className="order_count_span js-order-count-cancelled">( 0 )</span>
                                        </div>
                                    </div>

                                    <div className="order_list_filters desktop ">
                                        <select className="js-sort-select" style={{width: '150px'}}>
                                            <option value="mostrecent" selected="">Последние</option>
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
                                         data-tab="open" data-loaded="1" data-page="1" style={{display:'block'}}>
                                        <div className="zerostate_div desktop">
                                            <div className="zerostate_img_div">
                                            </div>
                                            <div className="zerostate_text">
                                                Нет заказов
                                            </div>
                                        </div>

                                        <div className="ifonly_pager js-orderlist-pager" style={{clear: 'both', width: '100%', textAlign: 'center', marginTop: '30px'}}>
                                        </div>
                                    </div>
                                    <div className="js-order-content js-order-content-completed order_content"
                                         data-tab="completed" data-loaded="0" data-page="1" style={{display: 'none'}}>
                                    </div>
                                    <div className="js-order-content js-order-content-needdetails order_content"
                                         data-tab="needdetails" data-loaded="0" data-page="1" style={{display:'none'}}>
                                    </div>
                                    <div className="js-order-content js-order-content-cancelled order_content"
                                         data-tab="cancelled" data-loaded="0" data-page="1" style={{display:'none'}}>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="orderlist_thankyou_overlay ifonly_overlay desktop" style={{display:'none'}}>
                            <div className="order_list_pop ifonly_pop">
                                <div className="ifonly_pop_content">
                                    <img className="ifonly_pop_close_img start_conv_close_img"
                                         src={"x-button-grey.png"} alt="close" tabIndex="0" />
                                        <div className="thank_you_title">Thank you for submitting your schedule</div>

                                        <div className="thank_you_txt">
                                            The luminary will check his or her calendar and will get back to you at
                                            their earliest convenience.
                                            You will then receive an email confirming the details of the experience.
                                            If the luminary is unable to confirm your details, he or she will propose
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
        );
    }
}

export default Activity;
