import React from 'react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";

class QuestionDialog extends React.Component {
    constructor() {
        super();

        this.clickHandler = (component) => {
            console.log('clickHandler');
            component.setState({showQuestionDialog: false});
        };

        this.sendAnswer = (component) => {
            component.setState({showQuestionDialog: false});
        }
    }

    render() {
        const clickHandler = this.props.clickHandler;
        return (
            <div id="conversationOverlay-dialog" className="overlay medium foyer commonDialog desktop"
                 style={{top: '60px', left: '510px', position: 'fixed', display: 'block'}}>
                <span tabIndex="0" className="close" onClick={clickHandler}>
                </span>
                <div className="overlayContent">
                    <div className="form">
                        <div className="dialog_header" style={{margin: '0px'}}>
                            <p className="header-text"
                               style={{width: 'auto', textAlign: 'center', fontSize: '24px'}}>Вопросы?</p>
                        </div>
                        <div className="dialog_body" style={{margin: '0 60px', width: '300px'}}>
                            <div className="dialog_content" style={{textAlign: 'left', width: '300px'}}>
                                <div className="row" style={{marginTop: '36px', textAlign: 'left'}}>
                                    <img src={this.props.commonStore.apiServer + this.props.luminary.user.image.path}
                                         alt="{this.props.luminary.user.firstName}"
                                         style={{width: '44px', height: '44px', float: 'left', borderRadius: '22px'}}/>
                                    <div className="luminary_answer">{this.props.luminary.user.firstName} и его команда
                                        будут рад помочь Вам и ответить на Ваши вопросы.
                                    </div>
                                </div>
                                <div style={{
                                    borderBottom: '1px solid #e1e1e1',
                                    width: '100%',
                                    float: 'left',
                                    marginTop: '10px'
                                }}></div>
                                <div className="row" style={{marginTop: '36px'}}>
                                    <div style={{
                                        fontFamily: 'source-sans-pro-n4',
                                        fontSize: '18px',
                                        color: '#000',
                                        margin: '0px',
                                        marginBottom: '5px'
                                    }}>
                                        Звоните
                                        <div className="sg-c-primary"
                                             style={{fontFamily: 'source-sans-pro-n3', fontSize: '18px'}}>
                                            <p style={{
                                                fontFamily: 'source-sans-pro-n3',
                                                fontSize: '16px',
                                                color: '#008800',
                                                margin: '0px',
                                                lineHeight: '20px'
                                            }}>
                                                {this.props.luminary.user.phone}</p>
                                        </div>
                                        <div style={{
                                            fontFamily: 'source-sans-pro-n3',
                                            fontSize: '14px',
                                            color: '#888',
                                            margin: '0px',
                                            lineHeight: '25px'
                                        }}>
                                            В рабочее время с 9 до 18
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: '28px', marginBottom: '36px'}}>
                                    <p style={{
                                        fontFamily: 'source-sans-pro-n4',
                                        fontSize: '18px',
                                        color: '#000',
                                        marginBottom: '5px'
                                    }}>
                                        Отправить сообщение</p>
                                    <form className="concierge-overlay" style={{position: 'relative'}}
                                          onSubmit={this.sendAnswer}
                                          action="/" method="POST">
                                        <input className="js-email" placeholder="Ваш е-мэйл адрес"
                                               style={{width: '100%'}}
                                               id="email" name="email" type="text"/>
                                        <input className="js-phone"
                                               name="phone" placeholder="Номер телефона (дополнительно)"
                                               style={{width: '100%', margin: '5px 0'}} type="text"/>
                                        <textarea className="js-suggestion" name="request"
                                                  style={{
                                                      height: '70px',
                                                      width: '100%',
                                                      resize: 'none',
                                                      boxSizing: 'border-box'
                                                  }}
                                                  placeholder="Чем можем помочь?">
                                        </textarea>
                                        <p className="errorSummary">
                                        </p>
                                        <div className="row">
                                            <div id="send-question" className=" primaryButton button "
                                                 style={{width: '100%'}} tabIndex="0">
                                                <div className="title-container">
                                                    <p className="title">Сохранить</p>
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

export default inject('commonStore')(withRouter(QuestionDialog));
