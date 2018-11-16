import React from 'react';
import {observer, inject} from 'mobx-react';
import ExperienceMini from "../Experience/ExperienceMini";
import {action} from "mobx/lib/mobx";
import luminaryStore from "../../stores/luminaryStore";

@inject('activityStore','commonStore', 'followListStore', 'customerStore', 'userStore')
@observer
class ActivityAboutLuminary extends React.Component {
    constructor() {
        super();

        this.state = {
            updated: false,
            activity: null,
            luminary: luminaryStore.luminary,
            activity_from_luminary: [],
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
        this.setState({activity: this.props.activity});
    }

    componentDidUpdate() {
        if (this.props.activity && !this.state.updated) {
            let self = this;
            const luminary = this.props.activity.luminary;
            let predicate = {
                filter: 'luminary',
                id: luminary.id
            };
            this.props.activityStore.setPredicate(predicate);

            this.props.activityStore.loadActivities().then(action((activities) => {
                activities.forEach(function (activity) {
                    console.log(activity);
                    self.state.activity_from_luminary.push(activity);
                });
            })).catch(action(err => {
                console.log("err=" + err);
                throw err;
            }));

            if (this.props.activity.luminary) {
                console.log(this.props.activity.luminary);
                this.setState({luminary: this.props.activity.luminary});
                const customer = this.props.userStore.currentCustomer;
                this.props.followListStore.isFollow(customer.id, this.props.activity.luminary.id)
                    .then(action((follow) => {
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
                    }))
                    .catch(action(err => {
                        console.log("err=" + err);
                        throw err;
                    }));
            }
            self.setState({updated: true});
        }
    }


    render() {
        return (
            <div className="luminary-section sg-bd-2 sg-bg-2" data-html="">
                <div className="cb" data-celebid="36">
                    <div className="cb-title"><h4 className=" sg-f-ttl ">Об организаторе</h4></div>
                    <div className="cb-box">
                        <a href="/" style={{display: 'inline-block'}}>
                            <div className="img-box-wrapper">
                                <div className="img-box">
                                    <img className="luminary-img" src={this.props.commonStore.apiServer+this.state.luminary.user.image.path}
                                         alt={this.state.luminary.user.firstName + " " + this.state.luminary.user.lastName}/>
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
                            className="sg-f-ttl">{this.state.luminary.user.firstName} {this.state.luminary.user.lastName}</h4></a>
                        <p className="org">{this.state.luminary.description}</p>
                        <div className="desc body-text sg-f-bdy "><p>{this.state.luminary.fullDescription}</p>
                        </div>

                    </div>
                    <div className="cb-shop">
                        <p className="title  sg-f-ttl" style={{marginBottom: '28px'}}>Больше предложений</p>
                        <div className="view-all">
                            <a className="sg-f-bdy sg-c-1 sg-text-transform sg-inline-middle" href="/">смотреть все</a>
                        </div>
                        <div className="list mini_product_list">
                            {this.state.activity_from_luminary[0] && <ExperienceMini activity={this.state.activity_from_luminary[0]}/>}
                            {this.state.activity_from_luminary[1] && <ExperienceMini activity={this.state.activity_from_luminary[1]}/>}
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
