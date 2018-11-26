import ListErrors from '../ListErrors';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import MyMenu from "./MyMenu";

@inject('userStore', 'luminaryStore')
@observer
@withRouter
class Luminary extends React.Component {
    constructor() {
        super();

        this.state = {
            id: '',
            description: '',
            shortDescription: '',
            user_id: '',
            user: ''
        };

        this.submitForm = ev => {
            ev.preventDefault();
            const luminary = Object.assign({}, this.state);
            this.props.luminaryStore.updateLuminary(luminary);
        };

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };
    }

    componentDidMount() {
        if (!this.props.userStore.currentLuminary)
            this.props.history.push("/");
        this.setState({user: this.props.userStore.getUser()});
        this.setState({user_id: this.props.userStore.currentUser.id});
        this.setState({id: this.props.userStore.currentLuminary.id});
        this.setState({description: this.props.userStore.currentLuminary.description});
        this.setState({shortDescription: this.props.userStore.currentLuminary.shortDescription});
    }

    componentDidUpdate() {
        //console.log(this.props.userStore.currentUser);
        //console.log(this.props.userStore.currentLuminary);
    }

    render() {
        return (
            <div className="container page">
                <div className="row">
                    <div className="page-left-col" style={{width: '15%'}}>
                        <MyMenu/>
                    </div>
                    <div className="page-right-col" style={{width: '85%', marginTop: '50px', marginLeft: '15%'}}>
                        <ListErrors errors={this.props.userStore.updatingUserErrors}/>
                        <hr/>
                        <div className="view-frame">
                            <div id="main-detail" className="account-page desktop">
                                <div id="account-content">
                                    <div style={{borderBottom: '1px solid #aaaaaa'}}>
                                        <h2 className="account-header sg-f-dspl-m">Редактировать настройки</h2>
                                    </div>
                                    <div id="profile" className="shadow-inputbox">
                                        <form onSubmit={this.submitForm} name="profileForm" id="profileForm" action="/"
                                              method="POST" className="ng-pristine ng-valid">
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="firstName" className="required">Краткое описание
                                                        <span className="required">*</span></label>
                                                </div>
                                                <div className="sibs">
                                                        <textarea
                                                            rows="2"
                                                            cols="80"
                                                            name="shortDescription"
                                                            id="shortDescription"
                                                            value={this.state.shortDescription}
                                                            onChange={this.updateState('shortDescription')}/>
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="firstName" className="required">Описание
                                                        <span className="required">*</span></label>
                                                </div>
                                                <div className="sibs">
                                                        <textarea
                                                            rows="10"
                                                            cols="100"
                                                            name="description"
                                                            id="description"
                                                            value={this.state.description}
                                                            onChange={this.updateState('description')}/>
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label></label>
                                                </div>
                                                <div className="sibs">
                                                    <button
                                                        id="changeProfile"
                                                        className="medium primaryButton button title-container"
                                                        type="submit"
                                                        style={{width: '282px'}}>
                                                        <p className="title">Сохранить изменения</p>
                                                    </button>

                                                </div>
                                            </div>
                                            <input name="profileForm" value="" type="hidden"/>
                                        </form>
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

export default Luminary;
