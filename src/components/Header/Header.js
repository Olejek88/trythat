import React from 'react';
import {Link} from 'react-router-dom';
import {inject} from 'mobx-react';
import MenuNew from "../MenuNew";
import PopCart from "./PopCart";
import PopWish from "./PopWish";
import PopUserMenu from "./PopUserMenu";
import MenuMobile from "../MenuMobile";

const LoggedOutView = props => {
    if ((props.currentUser && (props.currentUser.id === 0)) || props.currentUser===undefined) {
        return (
            <div id="buttons-nav" className=" sg-inline-middle"
                 style={{order: '3', flexWrap: 'nowrap', float: 'right'}}>
                {!props.currentLuminary &&
                <Link to="/sell" className="navButton button" id="sellBtn">
                    <div className="title-container"><p className="title">Продать на TryThat</p></div>
                </Link>
                }
                <Link to="/register" className="access-join allowAllUsers js-signUp primaryButton button"
                      id="signUpBtn">
                    <div className="title-container"><p className="title">Регистрация</p></div>
                </Link>
                <Link to="/login" className="navButton button js-login" id="logInBtn">
                    <div className="title-container"><p className="title">Войти</p></div>
                </Link>
{/*
                <Link to="/" className="sg-inline-middle">
                    <img src={"images/icon_search.png"} style={{width: '30px'}} alt="поиск"/>
                </Link>
                <Link to="/" className="shopping access-join js-shopping-bag js-signUp sg-inline-middle">
                    <img src={"images/icon_cart.png"} style={{width: '30px'}} alt="корзина"/>
                </Link>
*/}
            </div>
        );
    }
    return null;
};

const LoggedInView = props => {
    if (props.currentUser && props.currentUser.id !== 0) {
        return (
            <React.Fragment>
                <div id="buttons-nav" className=" sg-inline-middle" style={{order: '3', flexWrap: 'nowrap'}}>
                    {/*
                <Link
                    to={`/@${props.currentUser.username}`}
                    className="nav-link">
                    <img src={props.currentUser.image} className="user-pic" alt="" />
                    {props.currentUser.username}
                </Link>
                */}
                {!props.currentLuminary &&
                    <Link to="/sell" className="navButton button button_radius" id="sellBtn">
                        <div className="title-container"><p className="title">Продать на TryThat</p></div>
                    </Link>
                }
                {/*
                <Link to="/settings" className="access-join allowAllUsers js-signUp primaryButton button" id="signUpBtn">
                    <div className="title-container"><p className="title">Профиль</p></div>
                </Link>
                <Link to="/logout" className="navButton button js-login" id="logInBtn">
                    <div className="title-container"><p className="title">Выйти</p></div>
                </Link>
                */}
                </div>
                <div id="top-welcome" className="search_result_container sg-f-bdy-s sg-inline-middle"
                     style={{flexWrap: 'nowrap', order: '4'}}>
                    <div id="profile_settings" className={"profile_icon"}>
                        <Link to="/settings" className="myaccount sg-inline-middle" id="settings">
                            <img src={"images/icon_peep_fff.png"} style={{height: '28px'}} alt={"none"}/>
                        </Link>
                        <p className="caption sg-c-4" style={{textAlign: 'center'}}>Вы</p>
                        <div className="bubble notification unread txt-ovr-4 bg-ovr-3"
                             style={{visibility: 'hidden'}}>
                        </div>
                        <PopUserMenu/>
                    </div>
                    <div id="wish" className={"profile_icon"}>
                        <Link to="/wishlist" className="settings" style={{textAlign: 'center'}}>
                            <img src={"images/icon_heart_on_white.png"} style={{height: '28px'}} alt="хочу"/>
                        </Link>
                        <p className="caption sg-c-4" style={{textAlign: 'center', marginTop: '5px'}}>Хочу</p>
                        <PopWish/>
                    </div>
                    {props.currentWidth >= 1000 &&
                    <Link to="/" className="sg-inline-middle">
                        <img src={"images/icon_search.png"} style={{width: '30px'}} alt="поиск"/>
                    </Link>
                    }
                    <div id="cart" style={{height: '100%'}}>
                        <Link to="/cart"
                              className="shopping access-join js-shopping-bag js-signUp sg-inline-middle filled">
                            <img src={"images/icon_cart.png"} style={{width: '30px'}} alt="корзина"/>
                            <span id="cart-item-count" className="sg-c-1 sg-bg-3"
                                  style={{display: 'inline'}}>{props.ordersCount}</span>
                        </Link>
                        <PopCart/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    return null;
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 1920
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        let documentElement = document.documentElement;
        this.setState({width: documentElement.clientWidth});
    }

    componentWillMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        //const orders = this.props.orderStore.loadTestOrdersCount();
        const orders = 1;
        return (
            <div id="header-fixed" className="sg-bg-1" style={{top: '0'}}>
                <div id="header-wrap">
                    <div id="header-nav" className="main_container sg-inline-middle" style={{flexWrap: 'nowrap'}}>
                        <div id="top-logo">
                            <Link to="/" className="navbar-brand">
                                {this.state.width>=1000 &&
                                    <img className="logo-img" style={{maxHeight: '50px'}}
                                         alt={this.props.commonStore.appName.toLowerCase()}
                                         src={"images/trythat_logo_text_1.png"}/>
                                }
                                {this.state.width<1000 &&
                                <img className="logo-img" style={{maxHeight: '50px'}}
                                     alt={this.props.commonStore.appName.toLowerCase()}
                                     src={"images/trythat_logo_text_m.png"}/>
                                }
                            </Link>
                            {/*
                        <a href="/" className="logo" tabIndex="1">
                            <img className="logo-img" style="max-height:40px;"
                                 alt="Private fencing lesson, with an introduction to the basic strategies of the sport. Learn attacks, defensive actions, and bouting with a partner. Learn what it takes to develop skills for championship level fencing."
                                 src="/images/IfOnly_logo_white.png">
                        </a>
*/}
                        </div>
                        {this.state.width >= 1000 &&
                        <MenuNew/>
                        }
                        {this.state.width < 1000 &&
                        <MenuMobile/>
                        }
                        <LoggedOutView currentUser={this.props.userStore.currentUser}
                                       currentLuminary={this.props.userStore.currentLuminary}
                                       currentWidth={this.state.width}
                        />
                        <LoggedInView currentUser={this.props.userStore.currentUser}
                                      currentLuminary={this.props.userStore.currentLuminary}
                                      orders={orders}
                                      currentWidth={this.state.width}
                                      ordersCount={this.props.commonStore.ordersCount}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('userStore', 'commonStore', 'orderStore')(Header);
