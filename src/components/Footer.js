import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

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
          <Link to="/" className="navbar-brand">
            {this.props.commonStore.appName.toLowerCase()}
          </Link>

          <FooterView />
        </div>
      </nav>
    );
  }
}

export default Footer;
