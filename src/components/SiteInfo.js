import React from 'react';
import {inject} from "mobx-react/index";

class SiteInfo extends React.Component {
    render() {
        return (
            <div id="site_info" className="desktop sg-bg-1 site_info">
                &copy; {this.props.commonStore.appName}, 2018-2019
            </div>
        );
    }
}

export default inject('commonStore')(SiteInfo);
