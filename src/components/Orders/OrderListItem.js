import React from 'react';
import {inject} from "mobx-react/index";
import QuestionDialog from "./QuestionDialog";
import {Redirect} from "react-router-dom";

@inject('orderStore','wishListStore')
class OrderListItem extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            showQuestionDialog: false,
            favoredClass: "heart_img",
            favored: false,
            showOrderItem: true,
            checkout: true
        };

        this.onRemove = (e) => {
            console.log('remove');
            this.props.orderStore.deleteOrder(e);
            this.setState({showOrderItem: false})
        };

        this.onFavored = () => {
            this.setState({favored: !this.state.favored});
            if (this.state.favored)
                this.setState({favoredClass: 'heart_img listed'});
            else
                this.setState({favoredClass: 'heart_img'});
            //console.log(this.state.favoredClass);
            //this.props.wishListStore.
        };

        this.clickHandler = (component) => {
            console.log('clickHandler');
            component.setState({showQuestionDialog: false});
        };
    }

    onClick(e) {
        e.preventDefault();
        console.log('onClick');
        this.setState({showQuestionDialog: !this.state.showQuestionDialog})
    }

    componentWillMount() {
        if (this.props.checkout)
            this.setState({checkout: false});
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

        this.onSubmit = () => {
            return <Redirect to='/cart/checkout' />
        };

        return (
            <React.Fragment>
                {this.state.showQuestionDialog && <QuestionDialog clickHandler={() => this.clickHandler(this)}
                                                                  luminary={activity.luminary}/>}
                {this.state.showOrderItem &&
                <div className="vendorBlock sg-bd-3">
                    <div
                        className="vendorHeading sg-inline-middle sg-bg-2 sg-bd-3 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
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
                                    <div className="convert" style={{marginTop: '10px', cursor: 'pointer'}}>
                                        <a className="sg-inline-middle" onClick={this.onFavored}>
                                            <div className={this.state.favoredClass}
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
                                            <img src={"images/icon_close.png"} alt="remove" style={{width: '28px'}}
                                                 onClick={() => {
                                                     this.onRemove(order._id)
                                                 }}/>
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
                            {this.state.checkout &&
                            <div className="row" id="checkout">
                                <div className="start-checkout  primaryButton button" style={{width: '200px'}}
                                     tabIndex="0"  onClick={this.onSubmit}>
                                    <div className="title-container">
                                        <p className="title">Оформить</p>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div style={{padding: '0 20px'}}>
                        </div>
                    </div>
                </div>}
            </React.Fragment>
        );
    }
}

export default OrderListItem;
