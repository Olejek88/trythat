import React from 'react';

class ActivityDetails extends React.Component {
  render() {
    return (
        <div className="right-box details-box" style={{minHeight: 'initial'}}>
{/*
            <div className="pdp-product-details ">
                <div className="product-desc  sg-f-bdy ">
                    <div className="content celeb-color-anchor">
                        <div className="buy-as-a-gift js-how-to-buy-gift sg-bd-2 buy_as_gift_div">
                            <p className="sg-c-1" tabIndex="0"
                               style={{textAlign: 'right', marginRight: '10px', lineHeight: '50px'}}>
                                <font className="buy_as_gift">Buying this as a gift?&nbsp;&nbsp;&nbsp;</font></p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{clear: 'both'}}>
            </div>
*/}
            <div className="finePrint-sec " style={{display: 'none'}}>
                <div className="product-desc ">
                    <div className="content celeb-color-anchor">
                        <ul>
                            <li>Точная дата и время будут уточнены после покупки вашего впечатления</li>
                            <li><p className="p1">Возврат и обмен будут невозможны после заявленной даты и самого события</p></li>
                        </ul>
                        <ul>
                            <li>Нажимая "Купить сейчас" Вы соглашаетесь с
                                <a href="/" target="_blank" title="Opens In New Window">условиями использования сервиса</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ActivityDetails;
