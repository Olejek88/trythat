import React from 'react';

const Logo = ({appName, token}) => {
    if (token) {
        return null;
    }

    return (
        <div id="top-logo">
            <a href="/" className="logo" tabIndex="1">
                <img className="logo-img" style={{maxHeight: '40px'}} alt="inaccessible experiences"
                     src="/images/logo_white.png"/>
            </a>
        </div>
    );
};

export default Logo;
