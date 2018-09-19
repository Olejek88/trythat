import React from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@inject('commonStore')
@withRouter
@observer
export default class Cart extends React.Component {
    componentDidMount() {
        this.props.commonStore.loadTags();
    }

    render() {
        return (
            <div id="shopping-cart">
                <div className="body">
                    <div className="box">
                        <div className="main-title sg-inline-middle" style={{width: '100%', marginBottom: '30px'}}>
                            <a className="sg-inline-middle sg-c-1 sg-f-bdy" href="/"
                               style={{flex: '.75', marginTop: '20px'}}>
                                <span className="continue-shopping sg-text-transform sg-arrow-l ">&lt; Продолжить</span>
                            </a>
                            <h3 className="sg-f-dspl-m sg-inline-flex-grow" style={{marginTop: '20px'}}>Корзина</h3>
                        </div>
                        <div style={{textAlign: 'left', display: 'none'}}>
                            <p>Пожалуйста запланируйте ваше впечатление</p>
                        </div>

                        <div className="sg-inline-top" style={{width: '100%'}}>
                            <div className="sg-inline-flex-grow" style={{width: '100%'}}>
                                <div id="left-block">
                                    <input id="clickedProductId" type="hidden"/>
                                    <input id="clickedNumber" type="hidden"/>
                                    <input id="saveOriginalAddress" value="true" type="hidden"/>
                                    <input id="luminaryTravel" type="hidden"/>
                                    <div id="product-table" className="">
                                        <div className="table-body">
                                            <div className="vendorBlock sg-bd-3">
                                                <div className="vendorHeading sg-inline-middle sg-bg-2 sg-bd-3 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                                                    style={{padding: '20px 15px', width: '100%', boxSizing: 'border-box'}}>
                                                    <div className="vendor-img">
                                                        <img src={"luminary2.jpg"} style={{width: '100%'}} alt={""}/>
                                                    </div>
                                                    <p className="vendor-name sg-f-ttl sg-inline-middle sg-inline-flex-grow"
                                                       style={{margin:'0 10px'}}>Продавец
                                                        <span className="sg-c-2" style={{margin: '0 5px'}}> 1 </span>
                                                    </p>
                                                    <div className="phone pdp_question_mark js-vendor-level button sg-inline-middle">
                                                        <div className="sg-chatbubble">
                                                        </div>
                                                        <span className="txt-ovr-2 sg-hover-primary sg-text-transform"
                                                            style={{padding:'0 0 0 5px'}}>задать вопрос</span>
                                                    </div>
                                                </div>
                                                <div className="body-row">
                                                    <div className="main sg-inline-top">
                                                        <div className="two-col-1 col sg-inline-top sg-f-ttl" style={{margin: '10px 0'}}>
                                                            <div><a href="/" className="sg-c-1">
                                                                <img src={"exp1.jpg"} style={{width: '140px'}}  alt={""}/>
                                                                </a>
                                                            </div>
                                                            <div style={{margin: '0 10px', width: '50%'}}>
                                                                <div><a href="/" className="js-pdpDetails sg-c-1">
                                                                    Описание услуги</a></div>
                                                                <div className="sg-c-2" style={{display: 'none'}}>
                                                                    Исполнитель
                                                                </div>
                                                                <div className="sg-c-2"></div>
                                                                <div className="convert" style={{marginTop: '10px'}}>
                                                                    <a className="sg-inline-middle" href="/">
                                                                        <div className="heart_img_green"
                                                                             style={{width: '22px', height: '22px', backgroundSize: 'cover'}}>
                                                                        </div>
                                                                        <span className="wishlist-text sg-c-2 sg-f-btn sg-text-transform"
                                                                            style={{margin: '2px 2px 2px 5px'}}>В избранное</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="two-col-2 col sg-inline-flex-grow sg-f-ttl" style={{margin: '10px 0'}}>
                                                            <div className="sg-inline-top sg-c-2 f-style-ovr1"
                                                                style={{width: '100%', paddingBottom: '7px'}}>
                                                                <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                                                    <span>К-во</span>
                                                                </div>
                                                                <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                                                    <span>Цена</span>
                                                                </div>
                                                                <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                                                    <span>Всего</span>
                                                                </div>
                                                                <div className="remove-convert" style={{width: '28px', position: 'relative', top:'-6px'}}>
                                                                    <div className="remove">
                                                                        <a href="/">
                                                                            <img src={"icon_close.png"} alt="remove" style={{width: '28px'}} />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sg-inline-top sg-f-ttl" style={{width: '100%'}}>
                                                                <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                                                    <span className="js-quantity">1</span>
                                                                </div>
                                                                <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                                                    <span className="js-price">US$500</span>
                                                                </div>
                                                                <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                                                    <span className="js-amount">US$500</span>
                                                                </div>
                                                                <div style={{width: '28px'}}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{padding: '0 20px'}}>
                                                    </div>
                                                    <div className="shipping-msg sg-c-error" style={{marginLeft: '20px'}}>
                                                        <p>4 дня на оплату</p>
                                                    </div>
                                                    <div className="p-block cart-p-block sg-inline-top" style={{padding: '10px 20px', width: '100%', boxSizing: 'border-box'}}>
{/*
                                                        <div className="p-block-1 sg-inline-flex-grow sg-bd-2"
                                                             style={{width: '100%'}}>
                                                            <div className="p-form js-data js-p-form">
                                                                <div className="info-box js-cart ">
                                                                    <div className="widget-row  clearfix">
                                                                        <div className="preCheckOutField">
                                                                            <select
                                                                                className="quantity js-quantity-change infobox_quantity edit"
                                                                                style={{width: '100%'}}
                                                                                name="CartItemInfo" id="CartItemInfo">
                                                                                <option value="1" selected="selected">1
                                                                                    штука
                                                                                </option>
                                                                                <option value="2">2 штуки</option>
                                                                                <option value="3">3 штуки</option>
                                                                                <option value="4">4 штуки</option>
                                                                                <option value="5">5 штук</option>
                                                                                <option value="6">6 штук</option>
                                                                                <option value="7">7 штук</option>
                                                                                <option value="8">8 штук</option>
                                                                                <option value="9">9 штук</option>
                                                                                <option value="10">10 штук</option>
                                                                            </select></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
*/}

                                                        <div className="p-block-2 sg-inline-middle sg-inline-flex-grow sg-bd-2 sg-f-hdr sg-bg-2"
                                                            style={{justifyContent: 'center', width: '100%', display: 'none', minHeight: '35px'}}>
                                                            <div className="sg-bg-3 sg-bd-2" style={{width: '85%'}}>
                                                                <div className="price-info" style={{padding: '15px', display: 'none'}}>
                                                                    <div className="css-price-row price-cal sg-inline-middle"
                                                                         style={{display:'none'}}>
                                                                        <span className="js-price-detail sg-inline-flex-grow"></span>
                                                                        <span className="js-price-total">5000р.</span>
                                                                    </div>
                                                                    <div className="css-price-row traval-cost js-travel-cost sg-inline-middle"
                                                                        style={{display:'none'}}>
                                                                        <span className="sg-inline-flex-grow">Доставка</span>
                                                                        <span className="js-travel-cost-amt">0</span>
                                                                    </div>
                                                                    <div style={{margin: '5px 0', borderTop: '1px solid #e1e1e1'}}>
                                                                    </div>
                                                                    <div className="css-price-row total-cost sg-inline-middle">
                                                                        <span className="sg-inline-flex-grow">Подитог</span>
                                                                        <span className="js-total-sum">5000р.</span>
                                                                    </div>
                                                                    <div className="clearAll"
                                                                         style={{float: 'none', paddingBottom: '0px'}}>
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
                            </div>

                            <div id="right-block" className="sg-f-bdy ">
                                <div id="summary-box" className="summary-box  sg-bd-3">
                                    <div style={{padding: '20px 10px 10px'}}>
                                        <div className="sg-inline-middle" style={{width: '100%', marginBottom: '5px'}}>
                                            <p className="title sg-inline-flex-grow">Подитог
                                                <span className="sg-c-2">(1)</span>
                                            </p>
                                            <p className="value">
                                                <span className="productTotal_summary">5000р.</span>
                                            </p>
                                        </div>
                                        <div className="row js-total-travel-cost sg-inline-middle"
                                             style={{margin: '5px 0 5px 0', width: '100%', display: 'none'}}>
                                            <p className="title sg-inline-flex-grow">Дополнительно</p>
                                            <p className="value">
                                                <span className="travelTotal_summary">0.00р</span>
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="start-checkout  primaryButton button" style={{width:'100%'}} tabIndex="0">
                                                <div className="title-container">
                                                    <p className="title">Оформить</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="shipping-estimation" className=" sg-bd-2 sg-no-bd-bottom sg-no-bd-left sg-no-bd-right"
                                         style={{padding: '15px 10px', boxSizing: 'border-box'}}>
                                        <div className="estimation-result-block" style={{marginTop: '15px', display:'none'}}>
                                            <hr />
                                                <div className="sg-inline-middle total" style={{width: '100%'}}>
                                                    <p className="sg-inline-flex-grow">Итого</p>
                                                    <p className="value"><span id="grandTotal"></span></p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="help-box" className="disp-ovr1" style={{marginTop: '10px'}}>
                                    <div id="customer-support" style={{width: '100%'}} className="secondaryButton button">
                                        <div className="title-container"><p className="title">Поддержка</p></div>
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
