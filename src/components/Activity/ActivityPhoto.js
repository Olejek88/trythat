import React from 'react';
import {inject} from "mobx-react/index";
import ActivityPhotoDiv from "./ActivityPhotoDiv";

class ActivityPhoto extends React.Component {
    constructor() {
        super();
        this.state = {
            activity: null,
            photoList: []
        };
        this.photoList = [];
    }

    componentDidMount() {
        this.setState({activity: this.props.activity});
        this.loadData(this.props.activity);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({activity: nextProps.activity});
        this.loadData(nextProps.activity);
    }

    loadData(activity) {
        if (activity) {
            let self = this;
            self.setState({photoList: []});
            self.photoList = [];
            activity.activityImages.forEach(function (image, i) {
                self.photoList.push(<ActivityPhotoDiv image={image.image} key={Math.random()}
                                                      visibility={"visibility: 'visible'"}/>);
            });
            self.setState({photoList: self.photoList});
        }
    }

    render() {
        return (
            <div className="left-box product-slider-box" style={{marginBottom: '40px'}}>
                <div className="pImgContainer">
                    <div className="scroll" style={{display: 'block'}}>
                        <div className="inner-container items"
                             style={{width: '100000px', height: '470px'}}>
                            {
                                this.state.photoList
                            }
                        </div>
                    </div>
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

export default inject('activityStore')(ActivityPhoto);
