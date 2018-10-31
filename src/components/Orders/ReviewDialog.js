import React from 'react';
import {withRouter} from "react-router-dom";
import Select from 'react-select';
import {inject} from "mobx-react/index";

@inject('reviewStore')
@withRouter
class ReviewDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: props.customer,
            activity: props.activity,
            date: new Date(),
            rate: 5,
            description: '',
            title: 'Хорошо'
        };

        this.visibleState = {
            reviewSend: false
        };

        this.rate = [
            {value: '1', label: 'Совсем не понравилось'},
            {value: '2', label: 'Не очень'},
            {value: '3', label: 'Не плохо'},
            {value: '4', label: 'Хорошо'},
            {value: '5', label: 'Отлично, очен понравилось!'}
        ];

        this.handleSelectRateChange = (event) => {
            this.setState({rate: event});
        };

        this.handleSelectTitleChange = (event) => {
            this.setState({title: event});
        };

        this.handleSelectDescriptionChange = (event) => {
            this.setState({description: event.target.value});
        };

        this.clickHandler = (component) => {
            component.setState({ showReviewDialog: false });
        };

        this.sendReview = () => {
            this.setState({reviewSend: true});
            const review = Object.assign({}, this.state);
            this.props.reviewStore.createReview(review);
        };
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
                            <p className="header-text" style={{width: 'auto', textAlign: 'center', fontSize: '24px'}}>Оставить отзыв</p>
                        </div>
                        <div className="dialog_body" style={{margin: '0 60px', width: '300px'}}>
                            <div className="dialog_content" style={{textAlign: 'left', width: '300px'}}>
                                <div className="row" style={{marginTop: '36px', textAlign: 'left'}}>
                                    <img src={this.props.luminary.user.image.path} alt="{this.props.luminary.user.firstName}"
                                         style={{width: '44px', height: '44px', float: 'left', borderRadius: '22px'}}/>
                                    <div className="luminary_answer">[{this.props.luminary.user.firstName} {this.props.luminary.user.lastName}]
                                        <br/>{this.props.activity.title}
                                    </div>
                                </div>
                                <div style={{borderBottom: '1px solid #e1e1e1', width: '100%', float: 'left', marginTop: '10px'}}>
                                </div>
                                <div className="row" style={{marginTop: '28px', marginBottom: '36px'}}>
                                    {this.visibleState.reviewSend &&
                                    <div className="row">
                                        <div id="send-question" style={{width: '100%', alignContent:'center'}}>
                                            <div className="title-container">
                                                <p className="title">Ваш отзыв успешно отправлен!</p>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                    {!this.visibleState.reviewSend &&
                                    <form className="concierge-overlay" style={{position: 'relative', width: '300px'}}
                                          onSubmit={this.sendReview}
                                          action="/" method="POST">
                                        <input className="js-email" placeholder="Назание отзыва"
                                               style={{width: '100%', marginBottom: '10px'}} value={this.state.title}
                                               onChange={(e) => this.handleSelectTitleChange(e)}
                                               id="title" name="title" type="text"/>
                                        <Select
                                            style={{width: '100%', top: '5px', marginBottom: '10px'}}
                                            value={this.state.rate}
                                            name="rate" id="rate"
                                            className="sg-f-hdr sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                                            onChange={(e) => this.handleSelectRateChange(e)}
                                            options={this.rate}/>
                                        <textarea className="js-suggestion" name="description"
                                                  style={{
                                                      height: '70px', width: '100%', resize: 'none',
                                                      boxSizing: 'border-box', marginTop: '10px'
                                                  }}
                                                  value={this.state.description}
                                                  onChange={(e) => this.handleSelectDescriptionChange(e)}
                                                  placeholder="Ваш отзыв о впечатлении">
                                        </textarea>
                                        <p className="errorSummary">
                                        </p>
                                        <div className="row">
                                            <div id="send-question" className=" primaryButton button "
                                                 style={{width: '100%'}} tabIndex="0" onClick={this.sendReview}>
                                                <div className="title-container">
                                                    <p className="title">Сохранить</p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewDialog;
