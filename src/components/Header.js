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
            <div id="buttons-nav" className=" sg-inline-middle" style={{order: '3'}}>
                <Link
                    to={`/@${props.currentUser.username}`}
                    className="nav-link">
                    <img src={props.currentUser.image} className="user-pic" alt="" />
                    {props.currentUser.username}
                </Link>
                <Link to="/" className="navButton button" id="sellBtn">
                    <div className="title-container"><p className="title">Продать на TryThat</p></div>
                </Link>
                <Link to="/settings" className="access-join allowAllUsers js-signUp primaryButton button" id="signUpBtn">
                    <div className="title-container"><p className="title">Профиль</p></div>
                </Link>
                <Link to="/logout" className="navButton button js-login" id="logInBtn">
                    <div className="title-container"><p className="title">Выйти</p></div>
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
      <nav className="navbar sg-bg-1">
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
