import React from 'react';
import SiteMenu from "./SiteMenu";
import SiteInfo from "./SiteInfo";

const FooterView = () => {
    return (
        <React.Fragment>
            <SiteMenu/>
            <SiteInfo/>
        </React.Fragment>
    );
};

class Footer extends React.Component {
  render() {
    return (
        <div className="main_container" style={{float: 'bottom'}}>
            <FooterView/>
        </div>
    );
  }
}

export default Footer;
