import React from 'react';
import {inject} from "mobx-react/index";

@inject('followListStore','userStore','customerStore')
class FollowListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            followClass: "follow following  wide  button primaryButton",
            followButtonText: 'Подписан',
            checkStyle: 'greenCheck display_none',
            following: false
        };

        this.onFollowed = () => {
            // сначала меняем визуально, потом запускаем асинхронный setstate
            if (!this.state.following) {
                this.setState({followClass: 'follow following  wide  button primaryButton'});
                this.setState({followButtonText: 'Подписаться'});
                this.setState({checkStyle: 'greenCheck display_none'});
                this.props.followListStore.follow(this.props.luminary, this.props.userStore.currentUser);
            }
            else {
                this.setState({followClass: 'follow following  wide button secondaryButton js-following'});
                this.setState({followButtonText: 'Подписаны'});
                this.setState({checkStyle: 'greenCheck display_initial'});
                this.props.followListStore.follow(this.props.luminary, this.props.userStore.currentUser);
            }
            this.setState({following: !this.state.following});
            console.log(this.state.followClass);
        };
    }
    componentDidMount() {
        if (this.props.luminary) {
            const customer = this.props.userStore.currentCustomer;
            const follow = this.props.followListStore.isFollow(customer._id, this.props.luminary._id);
            this.setState({following: follow});
            if (follow) {
                this.setState({followClass: "follow following  wide  button primaryButton"});
                this.setState({followButtonText: 'Подписаться'});
                this.setState({checkStyle: 'greenCheck display_none'});
            }
            else {
                this.setState({followClass: 'follow following  wide button secondaryButton js-following'});
                this.setState({followButtonText: 'Подписаны'});
                this.setState({checkStyle: 'greenCheck display_initial'});
            }
        }
    }

    render() {
        const luminary = this.props.luminary;
        let luminary_image = luminary.user.image.path;
        let luminary_name = luminary.user.firstName + " " + luminary.user.lastName;
        let luminary_link = "/activity/luminary/" + luminary._id;
        let luminary_who = luminary.description;

        return (
            <React.Fragment>
                <li className="celeb-1479">
                    <div className="image"><a href={luminary_link}>
                        <img src={luminary_image} alt={luminary_name}/>
                    </a></div>
                    <div className="desc">
                        <p className="cname">{luminary_who}</p>
                        <p className="pname"><a href={luminary_link}>{luminary_name}</a></p>
                    </div>
                    <div className="buttons">
                        <div className="js-follow-con" style={{width: '174px', textAlign: 'center'}}>
                            <div data-id="36" style={{margin: '10px 0 0 2px'}}
                                 className={this.state.followClass} tabIndex="0">
                                <div className="title-container"><p className="title">
                                    <img src={"images/icon_checkmark_green.png"} className={this.props.checkStyle} alt={""}/>
                                    <span className="title following-text sg-text-transform"
                                          onClick={this.onFollowed}>{this.state.followButtonText}</span></p></div>
                            </div>
                        </div>
                    </div>
                    <div className="cover">
                    </div>
                </li>
            </React.Fragment>
        );
    }
}

export default FollowListItem;
