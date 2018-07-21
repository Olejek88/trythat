import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivityPhoto extends React.Component {
  render() {
    return (
        <div className="left-box product-slider-box" style="margin-bottom: 40px;">
            <div className="pImgContainer">
                <!-- "previous slide" button -->
                <a className="prev p-arrow disabled" id="pImages_left" tabIndex="0">
                </a>
                <div className="scrollable-placeholder" style="display: none;">
                    <img src="ex1.jpg" alt="Experience" style="max-width: 714px; width: 100%; display: block; margin: 0 auto;"/>
                </div>
                <div className="scroll" style="display: block;">
                    <div className="inner-container items" style="width: 100000px; left: -714px; height: 470px;">
                        <div className="imgDiv cloned" style="">
                            <img data-link="example_experience.jpg" src="ex2.jpg"
                                title="Example Experience" alt="Example Experience"
                                style="max-width: 714px; width: 100%; height: 100%; display: block; margin: 0 auto;" />
                        </div>
                        <div className="imgDiv" style="position: relative; visibility: visible; margin-top: 0px;">
                            <img data-link="example_experience.jpg" src="ex3.jpg"
                                 title="Example Experience" alt="Example Experience"
                                 style="max-width: 714px; width: 100%; height: 100%; display: block; margin: 0 auto;" />
                        </div>
                        <div className="imgDiv cloned"
                             style="position: relative; visibility: visible; margin-top: 0px;">
                            <img data-link="example_experience.jpg" src="ex4.jpg"
                                 title="Example Experience" alt="Example Experience"
                                 style="max-width: 714px; width: 100%; height: 100%; display: block; margin: 0 auto;" />
                        </div>
                    </div>
                </div>
                <a className="next p-arrow disabled" id="pImages_right" tabIndex="0">
                </a>
            </div>

            <div style="width: 100%; position: absolute; bottom: 0px;">
                <!-- the tabs -->
                <div className="pImgSlide" style="margin: 0 auto; width: 14px;">
                    <a href="#" className="active">
                    </a>
                </div>
            </div>
        </div>
  );
  }
}

export default ActivityPhoto;
