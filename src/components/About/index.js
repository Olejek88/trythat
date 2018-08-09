import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import Banner from "./Banner";
import Description from "./Description";


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
                    <Description/>
                </div>
            </div>
        );
    }
}

export default Activity;
