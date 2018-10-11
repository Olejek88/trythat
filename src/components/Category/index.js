import React from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Experiences from "./Experiences";
import Banner from "./Banner";

@inject('commonStore')
@withRouter
@observer
export default class Category extends React.Component {
    componentDidMount() {
        this.props.commonStore.loadTags();
    }

    render() {
        return (
            <div id="wrapper">
                <div id="content">
                    <Banner/>
                    <Experiences/>
                </div>
            </div>
        );
    }
}
