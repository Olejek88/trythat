import React from 'react';
import {withRouter} from "react-router-dom";
import {inject} from "mobx-react/index";
import currencyStore from "../../stores/currencyStore";
import activityStore from "../../stores/activityStore";
import Select from 'react-select';
import InputRange from 'react-input-range';

@inject('userStore', 'mailStore', 'commonStore', 'durationStore', 'activityListingStore')
@withRouter
class ActivityListingDialog extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '1',
            customers: 10,
            activity: activityStore.defaultData,
            duration: '',
            cost: 2500,
            currency: currencyStore.defaultData,
            isGroup: false,
            durations:[]
        };

        this.durations = [];

        this.clickHandler = (component) => {
            component.setState({ showAnswerDialog: false });
        };

        this.handleDurationChange = (event) => {
            this.setState({duration: event});
        };

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };

        this.clickHandlerSend = () => {
            let activity_listing = {
                activity_id: this.state.activity.id,
                duration_id: this.state.duration.value,
                currency_id: this.state.currency.id,
                cost: this.state.cost,
                customers: this.state.customers
            };
            this.props.activityListingStore.createActivityListing(activity_listing).then(() => {
                this.props.history.replace('/my/activity');
            });
        };
    }

    componentWillMount() {
        let self = this;
        this.setState({activity: this.props.activity});
        this.props.durationStore.loadDurations().then(() => {
            console.log(this.props.durationStore.durationsRegistry);
            self.durations = Array.from(this.props.durationStore.durationsRegistry.values())
                    .map(x => ({label: x.duration, value: x.id}));
            this.setState({durations: self.durations});
            if (self.durations)
                this.setState({duration: self.durations[0]});
        });
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
                            <p className="header-text" style={{width: 'auto', textAlign: 'center', fontSize: '24px'}}>
                                Добавить вариант</p>
                        </div>
                        <div className="dialog_body" style={{margin: '0 60px', width: '300px'}}>
                            <div className="dialog_content" style={{textAlign: 'left', width: '300px'}}>
                                <div className="row" style={{marginTop: '36px', textAlign: 'left'}}>
                                    <img src={this.props.commonStore.apiServer+this.props.activity.luminary.user.image.path}
                                         alt={this.props.activity.luminary.user.firstName}
                                         style={{width: '44px', height: '44px', float: 'left', borderRadius: '22px'}}/>
                                    <div className="luminary_answer">
                                        {this.props.activity.title}
                                    </div>
                                </div>
                                <div style={{borderBottom: '1px solid #e1e1e1', width: '100%', float: 'left', marginTop: '10px'}}></div>
                                <div className="row" style={{marginTop: '28px', marginBottom: '36px'}}>
                                    <form className="concierge-overlay" style={{position: 'relative'}} action="/" method="POST">
                                        <div className="row-flow">
                                            <div className="sibs" style={{padding:'10px'}}>
                                                <label htmlFor="customers" className="required">Количество
                                                    участников</label>
                                            </div>
                                            <div className="sibs" style={{width: '300px'}}>
                                                <InputRange
                                                    maxValue={20}
                                                    minValue={0}
                                                    value={this.state.customers}
                                                    style={{width: '250px'}}
                                                    onChange={value => this.setState({customers: value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="row-flow">
                                            <div className="sibs" style={{padding:'10px'}}>
                                                <label htmlFor="durations"
                                                       className="required">Длительность</label>
                                            </div>
                                            <div className="sibs" style={{width: '280px'}}>
                                                <Select
                                                    name="duration"
                                                    placeholder={"Выберите"}
                                                    style={{width: '300px'}}
                                                    clearable={false}
                                                    value={this.state.duration}
                                                    onChange={(e) => this.handleDurationChange(e)}
                                                    options={this.state.durations}
                                                />
                                            </div>
                                        </div>
                                        <div className="row-flow">
                                            <div className="sibs" style={{padding:'10px'}}>
                                                <label htmlFor="durations"
                                                       className="required">Стоимость</label>
                                            </div>
                                            <div className="sibs" style={{width: '280px'}}>
                                                <input style={{background: '#FFF', width: '150px'}}
                                                       type="text"
                                                       name="title"
                                                       placeholder="Стоимость"
                                                       value={this.state.cost}
                                                       onChange={this.updateState('cost')}/>
                                            </div>
                                        </div>
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

export default ActivityListingDialog;
