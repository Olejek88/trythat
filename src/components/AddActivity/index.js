import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import {inject} from "mobx-react/index";

//var Select = require('react-select');

let optionsCategory = [
    {value: '1', label: 'Еда и кулинария'},
    {value: '2', label: 'Туризм'}
];

let optionsActitvityCategory = [
    {value: '1', label: 'Индивидуальные занятия'},
    {value: '2', label: 'Корпоративные события'}
];

let occasionCategory = [
    {value: '1', label: 'На свадьбу'},
    {value: '2', label: 'Юбилей'}
];

let trendingCategory = [
    {value: '1', label: 'Недорогие'},
    {value: '2', label: 'Новые'},
    {value: '3', label: 'Популярные'}
];

let durations = [
    {value: '1', label: '1 Час'},
    {value: '2', label: '2 Часа'}
];

let minCustomers = 1;
let maxCustomers = 20;

@observer
@withRouter
@inject('activityStore')
class AddActivity extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            tags: [],
            luminary: '',
            category: '',
            activityCategory: '',
            occasion: '',
            trending: '',
            startDate: moment(),
            endDate: moment(),
            customers: {
                min: minCustomers,
                max: maxCustomers
            },
            images: '',
            image: null,
            duration: ''
        };

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.click = this.click.bind(this);

        this.submitForm = ev => {
            ev.preventDefault();

            //const activity = Object.assign({}, this.state);
            //this.props.onSubmitForm(activity);
        };
    }

    click (){
        document.getElementById('file').click();
    }

    handleTagsChange (tags) {
        this.setState({ tags });
    }

    handleStartDateChange(date) {
        console.log(date);
        this.setState({ startDate: date });
    }

    handleEndDateChange(date) {
        console.log(date);
        this.setState({ endDate: date });
    }

    handleFileChange(event) {
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
        })
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        //file: URL.createObjectURL(event.target.files[0]);
    }

    handleValuesChange(component, values) {
        this.setState({
            customers: values,
        });
    }

    componentWillMount() {
        /*
                if (this.props.) {
                    Object.assign(this.state, {
                        image: this.props.userStore.currentUser.image || '',
                        firstName: this.props.userStore.currentUser.firstName || '',
                        lastName: this.props.userStore.currentUser.lastName || '',
                        birthDate: this.props.userStore.currentUser.birthDate || '',
                        email: this.props.userStore.currentUser.email || '',
                        location: this.props.userStore.currentUser.location || '',
                        country: this.props.userStore.currentUser.country || '',
                        phone: this.props.userStore.currentUser.phone || '',
                        password: this.props.userStore.currentUser.password || ''
                    });
                }
        */
    }

    componentDidMount() {
        //const slug = this.props.match.params.id;
        //this.props.articlesStore.loadArticle(slug, { acceptCached: true });
        //this.props.commentsStore.setArticleSlug(slug);
        //this.props.commentsStore.loadComments();
    }

    handleDeleteActivity = slug => {
        /*
                this.props.activityStore.deleteActivity(slug)
                    .then(() => this.props.history.replace('/'));
        */
    };

    render() {
        return (
            <div id="content">
                <div className="product-section ">
                    <div className="inner-product-section"
                         style={{width: '100%', maxWidth: '1124px', margin: '0 auto'}}>
                        <form onSubmit={this.submitForm}>
                            <div className="view-frame">
                                <div id="main-detail" className="account-page desktop">
                                    <div id="account-content">
                                        <div style={{borderBottom: '1px solid #aaaaaa'}}>
                                            <h2 className="account-header sg-f-dspl-m">Добавить мероприятие</h2>
                                        </div>
                                        <div id="profile" className="shadow-inputbox">
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="title" className="required">Название
                                                        <span className="required">*</span>
                                                    </label>
                                                </div>
                                                <div className="sibs">
                                                    <input style={{background: '#FFF'}}
                                                           type="text"
                                                           name="title"
                                                           placeholder="Название"
                                                           value={this.state.title}
                                                           onChange={this.updateState('title')}/>
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
                                                    <label htmlFor="tags" className="required">Теги</label>
                                                </div>
                                                <div className="sibs">
                                                    <TagsInput id="tags" value={this.state.tags}
                                                               placeholder={"Добавьте теги, характеризующие ваше предложение"}
                                                               onChange={this.handleTagsChange}/>
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="category" className="required">Категория</label>
                                                </div>
                                                <div className="sibs">
                                                    <Select
                                                        name="category"
                                                        clearable={false}
                                                        value="1"
                                                        style={{width: '300px'}}
                                                        options={optionsCategory}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="activityCategory"
                                                           className="required">Тип</label>
                                                </div>
                                                <div className="sibs">
                                                    <Select
                                                        name="activityCategory"
                                                        style={{width: '300px'}}
                                                        clearable={false}
                                                        value="1"
                                                        options={optionsActitvityCategory}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="occasion" className="required">Случай</label>
                                                </div>
                                                <div className="sibs">
                                                    <Select
                                                        name="occasion"
                                                        style={{width: '300px'}}
                                                        value="1"
                                                        clearable={false}
                                                        options={occasionCategory}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="trending" className="required">Тренд</label>
                                                </div>
                                                <div className="sibs">
                                                    <Select
                                                        name="trending"
                                                        style={{width: '300px'}}
                                                        value="1"
                                                        clearable={false}
                                                        options={trendingCategory}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="startDate" className="required">Дата начала
                                                        действия</label>
                                                </div>
                                                <div className="sibs">
                                                    <DatePicker
                                                        selected={this.state.startDate}
                                                        onChange={this.handleStartDateChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="endDate" className="required">Дата окончания
                                                        действия</label>
                                                </div>
                                                <div className="sibs">
                                                    <DatePicker
                                                        selected={this.state.endDate}
                                                        onChange={this.handleEndDateChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="customers" className="required">Количество
                                                        участников</label>
                                                </div>
                                                <div className="sibs" style={{width: '300px'}}>
                                                    <InputRange
                                                        maxValue={20}
                                                        minValue={0}
                                                        value={this.state.customers}
                                                        style={{width: '300px'}}
                                                        onChange={value => this.setState({ customers: value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="durations"
                                                           className="required">Длительность</label>
                                                </div>
                                                <div className="sibs">
                                                    <Select
                                                        name="duration"
                                                        value="1"
                                                        style={{width: '300px'}}
                                                        clearable={false}
                                                        options={durations}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="" className="required">Изображение</label>
                                                </div>
                                                <div className="sibs">
                                                    <input type='file' id="file" style={{display: 'none'}} />
                                                    <button className="medium primaryButton button title-container"
                                                            style={{height:'30px'}}
                                                            onClick={this.click}>
                                                        <p className="title">Добавить изображение</p>
                                                    </button>
                                                    <img style={{maxWidth: '500px'}} src={this.state.image} />
                                                </div>
                                            </div>

                                            <div className="row-flow">
                                                <div className="sibs">
                                                </div>
                                                <div className="sibs">
                                                    <button id="addActivity"
                                                            type="submit"
                                                            style={{width: '282px'}}
                                                            className="medium primaryButton button title-container">
                                                        <p className="title">Сохранить изменения</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <input name="profileForm" value="" type="hidden"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddActivity;
