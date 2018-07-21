import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivityDescription extends React.Component {
  render() {
    return (
        <div className="left-box desc-box">
            <div className="pdp-product-description sg-f-bdy">
                <h4 className="sg-f-ttl">The Experience</h4>
                <div className="product-desc body-text" style="position: relative; word-wrap: break-word;">
                    <p>Chez Panisse is a dining institution. Prior to Alice Waters
                        opening her venerated restaurant, home cooking typically involved highly
                        processed foods and fine dining required complicated French techniques.
                        Then Chez Panisse with its local sourced meats, farm-to-table produce,
                        and vibrant but simple presentations pioneered a new approach to how
                        America looked at dining. This new California cuisine would change how
                        the entire country eats. &nbsp;</p>
                    <p>&nbsp;</p>
                    <p>For your next milestone meal, visit the humble, yet groundbreaking
                        kitchen as an honored guest. Many consider this intimate table best seat
                        in the house, nearly impossible to book until now. Throughout your
                        meal, you will be immersed in a beautifully choreographed production led
                        by restaurant chef Jennifer Sherman. The menu changes nightly and is
                        designed to reflect the season and represent the best of what local
                        farmers are growing. This celebratory meal, in the heart of the buzzing
                        Chez Panisse kitchen, will be a revelatory experience that you will
                        never forget.</p>
                </div>
            </div>
            <div className="pdp-shipping-details">
            </div>
        </div>
    );
  }
}

export default ActivityDescription;
