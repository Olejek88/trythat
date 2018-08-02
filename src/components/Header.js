import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
            <div id="header-fixed" className="sg-bg-1" style={{top: '0', float: 'right'}}>
                        <div id="buttons-nav" className=" sg-inline-middle" style={{order: '3'}}>
                            <Link to="/" className="navButton button" id="sellBtn">
                                <div className="title-container"><p className="title">Продать на TryThat</p></div>
                            </Link>
                            <Link to="/register" className="access-join allowAllUsers js-signUp primaryButton button" id="signUpBtn">
                                <div className="title-container"><p className="title">Регистрация</p></div>
                            </Link>
                            <Link to="/login" className="navButton button js-login" id="logInBtn">
                                <div className="title-container"><p className="title">Войти</p></div>
                            </Link>
                            <Link to="javascript:void(1);" className="sg-inline-middle">
                                <img src={"icon_search.png"} style={{width:'30px'}} alt="поиск"/>
                            </Link>
                            <Link to="javascript:void(1);" className="shopping access-join js-shopping-bag js-signUp sg-inline-middle">
                                <img src={"icon_cart.png"} style={{width:'30px'}} alt="корзина"/>
                            </Link>
                        </div>
            </div>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
        <div id="header-fixed" className="sg-bg-1" style={{top: '0', float: 'right'}}>
            <div id="buttons-nav" className="sg-f-bdy-s sg-inline-middle" style={{order: '3'}}>
{/*
                <Link
                    to={`/@${props.currentUser.username}`}
                    className="nav-link">
                    <img src={props.currentUser.image} className="user-pic" alt="" />
                    {props.currentUser.username}
                </Link>
*/}
                <Link to="/" className="navButton button" id="sellBtn">
                    <div className="title-container"><p className="title">Продать на TryThat</p></div>
                </Link>
{/*
                <Link to="/settings" className="access-join allowAllUsers js-signUp primaryButton button" id="signUpBtn">
                    <div className="title-container"><p className="title">Профиль</p></div>
                </Link>
                <Link to="/logout" className="navButton button js-login" id="logInBtn">
                    <div className="title-container"><p className="title">Выйти</p></div>
                </Link>
                */}
                <Link to="/settings" className="myaccount sg-inline-middle" id="settings">
                    <div id="profile_settings" className={"profile_icon"}>
                        <img src={"icon_peep_fff.png"} style={{width: '28px'}} alt={"none"}/>
                        <p className="caption sg-c-4" style={{textAlign: 'center'}}>Вы</p>
                        <div className="bubble notification unread txt-ovr-4 bg-ovr-3" style={{visibility: 'hidden'}}>
                        </div>
                        <div id="acct-popup-wrapper" className="io-popup-warpper">
                            <div id="acct-popup-box" className="sg-bg-3 sg-bd-3">
                                <div id="acct-popup-carrot" className="io-arrow-popup-carrot">
                                </div>
                                <ul id="acct-popup" style={{paddingLeft:0}}>
                                    <a href="/settings" tabIndex="2401">
                                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3">
                                            <p>Профиль</p>
                                        </li>
                                    </a>
                                    <a href="/purchases" tabIndex="2404">
                                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3"><p>Заказы</p></li>
                                    </a>
                                    <a href="/wishlist" tabIndex="2406">
                                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3"><p>Список желаний</p></li>
                                    </a>
                                    <a href="/follows" tabIndex="2407">
                                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3"><p>Предпочтения</p></li>
                                    </a>
                                    <a href="/communication" tabIndex="2408">
                                        <li className="child sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3"><p>Общение<span
                                            className="bubble notification unread sg-c-3 bg-ovr-4"
                                            style={{position: 'relative', margin: '0px 3px', visibility: 'hidden'}}>
                                </span></p></li>
                                    </a>
                                    <li style={{borderBottom: '1px solid #e1e1e1', paddingBottom: '5px'}}>
                                    </li>
                                    <a href="javascript:logout();" tabIndex="2409">
                                        <li className="child  sg-inline-middle sg-f-bdy sg-c-1 sg-hover-3"><p>Выйти</p></li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="javascript:void(1);" className="sg-inline-middle">
                    <img src={"icon_search.png"} style={{width:'30px'}} alt="поиск"/>
                </Link>
                <Link to="javascript:void(1);" className="shopping access-join js-shopping-bag js-signUp sg-inline-middle">
                    <img src={"icon_cart.png"} style={{width:'30px'}} alt="корзина"/>
                </Link>
            </div>
        </div>
    );
  }
  return null;
};

@inject('userStore', 'commonStore')
@observer
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar sg-bg-1" id={"top-welcome"}>
        <div className="main_container">
          <Link to="/" className="navbar-brand">
            {this.props.commonStore.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.userStore.currentUser} />

          <LoggedInView currentUser={this.props.userStore.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
