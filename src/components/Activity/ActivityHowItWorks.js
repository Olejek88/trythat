import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivityHowItWorks extends React.Component {
  render() {
    return (
        <div className="how-this-work">
            <div className="inner-sec">
                <h4 className="product_sec_title">
                    How It Works </h4>
                <table className="elements-list">
                    <tbody>
                    <tr>
                        <td>
                            <img src="activity_files/_steps_schedule-mbnp__L.jpg" alt="">
                                <p className="fo-18-n-s4">
                                    Provide Details </p>
                                <p className="fo-15-n-s4">
                                </p>
                                <div style="padding: 0 60px 0 60px;"><font
                                    style="font-family:'source-sans-pro-n4', sans-serif;">Provide your preferred dates
                                    for the experience.</font>
                                    <div><p></p>
                                    </div>
                                </div></td>
                        <td>
                            <img src="activity_files/_steps_confirm-mbnp__L.jpg" alt="">
                                <p className="fo-18-n-s4">
                                    Details Confirmed </p>
                                <p className="fo-15-n-s4">
                                </p>
                                <div style="padding: 0 60px 0 60px;"><font
                                    style="font-family:'source-sans-pro-n4', sans-serif;">The luminary will confirm the
                                    schedule or ask for alternatives.</font></div>
                                <p></p>
                        </td>
                        <td>
                            <img src="activity_files/_steps_enjoy-mbnp__L_002.jpg" alt="">
                                <p className="fo-18-n-s4">
                                    Enjoy! </p>
                                <p className="fo-15-n-s4">
                                </p>
                                <div style="padding: 0 60px 0 60px;"><font
                                    style="font-family:'source-sans-pro-n4', sans-serif;">Have a wonderful time. We look
                                    forward to coordinating your next IfOnly experience.</font></div>
                                <p></p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
  }
}

export default ActivityHowItWorks;
