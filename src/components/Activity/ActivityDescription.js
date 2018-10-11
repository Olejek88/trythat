import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivityDescription extends React.Component {
  render() {
    return (
        <div className="left-box desc-box">
            <div className="pdp-product-description sg-f-bdy">
                <h4 className="sg-f-ttl">{this.props.activity.title}</h4>
                <div className="product-desc body-text" style={{position: 'relative', wordWrap: 'break-word'}}>
                    <p>{this.props.activity.description}</p>
                </div>
            </div>
            <div className="pdp-shipping-details">
            </div>
        </div>
    );
  }
}

export default ActivityDescription;
