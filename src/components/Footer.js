import React from 'react';
import { inject, observer } from 'mobx-react';
import SiteMenu from "./SiteMenu";
import SiteInfo from "./SiteInfo";
import FooterCategories from "./FooterCategories";

const FooterView = props => {
    return (
        <div id="header-fixed" className="sg-bg-1" style={{top: '0', float: 'right'}}>
            <div id="buttons-nav" className=" sg-inline-middle" style={{order: '3'}}>
                <Row>
                    <FooterCategories />
                </Row>
                <Row>
                    <SiteMenu />
                </Row>
                <Row>
                    <SiteInfo />
                </Row>
            </div>
        </div>
    );
};

@inject('userStore', 'commonStore')
@observer
class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar sg-bg-1">
        <div className="main_container">
          <FooterView />
        </div>
      </nav>
    );
  }
}

export default Footer;
