import React from 'react';
import {observer, inject} from 'mobx-react';
import ExperienceMini from "../Experience/ExperienceMini";

@inject('activityStore', 'followListStore', 'customerStore', 'userStore')
@observer
class ActivityAboutLuminary extends React.Component {
    constructor() {
        super();

        this.state = {
            followClass: "follow following  wide  button primaryButton",
            followButtonText: 'Подписаться',
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
            const customer = this.props.customerStore.getCustomer();
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
        let activity_from_luminary = [];
        let predicate = {
            filter: 'luminary',
            id: luminary._id
        };
        this.props.activityStore.setPredicate(predicate);
        const activities = this.props.activityStore.loadActivities();
        activities.forEach(function (activity) {
            activity_from_luminary.push(activity);
        });

        return (
            <div className="luminary-section sg-bd-2 sg-bg-2" data-html="">
                <div className="cb" data-celebid="36">
                    <div className="cb-title"><h4 className=" sg-f-ttl ">Об организаторе</h4></div>
                    <div className="cb-box">
                        <a href="/" style={{display: 'inline-block'}}>
                            <div className="img-box-wrapper">
                                <div className="img-box">
                                    <img className="luminary-img" src={luminary.user.image.path}
                                         alt={luminary.user.firstName + " " + luminary.user.lastName}/>
                                </div>
                            </div>
                        </a>
                        <div className="js-follow-con" style={{width: '174px', textAlign: 'center'}}>
                            <div data-id="36" style={{margin: '10px 0 0 2px'}}
                                 className={this.state.followClass} tabIndex="0">
                                <div className="title-container"><p className="title">
                                    <img src={"images/icon_checkmark_green.png"} className={this.props.checkStyle}
                                         alt={""}/>
                                    <span className="title following-text sg-text-transform"
                                          onClick={this.onFollowed}>{this.state.followButtonText}</span></p></div>
                            </div>
                        </div>
                    </div>
                    <div className="cb-desc ">
                        <a className="name" href="/" data-celebid="36"><h4
                            className="sg-f-ttl">{luminary.user.firstName} {luminary.user.lastName}</h4></a>
                        <p className="org">{luminary.description}</p>
                        <div className="desc body-text sg-f-bdy "><p>{luminary.fullDescription}</p>
                        </div>

                    </div>
                    <div className="cb-shop">
                        <p className="title  sg-f-ttl" style={{marginBottom: '28px'}}>Больше предложений</p>
                        <div className="view-all">
                            <a className="sg-f-bdy sg-c-1 sg-text-transform sg-inline-middle" href="/">смотреть все</a>
                        </div>
                        <div className="list mini_product_list">
                            {activity_from_luminary[0] && <ExperienceMini activity={activity_from_luminary[0]}/>}
                            {activity_from_luminary[1] && <ExperienceMini activity={activity_from_luminary[1]}/>}
                        </div>
                        <a href="/">
                            <div className="custom-exp sg-bg-1" style={{textAlign: 'center'}}>
                                <p className="body-text sg-f-bdy ">Запросить уникальное предложение</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityAboutLuminary;
