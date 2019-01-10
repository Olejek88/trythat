import React from 'react';
import {inject} from "mobx-react/index";
import {withRouter} from "react-router-dom";

class BannerWantLuminary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            status: false,
            message: ''
        };
    }

    handleEmailChange = e => {
        this.setState({email: e.target.value});
    };

    handleClickBecome = () => {
        //  отправляем заявку
        let luminary = {
            user_id: this.props.userStore.currentUser.id,
            rating: 0,
            total: 0,
            verified: 0,
            shortDescription: '',
            description: ''
        };
        this.props.luminaryStore.createLuminary(luminary).then((return_luminary) => {
            console.log(return_luminary);
            if (return_luminary && return_luminary.id>0) {
                this.setState({status: true});
                this.setState({message: 'Ваша заявка отправлена'});
            } else {
                this.setState({message: 'Ваша заявка уже на рассмотрении'});
            }
        });
        this.setState({message: 'Ваша заявка уже на рассмотрении'});
        this.setState({status: true});
    };

    componentWillMount() {
        if (!this.props.userStore.currentUser || this.props.userStore.currentUser.id===0) {
            this.props.history.replace('/login');
        }
        this.setState({email: this.props.userStore.currentUser.email});
    }

    render() {
        return (
            <div className="band signup-full" style={{position: 'relative', width: '100%'}}>
                <div className="background-con">
                    <div className="dark-img-overlay">
                    </div>
                    <div className="signup-top center">
                        <h3>Станьте нашим партнером</h3>
                        <div className="sub-header">
                            <p className="desc">
                                Отправляя эту заявку вы соглашаетесь с условиями использования сервиса. На нашей
                                платформе мы постоянно ищем талантливых исполнителей. Заполняйте свой профиль и добавляйте ваши
                                предложения. </p>
                        </div>
                    </div>
                </div>
                {this.state.status===false &&
                <div className="landingPage center custom-form">
                    <div className="sec-header" style={{marginBottom: '10px', color: '#fff'}}>Введите ваш е-мэйл здесь
                    </div>
                    <div className="f-row js-err-con" style={{marginBottom: '24px'}}>
                        <input id="email" aria-label="Email" placeholder="Email" className="longBox"
                               aria-required="true" required="required" type="text" value={this.state.email}
                               onChange={this.handleEmailChange}
                               name="emailAddress"/>
                    </div>
                    <div style={{clear: 'both'}}>
                    </div>
                    <div className="js-err-con" onClick={this.handleClickBecome}>
                        <div className="login-btn primaryButton button button_radius">
                            <div className="title-container"><p className="title">Отправить</p></div>
                        </div>
                    </div>
                </div>
                }
                {this.state.message &&
                <div className="landingPage center custom-form">
                    <div className="sec-header" style={{marginBottom: '10px', color: '#fff'}}>{this.state.message}</div>
                </div>
                }
            </div>
        )
    }
}
export default inject('userStore','luminaryStore')(withRouter(BannerWantLuminary));
