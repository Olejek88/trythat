import React from 'react';
import {inject} from "mobx-react/index";

class PopWish extends React.Component {
    handleClickLogout = () =>
        this.props.authStore.logout()
            .then(() => window.location.reload());
    render() {
        return (
            <div id="acct-popup-wrapper" className="io-popup-wrapper">
                <div id="acct-popup-box" className="sg-bg-3 sg-bd-3">
                    <div id="acct-popup-carrot" className="io-arrow-popup-carrot">
                    </div>
                    <ul id="acct-popup" style={{paddingLeft: 0}}>
                        <a href={"/#/settings"}>
                            <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                                <p>Профиль</p>
                            </li>
                        </a>
                        <a href={"/#/orders"}>
                            <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                                <p>Заказы</p></li>
                        </a>
                        <a href={"/#/my/activity/wish"}>
                            <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3"><p>Список желаний</p></li>
                        </a>
                        <a href={"/#/follows"}>
                            <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                                <p>Предпочтения</p></li>
                        </a>
                        <a href="/#/mail">
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
                        <a href={"/#/my/activity/current"} tabIndex="2404">
                            <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                                <p>Мои предложения</p></li>
                        </a>
                        <li style={{borderBottom: '1px solid #e1e1e1', paddingBottom: '5px'}}>
                        </li>
                        <a tabIndex="2409" onClick={this.handleClickLogout}>
                            <li className="child  sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                                <p>Выйти</p></li>
                        </a>
                    </ul>
                </div>
            </div>
        );
    }
}

export default inject('authStore')(PopWish);
