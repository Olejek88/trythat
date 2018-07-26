import React from 'react';
import { inject, observer } from 'mobx-react';
import SiteMenu from "./SiteMenu";
import SiteInfo from "./SiteInfo";
//import FooterCategories from "./FooterCategories";

const FooterView = props => {
    return (
        <React.Fragment>
            <SiteMenu/>
            <SiteInfo/>
        </React.Fragment>
    );
};

@inject('userStore', 'commonStore')
@observer
class Footer extends React.Component {
  render() {
    return (
        <div className="main_container">
            <FooterView/>
        </div>
    );
  }
}

export default Footer;
