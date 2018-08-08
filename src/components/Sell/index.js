import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import Banner from "./Banner";
import Become from "./Become";
import Why from "./Why";
import HowItWorks from "./HowItWorks";


@observer
@withRouter
class Activity extends React.Component {
    componentDidMount() {
        //this.props.commonStore.loadTags();
    }

    render() {
        return (
            <div id="wrapper">
                <div id="content">
                    <Banner/>
                    <Become/>
                    <Why/>
                    <HowItWorks/>
                </div>
            </div>
        );
    }
}

export default Activity;
