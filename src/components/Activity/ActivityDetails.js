import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivityDetails extends React.Component {
  render() {
    return (
        <div className="right-box details-box" style="min-height: initial;">
            <div className="pdp-product-details ">
                <h4 className="sg-f-ttl">Подробнее</h4>
                <div className="product-desc  sg-f-bdy ">
                    <div className="content celeb-color-anchor">
                        <ul>
                            <li>Dinner&nbsp;for two at Chez Panisse's intimate 'kitchen table'&nbsp;</li>
                            <li>Reservations encouraged to be arranged 4-6 weeks in advance.&nbsp;</li>
                            <li>Seatings available at either&nbsp;6:00 pm&nbsp;or&nbsp;8:30 pm</li>
                            <li>Available&nbsp;Monday&nbsp;to&nbsp;Thursday&nbsp;only</li>
                            <li>Set menus are seasonal; substitutions may not be able to be accommodated.</li>
                            <li>Paired wines accompany each course</li>
                            <li>Gratuity is included</li>
                        </ul>
                        <div className="buy-as-a-gift js-how-to-buy-gift sg-bd-2"
                             style="margin-top: 15px;cursor: pointer;width: 100%; height: 50px;
                             background: url('buyingthisasagift_banner__L.jpg');background-size: cover;
                             background-size: auto 100%; background-repeat: no-repeat;">
                            <p className="sg-c-1" tabIndex="0"
                               style="text-align: right; margin-right: 10px; line-height: 50px;">
                                <font style="font-family:Montserrat;font-size:11px;letter-spacing: 0.14em;text-transform:uppercase;color:#00a94f;">Buying
                                this as a gift?&nbsp;&nbsp;&nbsp;</font></p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="view-fp sg-text-transform  sg-inline-middle" clickaction="show" tabIndex="0">
                <span>read fine print</span>
                <img className="view-fp-arrow" src="icon_arrow_down_000.png" />
            </p>
            <div style="clear: both"></div>
            <div className="finePrint-sec " style="display: none;">
                <div className="product-desc ">
                    <div className="content celeb-color-anchor">
                        <ul>
                            <li>Will be scheduled on a mutually agreeable date and time, based on luminary’s
                                availability
                            </li>
                            <li>
                                <p className="p1">This experience is non-refundable after scheduling is complete</p>
                            </li>
                        </ul>
                        <ul>
                            <li>By clicking Buy Now, you agree to all our <a
                                href="/" target="_blank" title="Opens In New Window">Terms Of Use</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ActivityDetails;
