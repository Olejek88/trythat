import React from 'react';
import { observer } from 'mobx-react';

@observer
class PopWish extends React.Component {
  render() {
    return (
        <div id="wish-popup-wrapper" className="io-popup-wrapper">
            <div id="wish-popup-box" className="sg-bg-3 sg-bd-3">
                <div id="wish-popup-carrot" className="io-arrow-popup-carrot" style={{marginLeft: '400px'}}>
                </div>
                <div id="wish-popup-content" className="sg-f-subttl" style={{marginTop: '0px', textAlign:'center'}}>
                    <div id="wish-popup" className="io-arrow-popup">
                        <div id="wish-popup-items" style={{height:'82px'}} className="mCustomScrollbar _mCS_1">
                            <div className="mCustomScrollBox" id="mCSB_1" style={{position:'relative',
                                height:'100%', overflow:'hidden', maxWidth:'100%'}}>
                                <div className="mCSB_container mCS_no_scrollbar" style={{position: 'relative', top:'0'}}>
                                    <ul className="wish-popup-ul">
                                        <li className="wish-pop-li item sg-inline-middle" style={{padding: '0 10px'}}>
                                            <a className="img-box-wrapper" href="/#/activity/1" style={{flex:'1'}}>
                                                <div className="img-box wishlist-image">
                                                </div>
                                            </a>
                                            <div className="name" style={{flex: '3', textAlign: 'left'}}>
                                                <a href={"/#/activity/1"} className="sg-c-1">
                                                    Intimate Craft Brew-Pairing Dinner at Forbidden Root
                                                </a>
                                            </div>
                                            <div className="amount" style={{flex: '1',
                                                padding: '0 20px 0 5px', maxHeight: '50px', overflow: 'hidden'}}>
                                                US$600
                                            </div>
                                        </li>
                                        <div className="separator sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right">
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <div style={{float: 'left', margin: '0px 0 0 20px'}}>
                                <a href="/wishlist" className="goto-link">Смотреть список</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PopWish;
