import React from 'react';
import Link from "react-router-dom/es/Link";

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
      <div className="band band-banner">
          <div className="center">
              <div className="marquee">
                  <img src={"marketplace.jpg"} alt="try that marketplace" style={{display: 'none'}} />
                  <div className="catch">
                      <p className="title-1">Поделитесь своими талантами и постройте свой бизнес с нами</p>
                      <p className="text">Все что вы делаете мы представим нашим клиентам.</p>
                      <Link to="/add" className="myaccount sg-inline-middle" id="settings">
                          <div className="allowAllUsers small primaryButton button" style={{width: '192px'}}
                               tabIndex="0">
                              <div className="title-container"><p className="title">НАЧАТЬ</p></div>
                          </div>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Banner;
