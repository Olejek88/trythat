import React from 'react';
import {observer, inject} from 'mobx-react';
import Select from 'react-select';
import QuestionDialog from "../Orders/QuestionDialog";

@observer
@inject('activityStore','activityListingStore','orderStatusStore','customerStore','orderStore')
class ActivitySelect extends React.Component {
    constructor() {
        super();
        let order;

        this.state = {
            selectedQuantity: 1,
            selectedDuration: 1,
            selectedPrice: 'не выбрано',
            favoredClass: "heart_img",
            favored: false,
            showQuestionDialog: false
        };

        this.onFavored = () => {
            // сначала меняем визуально, потом запускаем асинхронный setstate
            if (!this.state.favored) {
                this.setState({favoredClass: 'pdp heart_img listed'});
                //wishListStore.wish(customer._id, this.props.activity);
            }
            else {
                this.setState({favoredClass: 'pdp heart_img'});
                //wishListStore.unwish(customer._id, this.props.activity);
            }
            this.setState({favored: !this.state.favored});
            console.log(this.state.favoredClass);
        };

        this.makeOrder = () => {
            order = {
                listing: this.props.activityListingStore.loadActivityListing(this.props.activity),
                orderStatus: this.props.orderStatusStore.loadOrderStatus(1),
                created: new Date(),
                customer: this.props.userStore.getUser(),
                startDate: new Date()
            };
            this.props.orderStore.createOrder(order);
        };

        this.handleSelectActivityQuantityChange = (event) => {
            this.setState({selectedQuantity: event});
            this.setState({selectedPrice: event.cost});
        };
        this.handleSelectActivityDurationChange = (event) => {
            this.setState({selectedDuration: event});
            this.setState({selectedPrice: event.cost});
        };

        this.onClick = this.onClick.bind(this);

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

    componentDidMount() {
        if (this.props.activity) {
            const customer = this.props.customerStore.getCustomer();
            const favor = this.props.activityStore.isFavorite(this.props.activity._id, customer._id);
            this.setState({favored: favor});
            if (favor)
                this.setState({favoredClass: "pdp heart_img listed"});
            else
                this.setState({favoredClass: 'pdp heart_img'});
        }
    }

    render() {
        const activity = this.props.activity;
        const luminary = activity.luminary;
        return (
            <React.Fragment>
                {this.state.showQuestionDialog && <QuestionDialog clickHandler={() => this.clickHandler(this)}
                                                                  luminary={activity.luminary}/>}
                <div className="right-box action-box" style={{marginBottom: '40px'}}>
                    <div className="p-attributes " data-productid="325">
                        <h2 className="lum-name sg-f-dspl-s ">{luminary.user.firstName} {luminary.user.lastName}</h2>
                        <p className="charity-name sg-f-bdy sg-c-2 ">
                            <img src={"images/icon_ribbon.png"} style={{width: '12.5px'}} alt={""}/>
                            <span>{luminary.description}</span>
                        </p>
                        <div className="name-group" style={{float: 'left', width: '100%', marginTop: '34px'}}>
                            <h1 className="p-name sg-f-ttl">{activity.title}</h1>
                            <div className="p-shortDesc body-text sg-f-bdy" data-limit="68" data-height="132"
                                 style={{height: '68px'}}>
                                <p>{activity.shortDescription}</p>
                            </div>
                        </div>
                        <div style={{clear: 'both'}}>
                        </div>
                    </div>

                    <form name="orderDetail" id="order-detail" className="form" action="/" method="POST">
                        <div className="p-form" data-view="_preCheckoutForm_new"
                             style={{border: 'none', background: 'none'}}>
                            <div className="js-p-form product-section-p-form sg-bg-2 sg-bd-3 ">
                                <div className="info-box js-err-con ">
                                    <table className="sg-bg-2 sg-bd-3 sg-no-bd-left sg-no-bd-right sg-no-bd-top"
                                           style={{width: '100%'}}>
                                        <tbody>
                                        <tr className="sg-inline-top sg-f-hdr"
                                            style={{padding: '10px', boxSizing: 'border-box', width: '100%'}}>
                                            <td className="attr-field loc js-attr-row attr-geographic sg-inline-flex-grow">
                                                <div>
                                                    <img src={"images/icon_loc.png"} alt={""}/>
                                                    <p>{activity.location.title}</p>
                                                </div>
                                            </td>
                                            <td className="attr-field js-attr-row attr-guests attr-guest2 sg-inline-flex-grow">
                                                <div>
                                                    <img src={"images/icon_manypeeps.png"} alt={""}/>
                                                    <div>
                                                        <p style={{maxWidth: 'none'}}>{activity.minCustomers}-{activity.maxCustomers} человек</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="attr-field js-attr-row attr-duration attr-duration2 sg-inline-flex-grow">
                                                <div>
                                                    <img src={"images/icon_clock.png"} alt={""}/>
                                                    <div>
                                                        <p>{activity.durations[0].period}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div>
                                        <input value="" name="scenario" id="scenario" type="hidden"/>
                                        <input name="userId" id="userId" type="hidden"/>
                                        <div className="sg-bg-2 sg-bd-3 sg-no-bd-top sg-no-bd-left sg-no-bd-right
                                            preCheckOutField displayonly_div event_venue_row"
                                             style={{padding: '10px 10px 0 10px'}}>
                                            <div className="sg-inline-top"
                                                 style={{width: '100%', position: 'relative', flexWrap: 'nowrap'}}>
                                                <div className="sg-inline-middle displayonly_title "
                                                     style={{paddingLeft: '30px', boxSizing: 'border-box'}}>
                                                </div>
                                                <p style={{lineHeight: '22px'}}>{activity.location.title}
                                                    <a className="google-map-address-link"
                                                       href={"https://www.google.com/maps/?q=" + activity.location.longitude + "," + activity.location.latitude}
                                                       target="_blank" title="Открыть в новом окне">На карте</a>
                                                </p>
                                            </div>
                                            <div className="displayonly_content">
                                            </div>
                                        </div>
                                        <div className="preCheckOutField sg-bg-3" id="addDuration"
                                             style={{paddingTop: '5px', paddingBottom: '10px'}}>
                                            <Select
                                                style={{width: '100%', top: '5px'}}
                                                name="duration"
                                                id="duration"
                                                value={this.state.selectedDuration}
                                                cost={this.state.selectedPrice}
                                                className="sg-f-hdr participants js-participants js-numGuests sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                                                onChange={(e) => this.handleSelectActivityDurationChange(e)}
                                                options={this.props.activityListingStore.loadActivityListingSelectDuration(activity)}
                                            />
                                            <div className="row" id="addPeopleError"
                                                 style={{
                                                     display: 'none',
                                                     color: '#FD6340 !important',
                                                     fontFamily: 'georgia',
                                                     fontStyle: 'italic',
                                                     fontSize: '13px',
                                                     boxSizing: 'border-box',
                                                     padding: '5px 10px'
                                                 }}>
                                                <p style={{
                                                    color: '#FD6340 !important', fontFamily: 'georgia',
                                                    fontStyle: 'italic', fontSize: '13px'
                                                }}>Неправильная продолжительность мероприятия</p>
                                            </div>
                                        </div>
                                        <div className="clearAll">
                                        </div>
                                        <div className="preCheckOutField sg-bg-3" id="addQuantity"
                                             style={{paddingTop: '5px', paddingBottom: '10px'}}>
                                            <Select
                                                style={{width: '100%', top: '5px'}}
                                                value={this.state.selectedQuantity}
                                                cost={this.state.selectedPrice}
                                                name="quantity"
                                                id="quantity"
                                                className="sg-f-hdr participants js-participants js-numGuests sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                                                onChange={(e) => this.handleSelectActivityQuantityChange(e)}
                                                options={this.props.activityListingStore.loadTestCustomersByActivityListing()}
                                            />
                                            <div className="row" id="addQuantityError"
                                                 style={{
                                                     display: 'none',
                                                     color: '#FD6340 !important',
                                                     fontFamily: 'georgia',
                                                     fontStyle: 'italic',
                                                     fontSize: '13px',
                                                     boxSizing: 'border-box',
                                                     padding: '5px 10px'
                                                 }}>
                                                <p style={{
                                                    color: '#FD6340 !important', fontFamily: 'georgia',
                                                    fontStyle: 'italic', fontSize: '13px'
                                                }}>Неправильное количество людей</p>
                                            </div>
                                        </div>
                                        {/*
                                    <div className="preCheckOutField sg-bg-3" id="addDuration">
                                        <input name="durationMinutes" className="js-durationMinutes"
                                               data-exceptiontime="" data-exceptiondurationprice=""
                                               id="CartItemSocialInfo_durationMinutes" value="2.5" type="hidden"/>
                                        <input name="addDurationCost" id="CartItemSocialInfo_addDurationCost" value="0"
                                               type="hidden"/>
                                        <input className="js-ori-durationMinutes" value="2.5" type="hidden"/>
                                    </div>
                                    <div className="schedule-button preCheckOutField">
                                        <a href="/" className="allowAllUsers" tabIndex="-1">
                                            <input className="sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right
                                                sg-placeholder-primary js-display-date js-schedule calender-field
                                                negotiate-schedule-picker preffered_time"
                                                placeholder="Предпочитаемая дата и время"
                                                data-error="Пожалуйста выберите дату и время" readOnly="" value=""
                                                tabIndex="0" type="text"/>
                                        </a>
                                        <input className="js-date-1" name="Schedule[date][0]" value="" type="hidden"/>
                                        <input className="js-date-2" name="Schedule[date][1]" value="" type="hidden"/>
                                        <input className="js-ori-date-1" value="" type="hidden"/>
                                        <input className="js-ori-date-2" value="" type="hidden"/>
                                    </div>
                                    <input value="0" name="optionsError" id="optionsError" type="hidden"/>
*/}
                                        <div className="clearAll">
                                        </div>
                                    </div>
                                    <div className="errorSummary js-error-summary"
                                         style={{display: 'none', padding: '5px 15px', background: 'white'}}>
                                        * Пожалуйста выберите вариант
                                    </div>
                                </div>

                                <div className="buyBox  desktop " style={{clear: 'both'}}>
                                    <div className="price-sec sg-f-hdr  desktop">
                                        <p className="sg-inline-middle price "
                                           style={{justifyContent: 'space-between'}}>
                                            <span className="priceText">{this.state.selectedPrice}</span>
                                        </p>
                                        <div className="clearAll"></div>
                                    </div>

                                    <div className="buy-button-row desktop">
                                        <button
                                            id="buynow-button"
                                            className="sg-text-transform primaryButton button title-container"
                                            type="submit"
                                            style={{width: '100%'}}
                                            onClick={this.makeOrder}>
                                            <p className="title">Заказать</p>
                                        </button>
                                    </div>
                                    <div className="clearAll"></div>
                                </div>
                            </div>
                            <div className="social_wiget_div sg-f-hdr sg-bd-3 desktop " style={{textAlign: 'center'}}>
                                <div className="wishlist  secondaryButton sg-cursor " tabIndex="0">
                                    <div className={this.state.favoredClass} style={{marginBottom: '18px'}}
                                         onClick={this.onFavored}>
                                    </div>
                                    <p className="pdp wishlist-text title sg-text-transform">Добавить в список
                                        желаний</p>
                                </div>
                                <table className="btn_table sg-bd-2 sg-no-bd-bottom sg-no-bd-left sg-no-bd-right">
                                    <tbody>
                                    <tr>
                                        <td className="left_td share_td sg-bd-3 sg-no-bd-left sg-no-bd-bottom">
                                            <a className="button sg-inline-middle" style={{justifyContent: 'center'}}>
                                                <img style={{width: '28px', verticalAlign: 'middle'}}
                                                     src={"images/icon_share_green.png"} alt={""}/>
                                                <span
                                                    className="sg-text-transform txt-ovr-2 sg-hover-primary">Поделиться</span>
                                            </a>
                                        </td>
                                        <td className="right_td question_td sg-bd-3 sg-no-bd-right sg-no-bd-bottom">
                                            <a onClick={this.onClick.bind(this)} className="button sg-inline-middle"
                                               style={{justifyContent: 'center'}}>
                                                <img style={{width: '20px', verticalAlign: 'middle', paddingTop: '8px'}}
                                                     src={"images/icon_chatbubble_green.png"} alt={""}/>
                                                <span
                                                    className="sg-text-transform txt-ovr-2 sg-hover-primary span-right">Задать вопрос</span>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="clearAll">
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ActivitySelect;
