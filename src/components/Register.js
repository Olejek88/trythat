import {Link} from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import {inject} from 'mobx-react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        };
    }

    componentWillUnmount() {
        this.props.authStore.reset();
    }

    handleEmailChange = e => {
        this.props.authStore.setEmail(e.target.value);
        this.setState({email: e.target.value});
    };
    handlePasswordChange = e => {
        this.props.authStore.setPassword(e.target.value);
        this.setState({pass: e.target.value});
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.authStore.register()
            .then(() => this.props.history.replace('/#/login'));
    };

    render() {
        const {errors, inProgress} = this.props.authStore;

        return (
            <div className="auth-page" style={{marginBottom: '10px'}}>
                <div className="container page">
                    <div className="row">

                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Зарегистрироваться</h1>
                            <p className="text-xs-center">
                                <Link to="login">
                                    Уже есть аккаунт?
                                </Link>
                            </p>

                            <ListErrors errors={errors}/>

                            <form onSubmit={this.handleSubmitForm}>
                                <fieldset>

                                    {/*
                                    <fieldset className="form-group">
                                        <input className="form-control form-control-lg"
                                               type="text"
                                               placeholder="Имя пользователя"
                                               value={values.username}
                                               onChange={this.handleUsernameChange}
                                        />
                                    </fieldset>
*/}

                                    <fieldset className="form-group">
                                        <input className="form-control form-control-lg"
                                               type="email"
                                               placeholder="Email"
                                               value={this.state.email}
                                               onChange={this.handleEmailChange}
                                        />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Пароль"
                                            value={this.state.password}
                                            onChange={this.handlePasswordChange}
                                        />
                                    </fieldset>

                                    <button className="btn btn-lg btn-primary pull-xs-right"
                                            type="submit"
                                            disabled={inProgress}>
                                        Подтвердить
                                    </button>

                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('authStore')(Register);