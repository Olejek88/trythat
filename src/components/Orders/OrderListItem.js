import React from 'react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";

@inject('orderStore')
class OrderListItem extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            showQuestionDialog: false,
            showOrderItem: true
        };

        this.onRemove = (e) => {
            console.log ('remove');
            this.props.orderStore.deleteOrder(e);
            this.setState({showOrderItem: false})
        };

        this.clickHandler = (component) => {
            console.log ('clickHandler');
            component.setState({ showQuestionDialog: false });
        };
    }

    onClick(e) {
        e.preventDefault();
        console.log ('onClick');
        this.setState({showQuestionDialog: !this.state.showQuestionDialog})
    }

    componentWillMount() {
    }

    render() {
        const activity = this.props.activity;
        const order = this.props.order;
        let order_link = "/#/activity/" + activity._id;
        let order_price = order.listing.cost + order.listing.currency.title;
        let order_duration = order.listing.duration.period;
        let order_quantity = order.listing.customers;
        let activity_image = this.props.activity.images[0].path;
        let luminary_image = activity.luminary.user.image.path;
        let luminary_name = activity.luminary.user.firstName + " " + activity.luminary.user.lastName;
        return (
            <React.Fragment>
                {this.state.showQuestionDialog && <QuestionDialog clickHandler={() => this.clickHandler(this)}
                                                                  luminary={activity.luminary} />}
                {this.state.showOrderItem &&
                <div className="vendorBlock sg-bd-3">
                    <div className="vendorHeading sg-inline-middle sg-bg-2 sg-bd-3 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                        style={{padding: '20px 15px', width: '100%', boxSizing: 'border-box'}}>
                        <div className="vendor-img">
                            <img src={luminary_image} style={{width: '100%'}} alt={""}/>
                        </div>
                        <p className="vendor-name sg-f-ttl sg-inline-middle sg-inline-flex-grow"
                           style={{margin: '0 10px'}}>{luminary_name}
                            <span className="sg-c-2" style={{margin: '0 5px'}}> 1 </span>
                        </p>
                        <div className="phone pdp_question_mark js-vendor-level button sg-inline-middle"
                             onClick={this.onClick.bind(this)}>
                            <div className="sg-chatbubble">
                            </div>
                            <span className="txt-ovr-2 sg-hover-primary sg-text-transform"
                                  style={{padding: '0 0 0 5px'}}>задать вопрос</span>
                        </div>
                    </div>
                    <div className="body-row">
                        <div className="main sg-inline-top">
                            <div className="two-col-1 col sg-inline-top sg-f-ttl" style={{margin: '10px 0'}}>
                                <div><a href={order_link} className="sg-c-1">
                                    <img src={activity_image} style={{width: '140px'}} alt={""}/>
                                </a>
                                </div>
                                <div style={{margin: '0 10px', width: '50%'}}>
                                    <div><a href={order_link} className="js-pdpDetails sg-c-1">
                                        {activity.title}</a></div>
                                    <div className="sg-c-2" style={{display: 'none'}}>
                                        {activity.description}
                                    </div>
                                    <div className="sg-c-2">
                                    </div>
                                    <div className="convert" style={{marginTop: '10px'}}>
                                        <a className="sg-inline-middle" href={order_link}>
                                            <div className="heart_img"
                                                 style={{width: '22px', height: '22px', backgroundSize: 'cover'}}>
                                            </div>
                                            <span className="wishlist-text sg-c-2 sg-f-btn sg-text-transform"
                                                  style={{margin: '2px 2px 2px 5px'}}>В избранное</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="two-col-2 col sg-inline-flex-grow sg-f-ttl" style={{margin: '10px 0'}}>
                                <div className="sg-inline-top sg-c-2 f-style-ovr1"
                                     style={{width: '100%', paddingBottom: '7px'}}>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Количество человек</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Длительность</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span>Цена</span>
                                    </div>
                                    <div className="remove-convert"
                                         style={{width: '28px', position: 'relative', top: '-6px'}}>
                                        <div className="remove">
                                            <img src={"icon_close.png"} alt="remove" style={{width: '28px'}}
                                                onClick={() => { this.onRemove(order._id) }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="sg-inline-top sg-f-ttl" style={{width: '100%'}}>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-quantity">{order_quantity}</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-quantity">{order_duration}</span>
                                    </div>
                                    <div className="sg-inline-flex-grow" style={{textAlign: 'center'}}>
                                        <span className="js-price">{order_price}</span>
                                    </div>
                                    <div style={{width: '28px'}}>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="start-checkout  primaryButton button" style={{width: '200px'}}
                                     tabIndex="0">
                                    <div className="title-container">
                                        <p className="title">Оформить</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: '0 20px'}}>
                        </div>
                    </div>
                </div>}
            </React.Fragment>
        );
    }
}

@withRouter
class QuestionDialog extends React.Component {
    constructor() {
        super();

        this.clickHandler = (component) => {
            console.log ('clickHandler');
            component.setState({ showQuestionDialog: false });
        };

        this.sendAnswer = (component) => {
            component.setState({ showQuestionDialog: false });
        }
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
                                    <img src={this.props.luminary.user.image.path} alt="{this.props.luminary.user.firstName}"
                                         style={{width: '44px', height: '44px', float: 'left', borderRadius: '22px'}}/>
                                    <div className="luminary_answer">{this.props.luminary.user.firstName} и его команда будут рад помочь Вам и ответить на Ваши вопросы.
                                    </div>
                                </div>
                                <div style={{borderBottom: '1px solid #e1e1e1', width: '100%', float: 'left', marginTop: '10px'}}></div>
                                <div className="row" style={{marginTop: '36px'}}>
                                    <div style={{fontFamily: 'source-sans-pro-n4',fontSize: '18px', color: '#000', margin: '0px', marginBottom: '5px'}}>
                                        Звоните
                                        <div className="sg-c-primary" style={{fontFamily: 'source-sans-pro-n3', fontSize: '18px'}}>
                                            <p style={{fontFamily: 'source-sans-pro-n3',fontSize: '16px', color: '#008800', margin: '0px', lineHeight: '20px'}}>
                                            {this.props.luminary.user.phone}</p>
                                        </div>
                                        <div style={{fontFamily: 'source-sans-pro-n3',fontSize: '14px', color: '#888', margin: '0px', lineHeight: '25px'}}>
                                            В рабочее время с 9 до 18
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop: '28px', marginBottom: '36px'}}>
                                    <p style={{fontFamily: 'source-sans-pro-n4', fontSize: '18px', color: '#000', marginBottom: '5px'}}>
                                        Отправить сообщение</p>
                                    <form className="concierge-overlay" style={{position: 'relative'}}
                                          onSubmit={this.sendAnswer}
                                          action="/" method="POST">
                                        <input className="js-email" placeholder="Ваш е-мэйл адрес" style={{width: '100%'}}
                                               id="email" name="email" type="text" />
                                        <input className="js-phone"
                                               name="phone" placeholder="Номер телефона (дополнительно)"
                                               style={{width: '100%', margin: '5px 0'}} type="text" />
                                        <textarea className="js-suggestion" name="request"
                                                  style={{height: '70px', width: '100%', resize: 'none', boxSizing: 'border-box'}}
                                                  placeholder="Чем можем помочь?">
                                        </textarea>
                                        <p className="errorSummary">
                                        </p>
                                        <div className="row">
                                            <div id="send-question" className=" primaryButton button " style={{width: '100%'}} tabIndex="0">
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

export default OrderListItem;
