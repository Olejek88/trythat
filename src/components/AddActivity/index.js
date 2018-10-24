import React from 'react';
import ListErrors from './../ListErrors';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Select from 'react-select';
//import 'react-select/dist/react-select.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import {inject} from "mobx-react/index";
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import activityCategoryStore from "../../stores/activityCategoryStore";
import categoryStore from "../../stores/categoryStore";
import occasionStore from "../../stores/occasionStore";
import trendingStore from "../../stores/trendingStore";

let minCustomers = 1;
let maxCustomers = 20;

@observer
@withRouter
@inject('activityCategoryStore', 'categoryStore', 'occasionStore', 'trendingStore')
class AddActivityForm extends React.Component {
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
            images: [],
            image: null,
            duration: ''
        };

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };

        this.onLoadPictures = this.handleChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.click = this.click.bind(this);

        this.handleSelectCategoryChange = (event) => {
            this.setState({ category: event.value });
        };

        this.handleSelectActivityCategoryChange = (event) => {
            this.setState({ activityCategory: event.value });
        };

        this.handleSelectTrendingChange = (event) => {
            this.setState({ trending: event.value });
        };

        this.handleSelectOccasionChange = (event) => {
            this.setState({ occasion: event.value });
        };

        this.submitForm = ev => {
            ev.preventDefault();
            const activity = Object.assign({}, this.state);
            this.props.onSubmitForm(activity);

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
        this.setState({ startDate: date });
    }

    handleEndDateChange(date) {
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
                if (this.state) {
                    Object.assign(this.state, {
                        category: '1',
                        activityCategory: '1',
                        occasion: '1',
                        trending: '1'
                    });
                }
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
                                                    <TagsInput id="tags"
                                                               value={this.state.tags}
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
                                                        style={{width: '280px'}}
                                                        name="category"
                                                        value={this.state.category}
                                                        className="language_select desktop"
                                                        onChange={this.handleSelectCategoryChange}
                                                        options={categoryStore.loadCategories()}
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
                                                        style={{width: '280px'}}
                                                        name="activityCategory"
                                                        value={this.state.activityCategory}
                                                        className="language_select desktop"
                                                        onChange={this.handleSelectActivityCategoryChange}
                                                        options={activityCategoryStore.loadActivityCategories()}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="occasion" className="required">Случай</label>
                                                </div>
                                                <div className="sibs">
                                                    <Select
                                                        style={{width: '280px'}}
                                                        name="occasion"
                                                        value={this.state.occasion}
                                                        className="language_select desktop"
                                                        onChange={this.handleSelectOccasionChange}
                                                        options={occasionStore.loadOccasions()}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="trending" className="required">Тренд</label>
                                                </div>
                                                <div className="sibs">
                                                    <Select
                                                        style={{width: '280px'}}
                                                        name="trending"
                                                        value={this.state.trending}
                                                        className="language_select desktop"
                                                        onChange={this.handleSelectTrendingChange}
                                                        options={trendingStore.loadTrends()}
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
                                                    <label htmlFor="customers" className="required">Количество участников</label>
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
                                                        options={this.state.durations}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row-flow">
                                                <div className="sibs">
                                                    <label htmlFor="" className="required">Изображения</label>
                                                </div>
                                                <div className="sibs">
                                                    <ImagesUploader
                                                        url="http://localhost:9090/multiple"
                                                        optimisticPreviews
                                                        images={this.state.images}
                                                        onLoadEnd={
                                                            console.log("finished")
                                                        }
                                                        label="Загрузить изображения"
                                                    />
{/*
                                                    <input type='file' id="file" style={{display: 'none'}} />
                                                    <button className="medium primaryButton button title-container"
                                                            style={{height:'30px'}}
                                                            onClick={this.click}>
                                                        <p className="title">Добавить изображение</p>
                                                    </button>
                                                    <img style={{maxWidth: '500px'}} src={this.state.image} />
*/}
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

@inject('activityStore')
@withRouter
@observer
class AddActivity extends React.Component {
    render() {

        return (
            <div className="container page">
                <div className="row">

                    <ListErrors errors={this.props.activityStore.addActivityErrors}/>

                    <AddActivityForm
                        onSubmitForm={activity => this.props.activityStore.updateActivity(activity)}/>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default AddActivity;
