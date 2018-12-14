import React from 'react';
import Banner from "./Banner";
import Become from "./Become";
import Why from "./Why";
import HowItWorks from "./HowItWorks";


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
