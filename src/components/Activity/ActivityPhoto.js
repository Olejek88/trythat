import React from 'react';
import {inject} from "mobx-react/index";
import ActivityPhotoDiv from "./ActivityPhotoDiv";

class ActivityPhoto extends React.Component {
    constructor(props) {
        super(props);
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
                    <div className="item" style={{display: 'block'}}>
                            {
                                this.state.photoList[0]
                            }
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('activityStore')(ActivityPhoto);
