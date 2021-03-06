import React from 'react';
import {Helmet} from "react-helmet";

class ActivityDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            activity: {
                title: "loading",
                description: "loading"
            }
        };
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({activity: nextProps.activity});
    }

    render() {
        return (
            <div className="left-box desc-box">
                <Helmet>
                    <title>{this.state.activity.title}</title>
                    <description>{this.state.activity.description}</description>
                </Helmet>
                <div className="pdp-product-description sg-f-bdy">
                    <h4 className="sg-f-ttl">{this.state.activity.title}</h4>
                    <div className="product-desc body-text" style={{position: 'relative', wordWrap: 'break-word'}}>
                        <p>{this.state.activity.description}</p>
                    </div>
                </div>
                <div className="pdp-shipping-details">
                </div>
            </div>
        );
    }
}

export default ActivityDescription;
