import React from 'react';
import { observer } from 'mobx-react';

@observer
class SiteInfo extends React.Component {
  render() {
    return (
        <div id="site_info" className="desktop responsive sg-bg-1">
            &copy; {this.props.commonStore.appName.toLowerCase()}, 2018-2019
        </div>
    );
  }
}

export default SiteInfo;
