import React from 'react';
import {inject} from 'mobx-react';
import Experiences from "./Experiences";
import Banner from "./Banner";

class Category extends React.Component {
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

export default inject('commonStore')(Category);
