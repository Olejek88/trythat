import React from 'react';
import {withRouter} from "react-router-dom";
import Banner from "./Banner";
import Become from "./Become";
import Why from "./Why";
import HowItWorks from "./HowItWorks";


@withRouter
class Activity extends React.Component {
    componentDidMount() {
        //this.props.commonStore.loadTags();
    }

    render() {
        return (
            <div id="wrapper">
                <div id="content">
                    <div id="main" className=" full  ">
                        <div className="custom-form " id="vendorSignUp">
                            <form id="vendorSignUpForm" autoComplete="off" method="POST">
                                <div className="band signup-full" style="position: relative; width: 100%;">
                                    <div className="background-con">
                                        <img src={"/images/marketplace.jpg"} alt="Try That"/>
                                    </div>
                                    <div className="dark-img-overlay">
                                    </div>
                                    <div className="signup-top center">
                                        <h3>Apply to be a luminary on IfOnly</h3>
                                        <div className="sub-header">
                                            <p className="desc">
                                                We are always looking for talented individuals to add to our platform.
                                                Create your profile and customize your experiences to become an
                                                approved IfOnly Luminary. </p>
                                        </div>
                                        <div className="sub-header">
                                            <p><a className="why" href="/marketplace?scrollTo=whyJoin">WHY JOIN
                                                IFONLY?</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="landingPage center custom-form" questionid="landing">
                                    <div className="sec-header" style="margin-bottom: 10px;">If this is not
                                        your work email, enter it here
                                    </div>
                                    <div className="f-row js-err-con"
                                         style="margin-bottom: 24px;">
                                        <input id="email" aria-label="Email"
                                               placeholder="Email"
                                               className="longBox"
                                               aria-required="true"
                                               required="required" type="text"
                                               value="olejek8@yandex.ru"
                                               name="User[emailAddress]"/></div>
                                    <div style="clear: both;"></div>
                                    <div className="js-err-con">
                                        <div
                                            className="login-btn primaryButton button localizedLayout"
                                            questionid="landing" tabIndex="0">
                                            <div className="title-container"><p
                                                className="title">BEGIN</p></div>
                                        </div>
                                    </div>
                                </div>
                    </form>
                </div>
            </div></div>

                );
    }
}

export default Activity;
