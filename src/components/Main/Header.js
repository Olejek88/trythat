import React from 'react';
import Logo from "./Logo";

const Header = ({ appName, token }) => {
  if (token) {
    return null;
  }
    const styles = {
        margin: '0 10px',
        order: '2'
    };

    return (
      <div id="header" className="discovery">
          <div id="header-fixed" className="sg-bg-1" style={{top: '0'}}>
              <div id="header-wrap">
                  <div id="header-nav" className="sg-inline-middle" dir="ltr">
                      <Logo />
                      <div id="header-menu" className="sg-inline-flex-grow" style={styles}>
                      </div>

                      <div id="buttons-nav" className=" sg-inline-middle" style={{order: '3'}}>
                          <a href="#"
                             className="navButton button js-link js-prevent-double-click sell-ifonly whiteButton button "
                             tabIndex="2010">
                              <div className="title-container"><p className="title">SELL ON TRYTHAT</p></div>
                          </a><a href="javascript:void(1);" className="navButton button js-login" id="logInBtn"
                                 tabIndex="2025">
                          <div className="title-container"><p className="title">Log in</p></div>
                      </a>
                          <a href="javascript:void(1);"
                             className="access-join allowAllUsers js-signUp primaryButton button" id="signUpBtn"
                             tabIndex="2030">
                              <div className="title-container"><p className="title">Sign Up</p></div>
                          </a>
                      </div>
                      <div id="top-welcome" className="search_result_container sg-f-bdy-s sg-inline-middle"
                           style={{flexWrap: 'nowrap', order: '4'}}>
                          <div className="top-search ">
                          </div>
                          <a href="javascript:void(1);"
                             className="shopping access-join js-shopping-bag js-signUp sg-inline-middle"
                             tabIndex="2060">
                              <img src="/public/icon_cart.png" alt="go to cart"/>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Header;
