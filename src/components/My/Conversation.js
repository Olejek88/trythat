import React from 'react';
import {inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import MyMenu from "./MyMenu";
import MailListItem from "./MailListItem";
import EmptyMailBox from "./EmptyMailBox";

@withRouter
@inject('userStore', 'mailStore', 'activityStore')
export default class Conversation extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            header: 'Входящие'
        };
        this.empty = <EmptyMailBox />;
        this.mails = [];
        this.inputChange = this.inputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.fillList(nextProps);
    }

    componentWillMount() {
        this.fillList(null);
        console.log(this.mails);
    }

    inputChange(event) {
        let self = this;
        self.mails = [];
        this.setState({
            search: event.target.value
        });
        let predicate = {
            filter: 'search',
            id: this.state.search,
            limit: 10
        };
        this.props.mailStore.setPredicate(predicate);
        let mails = this.props.mailStore.loadMails();
        mails.forEach(function (mail, i) {
            self.mails.push(<MailListItem mail={mail} key={i}/>);
        });
    }

    fillList(nextProps) {
        let filter = null;
        let id = null;
        let self = this;
        self.mails = [];

        if (nextProps) {
            filter = nextProps.match.params.filter;
            id = nextProps.match.params.id;
        } else {
            filter = 'input';
            id = 0;
        }
        switch (filter) {
            case 'input':
                this.setState({header: 'Входящие'});
                break;
            case 'unread':
                this.setState({header: 'Не прочитанные'});
                break;
            case 'sent':
                this.setState({header: 'Отправленные'});
                break;
            case 'search':
            default:
                this.setState({header: 'Найдены по запросу'});
                break;
        }
        let predicate = {
            filter: filter,
            id: id,
            limit: 20
        };
        this.props.activityStore.setPredicate(predicate);
        let mails = this.props.mailStore.loadMails();
        mails.forEach(function (mail, i) {
            self.mails.push(<MailListItem mail={mail} key={i}/>);
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
                                        {this.mails===[] &&
                                            this.empty
                                        }
                                        {this.mails}
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
