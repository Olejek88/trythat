import {Link} from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import {inject, observer} from 'mobx-react';
import {action} from "mobx/lib/mobx";

@inject('authStore')
@observer
export default class Login extends React.Component {

    componentWillUnmount() {
        this.props.authStore.reset();
    }

    handleEmailChange = e => {
        this.props.authStore.setEmail(e.target.value);
    };
    handlePasswordChange = e => {
        this.props.authStore.setPassword(e.target.value);
    };
    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.authStore.login()
            .then(() => { this.props.history.replace('/')})
            .catch(action((err) => {
                console.log('error '+err);
            }));
    };

    render() {
        const {values, errors, inProgress} = this.props.authStore;

        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">

                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Войти</h1>
                            <p className="text-xs-center">
                                <Link to="register">
                                    Нужен аккаунт?
                                </Link>
                            </p>

                            <ListErrors errors={errors}/>

                            <form onSubmit={this.handleSubmitForm}>
                                <fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={this.handleEmailChange}
                                        />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Пароль"
                                            value={values.password}
                                            onChange={this.handlePasswordChange}
                                        />
                                    </fieldset>

                                    <button className="btn btn-primary pull-xs-right" type="submit"
                                            disabled={inProgress}>
                                        Войти
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
