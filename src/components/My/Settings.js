import ListErrors from '../ListErrors';
import React from 'react';
import ImageUploader from 'react-images-upload';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import Select from 'react-select';
import MyMenu from "./MyMenu";

@inject('userStore', 'countryStore', 'cityStore', 'imageStore')
@observer
class SettingsForm extends React.Component {
    constructor() {
        super();

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            city: '',
            country: '',
            phone: '',
            email: '',
            image: '',
            password: '',

            currentPassword: '',
            repeatPassword: '',
            newPassword: ''
        };

        this.birthDate = {
            day: 1,
            month: 1,
            year: 1970
        };

        this.citiesList = [];
        this.countryList = [];

        this.onDrop = this.onDrop.bind(this);

        this.handleSelectCityChange = (event) => {
            this.setState({city: event});
        };

        this.handleSelectCountryChange = (event) => {
            this.setState({country: event});
        };


        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };

        //this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
        this.handleInputPasswordChange = field => event => {
            this.setState({field: event.target.value});
        };

        this.handleChange = (e) => {
            switch (e.target.name) {
                case 'day':
                    this.birthDate.day = e.target.options[e.target.selectedIndex].value;
                    break;
                case 'month':
                    this.birthDate.month = e.target.options[e.target.selectedIndex].value;
                    break;
                case 'year':
                    this.birthDate.year = e.target.options[e.target.selectedIndex].value;
                    break;
                default:
            }
            this.setState({birthDate: this.birthDate.year+"-"+this.birthDate.month+"-"+this.birthDate.day+" 00:00:00"});
        };

        this.submitForm = ev => {
            ev.preventDefault();
            const user = Object.assign({}, this.state);
            if (!user.password) {
                delete user.password;
            }
            this.props.onSubmitForm(user);
        };

        this.changePasswordForm = ev => {
            ev.preventDefault();
            this.props.onSubmitPasswordForm(this.passwordState);
        };
    }

    onDrop(picture) {
/*
        console.log(picture[0]);
        this.avatar = picture[0].name;
        this.setState({
            image: this.state.image.concat(picture[0])
        });
        const data = new FormData();
        data.append('file', picture[0], picture[0].name);
        this.props.imageStore.createImage(date);
*/
    }

    componentDidMount() {
        let self = this;
        this.props.cityStore.loadCities()
            .then(() => {
                self.citiesList = Array.from(this.props.cityStore.cityRegistry.values()).map(x => ({ label: x.title, value: x.id }));
                self.citiesList.forEach(function(city) {
                    if (city.value===self.props.userStore.currentUser.city_id) {
                        self.setState({city: city});
                    }
                });
            });

        this.props.countryStore.loadCountries()
            .then(() => {
                self.countryList = Array.from(this.props.countryStore.countryRegistry.values()).map(x => ({ label: x.title, value: x.id }));
                self.countryList.forEach(function(country) {
                    if (country.value===self.props.userStore.currentUser.country_id) {
                        self.setState({country: country});
                    }
                });
            });

        if (this.props.userStore.currentUser) {
            let birth = new Date(this.props.userStore.currentUser.birthDate);
            this.birthDate.day = birth.getDay();
            this.birthDate.month = birth.getMonth();
            this.birthDate.year = birth.getFullYear();
            Object.assign(this.state, {
                id: this.props.userStore.currentUser.id || '',
                image: this.props.userStore.currentUser.image || '',
                firstName: this.props.userStore.currentUser.firstName || '',
                lastName: this.props.userStore.currentUser.lastName || '',
                birthDate: this.props.userStore.currentUser.birthDate || '',
                email: this.props.userStore.currentUser.email || '',
                phone: this.props.userStore.currentUser.phone || '',
                password: this.props.userStore.currentUser.password || ''
            });
        }
    }

    render() {
        return (
            <div className="view-frame">
                <div id="main-detail" className="account-page desktop">
                    <div id="account-content">
                        <div style={{borderBottom: '1px solid #aaaaaa'}}>
                            <h2 className="account-header sg-f-dspl-m">Редактировать профиль </h2>
                        </div>
                        <div id="profile" className="shadow-inputbox">
                            <form onSubmit={this.submitForm} name="profileForm" id="profileForm" action="/"
                                  method="POST" className="ng-pristine ng-valid">
                                <div className="row-flow">
                                    <div className="sibs">
                                        <label className="required">Фотография</label>
                                    </div>
                                    <div className="sibs emailInput">
                                        <img src={this.avatar} style={{width: '200px'}} alt={""}/>
                                        <ImageUploader
                                            withIcon={true}
                                            withPreview={true}
                                            buttonText='Выберите аватар'
                                            onChange={this.onDrop}
                                            singleImage={true}
                                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                            maxFileSize={5242880}
                                            label={'Максимальный размер файла: 5Мб [gif,jpg,png]'}
                                        />
                                    </div>
                                </div>
                                <div className="row-flow">
                                    <div className="sibs">
                                        <label htmlFor="emailAddress" className="required">Е-мэйл
                                            <span className="required">*</span>
                                        </label>
                                    </div>
                                    <div className="sibs emailInput">
                                        <input style={{background: '#FFF'}}
                                               type="email"
                                               name="email"
                                               disabled="disabled"
                                               placeholder="Email"
                                               value={this.state.email}
                                               onChange={this.updateState('email')}/>
                                    </div>
                                </div>
                                <div className="row-flow">
                                    <div className="sibs">
                                        <label htmlFor="firstName" className="required">Имя
                                            <span className="required">*</span></label>
                                    </div>
                                    <div className="sibs">
                                        <input type="text"
                                               maxLength="50"
                                               name="firstName"
                                               id="firstName"
                                               value={this.state.firstName}
                                               onChange={this.updateState('firstName')}/>
                                    </div>
                                </div>
                                <div className="row-flow">
                                    <div className="sibs">
                                        <label htmlFor="lastName">Фамилия
                                            <span className="required">*</span></label></div>
                                    <div className="sibs">
                                        <input type="text"
                                               maxLength="50"
                                               name="lastName"
                                               id="lastName"
                                               value={this.state.lastName}
                                               onChange={this.updateState('lastName')}/>
                                    </div>
                                </div>

                                <div className="row-flow">
                                    <label htmlFor="birthDate">Дата рождения</label>
                                    <select className="js-month-dropdown" name="month"
                                            value={this.birthDate.month}
                                            onChange={this.handleChange}
                                            style={{marginRight: '2px', width: '118px'}}>
                                        <option value="1">Январь</option>
                                        <option value="2">Февраль</option>
                                        <option value="3">Март</option>
                                        <option value="4">Апрель</option>
                                        <option value="5">Май</option>
                                        <option value="6">Июнь</option>
                                        <option value="7">Июль</option>
                                        <option value="8">Август</option>
                                        <option value="9">Сентябрь</option>
                                        <option value="10">Октябрь</option>
                                        <option value="11">Ноябрь</option>
                                        <option value="12">Декабрь</option>
                                    </select>
                                    <select className="js-day-dropdown" name="day"
                                            value={this.birthDate.day}
                                            onChange={this.handleChange}
                                            style={{marginRight: '2px', width: '68px'}}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                    <select className="js-year-dropdown" name="year" style={{width: '85px'}}
                                            value={this.birthDate.year}
                                            onChange={this.handleChange}>
                                        <option value="1918">1918</option>
                                        <option value="1919">1919</option>
                                        <option value="1920">1920</option>
                                        <option value="1921">1921</option>
                                        <option value="1922">1922</option>
                                        <option value="1923">1923</option>
                                        <option value="1924">1924</option>
                                        <option value="1925">1925</option>
                                        <option value="1926">1926</option>
                                        <option value="1927">1927</option>
                                        <option value="1928">1928</option>
                                        <option value="1929">1929</option>
                                        <option value="1930">1930</option>
                                        <option value="1931">1931</option>
                                        <option value="1932">1932</option>
                                        <option value="1933">1933</option>
                                        <option value="1934">1934</option>
                                        <option value="1935">1935</option>
                                        <option value="1936">1936</option>
                                        <option value="1937">1937</option>
                                        <option value="1938">1938</option>
                                        <option value="1939">1939</option>
                                        <option value="1940">1940</option>
                                        <option value="1941">1941</option>
                                        <option value="1942">1942</option>
                                        <option value="1943">1943</option>
                                        <option value="1944">1944</option>
                                        <option value="1945">1945</option>
                                        <option value="1946">1946</option>
                                        <option value="1947">1947</option>
                                        <option value="1948">1948</option>
                                        <option value="1949">1949</option>
                                        <option value="1950">1950</option>
                                        <option value="1951">1951</option>
                                        <option value="1952">1952</option>
                                        <option value="1953">1953</option>
                                        <option value="1954">1954</option>
                                        <option value="1955">1955</option>
                                        <option value="1956">1956</option>
                                        <option value="1957">1957</option>
                                        <option value="1958">1958</option>
                                        <option value="1959">1959</option>
                                        <option value="1960">1960</option>
                                        <option value="1961">1961</option>
                                        <option value="1962">1962</option>
                                        <option value="1963">1963</option>
                                        <option value="1964">1964</option>
                                        <option value="1965">1965</option>
                                        <option value="1966">1966</option>
                                        <option value="1967">1967</option>
                                        <option value="1968">1968</option>
                                        <option value="1969">1969</option>
                                        <option value="1970">1970</option>
                                        <option value="1971">1971</option>
                                        <option value="1972">1972</option>
                                        <option value="1973">1973</option>
                                        <option value="1974">1974</option>
                                        <option value="1975">1975</option>
                                        <option value="1976">1976</option>
                                        <option value="1977">1977</option>
                                        <option value="1978">1978</option>
                                        <option value="1979">1979</option>
                                        <option value="1980">1980</option>
                                        <option value="1981">1981</option>
                                        <option value="1982">1982</option>
                                        <option value="1983">1983</option>
                                        <option value="1984">1984</option>
                                        <option value="1985">1985</option>
                                        <option value="1986">1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                        <option value="1989">1989</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                    </select>
                                </div>

                                <div className="row-flow">
                                    <div className="sibs">
                                        <label htmlFor="city">Город проживания</label></div>
                                    <div className="sibs" style={{width: '280px'}}>
                                        <Select
                                            style={{width: '280px'}}
                                            id="city"
                                            name="city"
                                            value={this.state.city}
                                            placeHolder={"Выберите город"}
                                            className="language_select desktop"
                                            onChange={(e) => this.handleSelectCityChange(e)}
                                            options={this.citiesList}
                                        />
                                    </div>
                                </div>

                                <div className="row-flow">
                                    <div className="sibs">
                                        <label htmlFor="UserEx_countryId">Страна</label></div>
                                    <div className="sibs" style={{width: '280px'}}>
                                        <Select
                                            style={{width: '280px'}}
                                            name="countryId"
                                            placeHolder={"Выберите страну"}
                                            onChange={this.handleSelectCountryChange}
                                            value={this.state.country}
                                            className="country_select desktop"
                                            options={this.countryList}
                                        />
                                    </div>
                                </div>

                                <div className="row-flow">
                                    <div className="sibs">
                                        <label htmlFor="cellPhoneNumber">Номер Телефона</label></div>
                                    <div className="sibs">
                                        <input
                                            type="text"
                                            maxLength="20"
                                            name="cellPhoneNumber"
                                            id="cellPhoneNumber"
                                            value={this.state.phone}
                                            onChange={this.updateState('phone')}/>
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
                                            style={{width: '282px'}}
                                            disabled={this.props.userStore.updatingUser}>
                                            <p className="title">Сохранить изменения</p>
                                        </button>

                                    </div>
                                </div>
                                <input name="profileForm" value="" type="hidden"/>
                            </form>
                        </div>

{/*
                        <div className="row-flow">
                            <h3 className="sg-f-ttl">Оповещения</h3>
                        </div>
                        <div id="emailPreference" className="row-flow">
                            <form name="preferenceForm" id="preferenceForm" action="/" method="POST"
                                  className="ng-pristine ng-valid">
                                <input value="23b7350934910f2efee698549c46e03563907c7c" name="stk" type="hidden"/>
                                <div className="row-flow">
                                    <div className="sibs"
                                         style={{
                                             textAlign: 'center',
                                             display: 'inline-block',
                                             margin: '0',
                                             width: '160px'
                                         }}>
                                        <input id="emailOptedIn" name="emailOptedIn" value="1"
                                               type="checkbox" defaultChecked/>
                                    </div>
                                    <div className="sibs" style={{display: 'inline-block', width: '280px'}}>
                                        <label style={{fontWeight: '500', color: '#888', width: '100%'}}
                                               htmlFor="emailOptedIn">
                                            Пожалуйста держите меня в курсе новых впечатлений </label>
                                    </div>
                                </div>
                                <div className="row-flow">
                                    <div className="sibs">
                                        <label></label>
                                    </div>
                                    <div className="sibs">
                                        <button
                                            id="changeEmail"
                                            className="medium primaryButton button title-container"
                                            type="submit"
                                            style={{width: '282px'}}
                                            disabled={this.props.userStore.updatingUser}>
                                            <p className="title">Обновить</p>
                                        </button>
                                    </div>
                                    <input value="" name="preferenceForm" type="hidden"/>
                                </div>
                            </form>
                        </div>
*/}

                        <div className="row-flow">
                            <h3 className="sg-f-ttl">Пароль</h3>
                        </div>

                        <div id="changePassword" className="shadow-pwdbox row-flow">
                            <form onSubmit={this.changePasswordForm} name="passwordForm" id="passwordForm" action="/"
                                  method="POST" className="ng-pristine ng-valid">
                                <div className="row-flow" style={{marginBottom: '0px'}}>
                                    <div className="sibs">
                                        <label htmlFor="currentPassword">Текущий пароль:</label>
                                    </div>
                                    <div className="sibs">
                                        <input
                                            maxLength="50"
                                            name="currentPassword"
                                            id="currentPassword"
                                            type="text"
                                            required="required"
                                            placeholder="Текущий пароль"
                                            value={this.state.currentPassword}
                                            onChange={this.handleInputPasswordChange('currentPassword')}/>
                                        <div className="swapper" style={{float: 'right'}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-flow">
                                    <div className="sibs">
                                        <label style={{margin: '0px'}}>&nbsp;</label>
                                    </div>
                                    <div className="sibs input_container">
                                        <div className="swapper" style={{float: 'right'}}>
                                            <a href="/" id="forgot-password" className="fo-13-n-s3">Забыли пароль?</a>
                                        </div>
                                        <div style={{clear: 'both'}}>
                                            <p id="login_error" className="sg-c-error"
                                               style={{paddingTop: '5px', display: 'none'}}></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-flow">
                                    <div className="sibs">
                                        <label htmlFor="password">Новый пароль:</label>
                                    </div>
                                    <div className="sibs">
                                        <input
                                            maxLength="50"
                                            name="newPassword"
                                            id="newPassword"
                                            type="text"
                                            required="required"
                                            placeholder="Новый пароль"
                                            value={this.state.newPassword}
                                            onChange={this.handleInputPasswordChange('newPassword')}/>
                                    </div>
                                </div>
                                <div className="row-flow" style={{marginTop: '27px'}}>
                                    <div className="sibs">
                                        <label htmlFor="password2">Повторите пароль:</label>
                                    </div>
                                    <div className="sibs">
                                        <input
                                            maxLength="50"
                                            name="repeatPassword"
                                            id="repeatPassword"
                                            type="text"
                                            required="required"
                                            placeholder="Повторите пароль"
                                            onChange={this.handleInputPasswordChange('repeatPassword')}
                                            value={this.state.repeatPassword}/>
                                    </div>
                                </div>
                                <div className="row-flow">
                                    <div className="sibs">
                                    </div>
                                    <div className="sibs">
                                        <button
                                            id="changePwd"
                                            className="medium primaryButton button title-container"
                                            type="submit"
                                            style={{width: '282px'}}
                                            disabled={this.props.userStore.updatingUser}>
                                            <p className="title">Сохранить изменения</p>
                                        </button>
                                    </div>
                                </div>
                                <input value="" name="passwordForm" type="hidden"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

@inject('userStore', 'authStore')
@observer
@withRouter
class Settings extends React.Component {
    render() {
        return (
            <div className="container page">
                <div className="row">
                    <div className="page-left-col" style={{width: '15%'}}>
                        <MyMenu/>
                    </div>
                    <div className="page-right-col" style={{width: '85%', marginTop: '50px', marginLeft: '15%'}}>
                        <ListErrors errors={this.props.userStore.updatingUserErrors}/>
                        <SettingsForm
                            currentUser={this.props.userStore.currentUser}
                            onSubmitForm={
                                user => {
                                    user.country = {id: user.country.value, title: user.country.label};
                                    user.city = {id: user.city.value, title: user.city.label};
                                    console.log(user.id);
                                    this.props.userStore.updateUser(user)
                                }
                            }
                            onSubmitPasswordForm={user => this.props.userStore.changeUserPassword(user,
                                this.currentPassword,
                                this.repeatPassword,
                                this.newPassword)}/>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
