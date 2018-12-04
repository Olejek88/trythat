import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import MyMenu from "./MyMenu";
import FollowListItem from "./FollowListItem";

@inject('userStore', 'followListStore')
@withRouter
export default class MyFollows extends React.Component {
    constructor() {
        super();
        this.state = {
            followsRows: [],
            updated: false
        };
        this.followsRows = [];
    }

    componentWillMount() {
        this.fillList();
    }

    fillList() {
        let self = this;
        let count = 1;
        self.followsRows = [];

        this.props.followListStore.loadFollowList(this.props.userStore.currentCustomer).then((followList) => {
                followList.forEach(function (follow) {
                    self.followsRows.push(<FollowListItem luminary={follow.luminary} key={count}/>);
                    count++;
                });

                this.setState({followRows: this.followsRows}, () => {
                    this.setState({updated: true});
                });
            });
    }

    render() {
        return (
            <div className="main" style={{
                minHeight: '100%', width: '100%', position: 'relative', margin: '0 auto',
                overflow: 'hidden', paddingTop: '80px'
            }}>
                <div id="vendor-admin" className="custom-form vendor-page">
                    <div className="page-left-col" style={{width: '15%'}}>
                        <MyMenu/>
                    </div>
                    <div className="page-right-col" style={{width: '85%', marginTop: '0px', marginLeft: '15%'}}>
                        <div className="view-container">
                            <div className="view-frame">
                                <div id="main-detail">
                                    <div className="celeb-band celeb-bgcolor">
                                    </div>
                                    <div id="account-content">
                                        <div style={{borderBottom: '1px solid #c4c4c4', width: '730px'}}>
                                            <h2 style={{padding: '17px 0'}}>Отслеживаемые</h2>
                                        </div>
                                        <ul id="follows">
                                            {this.state.updated && this.followsRows}
                                        </ul>
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
