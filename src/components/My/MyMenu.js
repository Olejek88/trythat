import React from 'react';
import Link from "react-router-dom/es/Link";

class MyMenu extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="menu-sec custom-form vendor-page" style={{height: '650px'}} id="vendor-admin">
                    <div className="menu-list main-menu first-level active">
                        <ul id="vendor-menu" className="">
                            <li className="menu-li header sg-f-dspl-s">Мой аккаунт</li>
                            <li className="menu-li account sg-c-2">
                                <a href={"/#/settings"}>Профиль</a>
                            </li>
                            <li className="menu-li account sg-c-2">
                                <a href={"/#/my/current"}>Мои предложения</a>
                            </li>
                            <li className="menu-li sg-c-2">
                                <ul className="sub-menu">
                                    <li className="menu-li orders purchases sg-c-2">
                                        <a href={"/#/my/current"}>Текущие</a>
                                    </li>
                                    <li className="menu-li auctions sg-c-2">
                                        <a href={"/#/my/closed"}>Завершенные</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-li account sg-c-2">
                                <a href={"/#/add"}>Добавить предложение</a>
                            </li>
                            <li className="menu-li sg-c-2">
                                <a href={"/#/my/wish"}>Список желаний</a>
                            </li>
                            <li className="menu-li account sg-c-2">
                                <a href={"/#/follows"}>Отслеживаемые</a>
                            </li>
                            <li className="menu-li account sg-c-2">
                                <a href={"/#/orders"}>Мои заказы</a>
                            </li>
                            <li className="menu-li sg-c-2">
                                <ul className="sub-menu">
                                    <li className="menu-li orders purchases sg-c-2">
                                        <Link to="/orders/open" params={{filter: "open"}}>Текущие</Link>
                                    </li>
                                    <li className="menu-li auctions sg-c-2">
                                        <Link to="/orders/close" params={{filter: "close"}}>Завершенные</Link>
                                    </li>
                                    <li className="menu-li auctions sg-c-2">
                                        <Link to="/orders/cancel" params={{filter: "cancel"}}>Отмененные</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-li account sg-c-2">
                                <a href={"/#/mail"}>Переписка</a>
                            </li>
                            <li className="menu-li sg-c-2">
                                <ul className="sub-menu">
                                    <li className="menu-li orders purchases sg-c-2">
                                        <Link to="/#/mail/create" params={{filter: "open"}}>Отправленные</Link>
                                    </li>
                                    <li className="menu-li auctions sg-c-2">
                                        <Link to="/#/mail/inbox" params={{filter: "close"}}>Входящие</Link>
                                    </li>
                                    <li className="menu-li auctions sg-c-2">
                                        <Link to="/#/mail/delete" params={{filter: "cancel"}}>Удаленные</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MyMenu;
