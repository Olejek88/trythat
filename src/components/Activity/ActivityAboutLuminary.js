import React from 'react';
import {observer} from 'mobx-react';
import ExperienceMini from "../Experience/ExperienceMini";

@observer
class ActivityAboutLuminary extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        //followListStore.follow(this.props.luminary, this.props.userStore.currentUser);
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
                                 className="follow following wide primaryButton button" tabIndex="0">
                                <div className="title-container"><p className="title">
                                    <img className="greenCheck" src={"images/icon_checkmark_green.png"} style={{display: 'none'}} alt={""}/>
                                    <span className="title following-text sg-text-transform"
                                          onClick={this.onClick.bind(this)}>Подписаться</span></p></div>
                            </div>
                        </div>
                    </div>
                    <div className="cb-desc ">
                        <a className="name" href="/" data-celebid="36"><h4 className="sg-f-ttl">{luminary.user.firstName} {luminary.user.lastName}</h4></a>
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
