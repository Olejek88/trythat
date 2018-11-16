import React from 'react';
import {observer} from 'mobx-react';

@observer
class ActivityDescription extends React.Component {
    constructor() {
        super();
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

    componentDidUpdate() {
        if (this.props.activity && !this.state.updated) {
            this.setState({activity: this.props.activity});
            this.setState ({updated: true});
        }
    }

    render() {
        return (
            <div className="left-box desc-box">
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
