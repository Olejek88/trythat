import React from 'react';
import {inject} from 'mobx-react';
import MyMenu from "./MyMenu";
import MailListItem from "./MailListItem";
import EmptyMailBox from "./EmptyMailBox";
import Redirect from "react-router-dom/es/Redirect";
import {action} from "mobx/lib/mobx";

class Conversation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            mails: [],
            updated: false,
            login: false,
            header: 'Входящие'
        };
        this.mails = [];
        this.empty = <EmptyMailBox/>;
        this.inputChange = this.inputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.userStore.currentUser) {
            this.setState({login: true});
            this.fillList(nextProps);
        }
    }

    componentWillMount() {
        if (this.props.userStore.currentUser) {
            this.setState({login: true});
            this.fillList(null);
        }
    }

    inputChange(event) {
        let self = this;
        self.state.mails = [];
        this.setState({
            search: event.target.value
        });
        let predicate = {
            filter: 'search',
            id: this.state.search,
            limit: 10
        };
        this.props.mailStore.setPredicate(predicate);
        this.props.mailStore.loadMails().then(action(() => {
            this.props.mailStore.mailRegistry.forEach(function (mail, i) {
                self.state.mails.push(<MailListItem mail={mail} key={i}/>);
            });
        }));
        this.setState({updated: true});
    }

    fillList(nextProps) {
        let filter = null;
        let id = null;
        let self = this;

        if (nextProps) {
            filter = nextProps.match.params.filter;
            id = nextProps.match.params.id;
        } else {
            filter = 'input';
            id = 0;
        }
        let predicate = {
            filter: 'mail_status',
            id: id,
            limit: 20
        };

        switch (filter) {
            case 'input':
                this.setState({header: 'Входящие'});
                predicate = {id: 1, filter: 'mail_status'};
                break;
            case 'unread':
                this.setState({header: 'Не прочитанные'});
                predicate = {id: 2, filter: 'mail_status'};
                break;
            case 'create':
                this.setState({header: 'Отправленные'});
                predicate = {id: 3, filter: 'mail_status'};
                break;
            case 'search':
            default:
                this.setState({header: 'Найдены по запросу'});
                break;
        }
        this.props.activityStore.setPredicate(predicate);
        this.mails = [];
        this.props.mailStore.loadMails().then(action(() => {
            this.props.mailStore.mailRegistry.forEach(function (mail, i) {
                self.mails.push(<MailListItem mail={mail} key={i}/>);
            });
            self.setState({mails: self.mails});
            this.setState({updated: true});
        })).catch(action(err => {
            console.log(err);
        }));
    }

    render() {
        if (!this.state.login) {
            return (<Redirect to={"/"}/>);
        }
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
                                <div className="communication_div desktop">
                                    <div className="top_div">
                                        <div className="conversation_title sg-f-dspl-m">{this.state.header}</div>
                                        <div style={{clear: 'both'}}>
                                        </div>
                                    </div>
                                    <div className="search_div">
                                        <input onChange={this.inputChange}
                                               className="vendor_search_text search_box sg-bd-8 ng-pristine ng-valid ng-touched"
                                               name="search" aria-label="Искать" placeholder="Искать"
                                               style={{paddingLeft: '50px', width: '100%'}} type="search"/>
                                    </div>
                                    <div className="conversation_div">
                                        {this.state.mails === [] &&
                                        this.empty
                                        }
                                        {this.state.mails}
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

export default inject('userStore', 'mailStore', 'activityStore')(Conversation);
