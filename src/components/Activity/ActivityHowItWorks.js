import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivityHowItWorks extends React.Component {
  render() {
    return (
        <div className="how-this-work">
            <div className="inner-sec">
                <h4 className="product_sec_title">How It Works </h4>
                <table className="elements-list">
                    <tbody><tr>
                        <td>
                            <img src={"steps_schedule.jpg"} alt="" />
                                <p className="fo-18-n-s4">Provide Details </p>
                                <p className="fo-15-n-s4">
                                </p>
                                <div style={{padding: '0 60px 0 60px'}}>Provide your preferred dates for the experience.
                                    <div><p></p>
                                    </div>
                                </div></td>
                        <td>
                            <img src={"steps_confirm.jpg"} alt="" />
                                <p className="fo-18-n-s4">Details Confirmed </p>
                                <p className="fo-15-n-s4"></p>
                                <div style={{padding: '0 60px 0 60px'}}>The luminary will confirm the
                                    schedule or ask for alternatives.</div>
                                <p></p>
                        </td>
                        <td>
                            <img src={"steps_enjoy.jpg"} alt="" />
                                <p className="fo-18-n-s4">Enjoy! </p>
                                <p className="fo-15-n-s4">
                                </p>
                                <div style={{padding: '0 60px 0 60px'}}>
                                    Have a wonderful time. We look forward to coordinating your next IfOnly experience.</div>
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
