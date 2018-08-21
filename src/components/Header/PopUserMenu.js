import React from 'react';
import { observer } from 'mobx-react';

@observer
class PopWish extends React.Component {
  render() {
    return (
        <div id="acct-popup-wrapper" className="io-popup-wrapper">
            <div id="acct-popup-box" className="sg-bg-3 sg-bd-3">
                <div id="acct-popup-carrot" className="io-arrow-popup-carrot">
                </div>
                <ul id="acct-popup" style={{paddingLeft: 0}}>
                    <a href="/#/settings" tabIndex="2401">
                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                            <p>Профиль</p>
                        </li>
                    </a>
                    <a href="/#/orders" tabIndex="2404">
                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                            <p>Заказы</p></li>
                    </a>
                    <a href="/#/wishlist" tabIndex="2406">
                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3"><p>Список желаний</p></li>
                    </a>
                    <a href="/follows" tabIndex="2407">
                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                            <p>Предпочтения</p></li>
                    </a>
                    <a href="/communication" tabIndex="2408">
                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                            <p>Общение<span className="bubble notification unread sg-c-3 bg-ovr-4"
                                            style={{
                                                position: 'relative',
                                                margin: '0px 3px',
                                                visibility: 'hidden'
                                            }}>
                            </span></p>
                        </li>
                    </a>
                    <li style={{borderBottom: '1px solid #e1e1e1', paddingBottom: '5px'}}>
                    </li>
                    <a href="javascript:logout();" tabIndex="2409">
                        <li className="child  sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                            <p>Выйти</p></li>
                    </a>
                </ul>
            </div>
        </div>
    );
  }
}

export default PopWish;
