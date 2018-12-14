import React from 'react';
import {inject} from "mobx-react/index";

class FollowButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            followClass: "follow following  wide  button primaryButton",
            followButtonText: 'Подписаться',
            checkStyle: 'greenCheck display_none',
            following: undefined
        };

        this.onFollowed = () => {
            // сначала меняем визуально, потом запускаем асинхронный setstate
            if (this.state.following[0] && this.state.following[0].id > 0) {
                this.setState({followClass: 'follow following  wide  button primaryButton'});
                this.setState({followButtonText: 'Подписаться'});
                this.setState({checkStyle: 'greenCheck display_none'});
                this.props.followListStore.unFollow(this.state.following[0].id).then(() => {
                    this.setState({following: []});
                });
            }
            else {
                this.setState({followClass: 'follow following  wide button secondaryButton js-following'});
                this.setState({followButtonText: 'Подписаны'});
                this.setState({checkStyle: 'greenCheck display_initial'});
                let follow = {
                    customer_id: this.props.userStore.currentCustomer.id,
                    luminary_id: this.props.luminary.id
                };
                this.props.followListStore.follow(follow);
                this.setState({following: follow});
            }
        };
    }

    componentWillMount() {
        let self = this;
        if (this.props.luminary) {
            const customer = this.props.userStore.currentCustomer;
            this.props.followListStore.isFollow(customer, this.props.luminary).then((follow) => {
                self.setState({following: follow});
                if (follow.length === 0) {
                    self.setState({followClass: "follow following  wide  button primaryButton"});
                    self.setState({followButtonText: 'Подписаться'});
                    self.setState({checkStyle: 'greenCheck display_none'});
                }
                else {
                    self.setState({followClass: 'follow following  wide button secondaryButton js-following'});
                    self.setState({followButtonText: 'Подписаны'});
                    self.setState({checkStyle: 'greenCheck display_initial'});
                }
            });
        }
    }

    render() {
        return (
            //{/*, float: 'right'*/}
            <div data-id="36" style={{margin: '10px 0 0 2px'}}
                 className={this.state.followClass}>
                <div className="title-container"><p className="title">
                    <img src={"images/icon_checkmark_green.png"} className={this.props.checkStyle}
                         alt={""}/>
                    <span className="title following-text sg-text-transform"
                          onClick={this.onFollowed}>{this.state.followButtonText}</span></p></div>
            </div>
        );
    }
}

export default inject('activityStore', 'followListStore', 'customerStore', 'userStore')(FollowButton);