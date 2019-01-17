import React from 'react';
import Link from "react-router-dom/es/Link";
import {inject} from "mobx-react/index";
import {withRouter} from "react-router-dom";

class MyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            luminary: '',
        };
    }

    componentWillMount() {
        if (this.props.userStore.currentLuminary && this.props.userStore.currentLuminary.id !== "888888")
            this.setState({luminary: this.props.userStore.currentLuminary});
    }

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
                            <li className="menu-li sg-c-2">
                                <ul className="sub-menu">
                                    {/*<li className="menu-li orders purchases sg-c-2">*/}
                                    {/*<a href={"/#/my/customer"}>Клиент</a>*/}
                                    {/*</li>*/}
                                    {this.state.luminary &&
                                    <li className="menu-li auctions sg-c-2">
                                        <a href={"/#/my/luminary"}>Исполнитель</a>
                                    </li>
                                    }
                                </ul>
                            </li>
                            {this.state.luminary &&
                            <li className="menu-li account sg-c-2">
                                <a href={"/#/my/activity/current"}>Мои предложения</a>
                            </li>}
                            {this.state.luminary &&
                            <li className="menu-li sg-c-2">
                                <ul className="sub-menu">
                                    <li className="menu-li sg-c-2">
                                        <a href={"/#/my/activity/current"}>Текущие</a>
                                    </li>
                                    <li className="menu-li sg-c-2">
                                        <a href={"/#/my/activity/closed"}>Завершенные</a>
                                    </li>
                                    <li className="menu-li sg-c-2">
                                        <a href={"/#/my/orders"}>Мои заказы</a>
                                    </li>
                                </ul>
                            </li>
                            }
                            {this.state.luminary &&
                            <li className="menu-li account sg-c-2">
                                <a href={"/#/add"}>Добавить предложение</a>
                            </li>
                            }
                            <li className="menu-li sg-c-2">
                                <a href={"/#/my/activity/wish"}>Список желаний</a>
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
                                        <Link to="/mail/create" params={{filter: "open"}}>Отправленные</Link>
                                    </li>
                                    <li className="menu-li auctions sg-c-2">
                                        <Link to="/mail/inbox" params={{filter: "close"}}>Входящие</Link>
                                    </li>
                                    <li className="menu-li auctions sg-c-2">
                                        <Link to="/mail/delete" params={{filter: "cancel"}}>Удаленные</Link>
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

export default inject('userStore')(withRouter(MyMenu));
