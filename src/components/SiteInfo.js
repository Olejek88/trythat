import React from 'react';
import { observer } from 'mobx-react';
import {inject} from "mobx-react/index";

@inject('commonStore')
@observer
class SiteInfo extends React.Component {
  render() {
    return (
        <div id="site_info" className="desktop sg-bg-1 site_info">
            &copy; {this.props.commonStore.appName.toLowerCase()}, 2018-2019
        </div>
    );
  }
}

export default SiteInfo;
