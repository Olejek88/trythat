import React from 'react';
import {inject} from "mobx-react/index";
import moment from "moment";
import AnswerDialog from "./AnswerDialog";
import mailStore from "../../stores/mailStore";
import {Redirect} from "react-router-dom";

class MailListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            showText: false,
            showAnswerDialog: false,
            showMail: true
        };
        this.mail = null;
        this.createDate = null;
        this.answerMailList = null;
        this.onClick = this.onClick.bind(this);
        this.showAnswer = this.showAnswer.bind(this);
        this.deleteMail = this.deleteMail.bind(this);

        this.clickHandler = (component) => {
            component.setState({showAnswerDialog: false});
            return <Redirect to='/#/my/conversation' />
        };
    }

    onClick(e) {
        e.preventDefault();
        if (this.mail.status === '1') {
            this.mail.status = 2;
            this.mail.readDate = new Date();
            mailStore.createMail(this.mail);
        }
        this.setState({showText: !this.state.showText})
    }

    showAnswer() {
        this.setState({showAnswerDialog: !this.state.showAnswerDialog})
    }

    deleteMail() {
        this.props.mailStore.deleteMail(this.mail.id);
        this.setState({showMail: false})
    }

    componentWillMount() {
        this.mail = this.props.mail;
        this.createDate = moment(this.mail.createDate).format('YYYY-MM-DD HH:mm');
    }

    render() {
        return (
            <React.Fragment>
                {this.state.showMail &&
                <article className="article">
                    <header className="article-header">
                        <div className="article-author">
                            <div className="article-meta">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td style={{width: '100px'}}>
                                            <div className="avatar article-avatar">
                                                <span className="icon-agent"></span>
                                                <img src={this.props.commonStore.apiServer+this.mail.fromUser.image.path} alt="from"
                                                     className="user-avatar"/>
                                            </div>
                                        </td>
                                        <td style={{width: '300px', alignContent: 'left', cursor: 'pointer'}}
                                            onClick={this.onClick.bind(this)}>
                                            <strong>
                                                {this.mail.fromUser.firstName} {this.mail.fromUser.lastName}
                                            </strong>
                                        </td>
                                        <td style={{width: '500px', cursor: 'pointer'}} onClick={this.onClick.bind(this)}>
                                            <strong>{this.mail.title}</strong>
                                        </td>
                                        <td style={{width: '200px'}}>
                                            {this.createDate}
                                        </td>
                                        <td style={{width: '100px', paddingRight: '5px'}}
                                            onClick={this.showAnswer.bind(this)}>
                                            <div className="button-blue primaryButton button" style={{width: '90px'}}>
                                                <div className="title-container"><p className="title">
                                                    <span style={{display: 'inline-block'}}>Ответить</span>
                                                </p></div>
                                            </div>
                                        </td>
                                        <td style={{width: '100px', paddingRight: '5px'}}
                                            onClick={this.deleteMail.bind(this)}>
                                            <div className="button-red primaryButton button" style={{width: '90px'}}>
                                                <div className="title-container"><p className="title">
                                                    <span style={{display: 'inline-block'}}>Удалить</span>
                                                </p></div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </header>

                    {this.state.showText &&
                    <React.Fragment>
                        <section className="article-text" style={{display: 'block'}}>
                            <div className="article-content">
                                <div className="article-body"><p>
                                <span>
                                    {this.mail.text}
                                </span></p>
                                </div>
                            </div>
                        </section>
                        <section className="article-info" style={{display: 'block'}}>
                            <div className="article-content">
                                <div className="article-body"><p>
                                    {this.mail.order &&
                                    <a href={"/#/order/" + this.mail.order._id}>Заказ: <span>{this.mail.order._id}</span></a>
                                    }
                                    {this.mail.activity &&
                                    <a href={"/#/activity/" + this.mail.activity._id}>Мероприятие: <span>{this.mail.activity.title}</span></a>
                                    }
                                    <span><br/></span>
                                </p></div>
                                <div className="article-attachments">
                                    <ul className="attachments">
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </React.Fragment>}

                    <div className="article-comments" id="article-comments" style={{display: 'none'}}>
                        <section className="comments">
                            <header className="comment-overview">
                                <h3 className="comment-heading">Ответы</h3>
                                <p className="comment-callout">0 ответов</p>
                            </header>
                            <ul id="comments" className="comment-list">
                                {this.answerMailList}
                            </ul>
                        </section>
                    </div>
                </article>}
                {this.state.showAnswerDialog && <AnswerDialog clickHandler={() => this.clickHandler(this)}
                                                                  mail={this.mail}/>}
            </React.Fragment>
        );
    }
}

export default inject('userStore', 'mailStore', 'commonStore')(MailListItem);
