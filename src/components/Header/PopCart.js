import React from 'react';
import { observer } from 'mobx-react';

@observer
class PopCart extends React.Component {
  render() {
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
                        <div id="cart-popup-items" style={{height:'83px'}}>
                            <div className="mCustomScrollBox" id="mCSB_1"
                                 style={{position:'relative', height:'100%', overflow:'hidden', maxWidth:'100%'}}>
                                <div className="mCSB_container mCS_no_scrollbar" style={{position:'relative', top:'0'}}>
                                    <ul style={{padding: '0 10px'}}>
                                        <li className="item sg-inline-middle sg-f-bdy">
                                            <a className="img-box-wrapper" href="/" style={{flex:'3'}}>
                                                <div className="img-box" style={{backgroundImage: 'url(luminary2.jpg)'}}>
                                                </div>
                                            </a>
                                            <div className="name" style={{flex:'4', lineHeight: '130%'}}>
                                                Дегустация вина от винодела Марко Бинанци
                                            </div>
                                            <div className="quantity" style={{flex:'1', overflow: 'hidden'}}>
                                                <p className="label text-center">К-во</p>
                                                <p className="text text-center">1</p>
                                            </div>
                                            <div className="price" style={{flex:'2', marginRight:'10px', marginLeft:'10px', overflow: 'hidden'}}>
                                                <p className="label text-center">Цена</p>
                                                <p className="text text-center">5000р.</p>
                                            </div>
                                            <div className="amount" style={{flex:'2', overflow: 'hidden'}}>
                                                <p className="label text-center">Итого</p>
                                                <p className="text text-center">5000р.</p>
                                            </div>
                                        </li>
                                        <div className="seperator sg-bd-2 sg-no-bd-top">
                                        </div>
                                    </ul>
                                </div>
                                <div className="mCSB_scrollTools" style={{position: 'absolute', display: 'none'}}>
                                    <div className="mCSB_draggerContainer" style={{position:'relative'}}>
                                        <div className="mCSB_dragger" style={{position: 'absolute', top: '0px'}}>
                                            <div className="mCSB_dragger_bar" style={{position:'relative'}}>
                                            </div>
                                        </div>
                                        <div className="mCSB_draggerRail">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer sg-f-dspl-s sg-inline-middle"
                             style={{width: '100%', justifyContent: 'space-between', padding: '10px 20px', boxSizing: 'border-box'}}>
                            <div className="goto-cart">
                                <a href="/cart" className="goto-link sg-text-transform">корзина</a>
                            </div>
                            <div className="subtotal" style={{maxWidth: '150px'}}>
                                Подитог: 5000р.
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
