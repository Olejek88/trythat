import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import ActivityListItem from "./ActivityListItem";

@withRouter
@inject('userStore','activityStore')
export default class MyActivities extends React.Component {
    render() {
        let predicate = {
            filter: 'customer',
            id: this.props.userStore.currentCustomer._id,
            limit: 10
        };
        this.props.activityStore.setPredicate(predicate);

        let activities = this.props.activityStore.loadActivities();
        let activitiesRows = [];
        activities.forEach(function (activity, i) {
            activitiesRows.push(<ActivityListItem activity={activity} key={i}/>);
        });

        return (
            <div className="main" style={{
                minHeight: '100%', width: '100%', position: 'relative', margin: '0 auto',
                overflow: 'hidden', paddingTop: '80px'
            }}>
                <div id="vendor-admin" className="custom-form vendor-page">
                    <div className="page-left-col" style={{width: '15%'}}>
                        <div className="menu-sec" style={{height: '650px'}}>
                            <div className="menu-list main-menu first-level active">
                                <ul id="vendor-menu" className="">
                                    <li className="menu-li header sg-f-dspl-s">Мой аккаунт</li>
                                    <li className="menu-li account sg-c-2">
                                        <a href= {"/activities/my"}>Мои предложения</a>
                                    </li>
                                    <li className="menu-li sg-c-2">
                                        <ul className="sub-menu">
                                            <li className="menu-li orders purchases sg-c-2">
                                                <a href={"/activities/my/current"}>Текущие</a>
                                            </li>
                                            <li className="menu-li auctions sg-c-2">
                                                <a href={"/activities/my/closed"}>Завершенные</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-li sg-c-2">
                                        <a href={"/activities/favorite"} className="expandable js-expandable sg-inline-middle">Любимые</a>
                                    </li>
                                    <li className="menu-li sg-c-2">
                                        <a href={"/wish_list"}>Отслеживаемые</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="page-right-col" style={{width: '85%', marginTop: '0px', marginLeft: '15%'}}>
                        <div className="view-container">
                            <div className="view-frame">
                                <div className="communication_div desktop">
                                    <div className="top_div">
                                        <div className="conversation_title sg-f-dspl-m">Предложения</div>
                                        <div style={{clear: 'both'}}>
                                        </div>
                                    </div>
                                    <div className="search_div">
                                        <input className="vendor_search_text search_box sg-bd-8 ng-pristine ng-valid ng-touched"
                                               name="search" aria-label="Искать" placeholder="Искать"
                                               style={{paddingLeft:'50px',width:'100%'}} type="search" />
                                    </div>
                                    <div className="conversation_div">
                                        {activitiesRows}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
