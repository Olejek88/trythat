import React from 'react';
import {withRouter} from "react-router-dom";
import mailStatusStore from "../../stores/mailStatusStore";
import {inject} from "mobx-react/index";

@inject('userStore', 'mailStore')
@withRouter
class AnswerDialog extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            answer: ''
        };
        this.mail = [];

        this.clickHandler = (component) => {
            component.setState({ showAnswerDialog: false });
        };

        this.clickHandlerSend = () => {
            this.mail = {
                fromUser: this.props.mail.toUser,
                toUser: this.props.mail.fromUser,
                answerTo: this.props.mail._id,
                status: mailStatusStore.loadMailStatus(1),
                activity: this.props.mail.activity,
                createDate: new Date(),
                sendDate: null,
                readDate: null,
                title: this.state.title,
                text: this.state.answer,
                order: null
            };
            this.props.mailStore.createMail(this.mail);
        };

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };
    }

    componentWillMount() {
        this.setState ({title: 'Re:'+this.props.mail.title});
    }

    render() {
        const clickHandler = this.props.clickHandler;
        return (
            <div id="conversationOverlay-dialog" className="overlay medium foyer commonDialog desktop"
                 style={{top: '60px', left: '510px', position: 'fixed', display: 'block'}}>
                <a tabIndex="0" className="close" onClick={clickHandler}>
                </a>
                <div className="overlayContent">
                    <div className="form">
                        <div className="dialog_header" style={{margin: '0px'}}>
                            <p className="header-text" style={{width: 'auto', textAlign: 'center', fontSize: '24px'}}>Вопросы?</p>
                        </div>
                        <div className="dialog_body" style={{margin: '0 60px', width: '300px'}}>
                            <div className="dialog_content" style={{textAlign: 'left', width: '300px'}}>
                                <div className="row" style={{marginTop: '36px', textAlign: 'left'}}>
                                    <img src={this.props.mail.fromUser.image.path} alt={this.props.mail.fromUser.firstName}
                                         style={{width: '44px', height: '44px', float: 'left', borderRadius: '22px'}}/>
                                    <div className="luminary_answer">
                                        <strong>Ответ {this.props.mail.fromUser.firstName}: по теме</strong><br/>
                                        {this.props.mail.title}
                                    </div>
                                </div>
                                <div style={{borderBottom: '1px solid #e1e1e1', width: '100%', float: 'left', marginTop: '10px'}}></div>
                                <div className="row" style={{marginTop: '28px', marginBottom: '36px'}}>
                                    <p style={{fontFamily: 'source-sans-pro-n4', fontSize: '18px', color: '#000', marginBottom: '5px'}}>
                                        Отправить сообщение</p>
                                    <form className="concierge-overlay" style={{position: 'relative'}} action="/" method="POST">
                                        <input className="js-email" style={{width: '100%'}}
                                               id="title" name="title" type="text"
                                               value={this.state.title}
                                               onChange={this.updateState('title')}/>
                                        <textarea className="js-suggestion" name="request"
                                                  style={{height: '70px', width: '100%', resize: 'none', boxSizing: 'border-box'}}
                                                  value={this.state.answer}
                                                  onChange={this.updateState('answer')}
                                                  placeholder="Текст сообщения">
                                        </textarea>
                                        <div className="row">
                                            <div id="send-question" className=" primaryButton button " style={{width: '100%'}}
                                                 onClick={clickHandler}
                                                 onMouseDown={this.clickHandlerSend}>
                                                <div className="title-container">
                                                    <p className="title">Отправить</p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnswerDialog;
