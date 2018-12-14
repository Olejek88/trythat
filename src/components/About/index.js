import React from 'react';
import Banner from "./Banner";
import Description from "./Description";

class Activity extends React.Component {
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
