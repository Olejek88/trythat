import React from 'react';
import {inject} from 'mobx-react';
import FollowButton from "../Components/FollowButton";

class LuminaryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="celebrityBox">
                <a className="luminary-link" href={"/#/luminary/" + this.props.luminary.id}>
                    <div className="img-box-wrapper">
                        <div className="img-box">
                            <img className="luminary-img lazyloaded" alt=""
                                 src={this.props.commonStore.apiServer + this.props.luminary.user.image.path}/>
                        </div>
                    </div>
                </a>

                <a className="luminary-link" href={"/#/luminary/" + this.props.luminary.id}>
                    <div className="celeb-info">
                        <div className="celeb-info-content">
                            <div className="name">
                                <p>{this.props.luminary.user.firstName + " " + this.props.luminary.user.lastName}</p>
                            </div>
                            <div className="charity">
                                <p style={{color: '#555555'}}>{this.props.luminary.shortDescription}</p>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="js-follow-con " style={{textAlign: 'center'}}>
                    <FollowButton activity={this.state.luminary}/>
                </div>
            </div>
        );
    }
}

export default inject('commonStore')(LuminaryItem);
