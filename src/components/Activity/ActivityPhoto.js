import React from 'react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";
import ActivityPhotoDiv from "./ActivityPhotoDiv";

@withRouter
@inject('activityStore')
class ActivityPhoto extends React.Component {
    render() {
        const activity = this.props.activity;
        return (
            <div className="left-box product-slider-box" style={{marginBottom: '40px'}}>
                <div className="pImgContainer">
                    <div className="scroll" style={{display: 'block'}}>
                        <div className="inner-container items"
                             style={{width: '100000px', left: '-714px', height: '470px'}}>
                            <React.Fragment>
                                <ActivityPhotoDiv image={activity.images[0]} visibility={"visibility: 'visible'"}/>
                                <ActivityPhotoDiv image={activity.images[0]}/>
                                <ActivityPhotoDiv image={activity.images[0]}/>
                            </React.Fragment>
                        </div>
                    </div>
                    <a className="next p-arrow disabled" id="pImages_right" tabIndex="0">
                    </a>
                </div>

                <div style={{width: '100%', position: 'absolute', bottom: '0px'}}>
                    <div className="pImgSlide" style={{margin: '0 auto', width: '14px'}}>
                        <a href="/" className="active">
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityPhoto;
