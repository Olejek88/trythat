import React from 'react';
import ListErrors from '../ListErrors';
import {observer, inject} from 'mobx-react';
import {withRouter} from "react-router-dom";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import MyMenu from "./MyMenu";
import ActivityListingItem from "./ActivityListingItem";

@inject('activityCategoryStore', 'activityListingStore', 'activityStore', 'categoryStore', 'occasionStore', 'trendingStore', 'tagStore', 'userStore')
@observer
@withRouter
class AddActivity extends React.Component {
    constructor() {
        super();
        this.minCustomers = 1;
        this.maxCustomers = 20;

        this.activity = null;

        this.state = {
            title: '',
            description: '',
            shortDescription: '',
            tags: [],
            luminary: '',
            category: '',
            activityCategory: '',
            luminary_id: '',
            category_id: '',
            activityCategory_id: '',
            occasion: '',
            trending: '',
            occasion_id: '',
            trending_id: '',
            startDate: moment(),
            endDate: moment(),
            customers: {
                min: this.minCustomers,
                max: this.maxCustomers
            },
            images: [],
            image: null,
            categoryList: [],
            activityCategoryList: [],
            occasionList: [],
            trendsList: [],
            activityListRows: []
        };

        this.activityListRows = [];
        this.categoryList = [];
        this.activityCategoryList = [];
        this.occasionList = [];
        this.trendsList = [];

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
            this.setState({category: event});
            this.setState({category_id: event.value});
            this.setState({luminary_id: this.props.userStore.currentLuminary.id});
        };

        this.handleSelectActivityCategoryChange = (event) => {
            this.setState({activityCategory: event});
            this.setState({activityCategory_id: event.value});
        };

        this.handleSelectTrendingChange = (event) => {
            this.setState({trending: event});
            this.setState({trending_id: event.value});
        };

        this.handleSelectOccasionChange = (event) => {
            this.setState({occasion: event});
            this.setState({occasion_id: event.value});
        };

        this.submitForm = ev => {
            ev.preventDefault();

            let activity = {
                title: this.state.title,
                images: this.state.images,
                luminary_id: this.props.userStore.currentLuminary.id,
                shortDescription: this.state.shortDescription,
                description: this.state.description,
                tags: this.state.tags,
                category_id: this.state.category_id,
                activity_category_id: this.state.activityCategory_id,
                occasions: [this.state.occasion],
                trendings: [this.state.trending],
                start_date: moment(this.state.startDate).format('YYYY-MM-DD HH:mm'),
                end_date: moment(this.state.endDate).format('YYYY-MM-DD HH:mm'),
                min_customers: this.state.customers.min,
                max_customers: this.state.customers.max
            };
            this.props.activityStore.createActivity(activity);
        };
    }

    click() {
        document.getElementById('file').click();
    }

    handleTagsChange(tags) {
        this.setState({tags: tags});
        console.log(tags);
    }

    handleStartDateChange(date) {
        this.setState({startDate: date});
    }

    handleEndDateChange(date) {
        this.setState({endDate: date});
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

    componentDidMount() {
        let self = this;
        let activity_id = this.props.match.params['activity_id'];
        if (activity_id) {
            this.props.activityStore.activitiesRegistry.forEach(function (activity) {
                if (activity.id == activity_id) {
                    self.activity = activity;
                }
            });


            if (this.activity) {
                if (this.activity.tags) {
                    this.activity.tags.forEach(function (tag) {
                        self.state.tags[self.state.tags.length] = tag.title;
                    });
                }

                this.props.activityListingStore.loadActivityListing(this.activity).then(() => {
                    Array.from(this.props.activityListingStore.activityListingRegistry.values())
                        .forEach(function (activity_list, i) {
                            console.log(activity_list);
                            self.activityListRows.push(<ActivityListingItem activity={self.activity}
                                                                            activity_listing={activity_list}
                                                                            key={i}/>);
                        });
                    self.setState({activityListRows: self.activityListRows});
                });

                this.setState({title: this.activity.title});
                this.setState({description: this.activity.description});
                this.setState({shortDescription: this.activity.shortDescription});
                this.setState({luminary: this.activity.luminary});
                this.setState({startDate: moment(this.activity.startDate)});
                this.setState({endDate: moment(this.activity.endDate)});
                this.setState({images: this.activity.images});
                this.setState({
                    customers: {
                        min: this.activity.min_customers,
                        max: this.activity.max_customers
                    }
                });
            }
        }

        this.props.categoryStore.loadCategories()
            .then(() => {
                self.categoryList = Array.from(this.props.categoryStore.categoryRegistry.values())
                    .map(x => ({label: x.title, value: x.id}));
                if (this.activity) {
                    self.categoryList.forEach(function (category) {
                        if (category.value === self.activity.category.id) {
                            self.setState({category: category});
                        }
                    });
                }
                this.setState({categoryList: self.categoryList});
            });
        this.props.activityCategoryStore.loadActivityCategories()
            .then(() => {
                self.activityCategoryList = Array.from(this.props.activityCategoryStore.activityCategoryRegistry.values())
                    .map(x => ({label: x.title, value: x.id}));
                if (this.activity) {
                    self.activityCategoryList.forEach(function (category) {
                        if (category.value === self.activity.activityCategory.id) {
                            self.setState({activityCategory: category});
                        }
                    });
                }
                this.setState({activityCategoryList: self.activityCategoryList});
            });
        this.props.occasionStore.loadOccasions()
            .then(() => {
                self.occasionList = Array.from(this.props.occasionStore.occasionRegistry.values())
                    .map(x => ({label: x.title, value: x.id}));
                if (this.activity && this.activity.occasion) {
                    self.occasionList.forEach(function (category) {
                        if (category.value === self.activity.occasion.id) {
                            self.setState({occasion: category});
                        }
                    });
                }
                this.setState({occasionList: self.occasionList});
            });
        this.props.trendingStore.loadTrends()
            .then(() => {
                self.trendsList = Array.from(this.props.trendingStore.trendingRegistry.values())
                    .map(x => ({label: x.title, value: x.id}));
                if (this.activity && this.activity.trending) {
                    self.trendsList.forEach(function (category) {
                        if (category.value === self.activity.trending.id) {
                            self.setState({trending: category});
                        }
                    });
                }
                this.setState({trendsList: self.trendsList});
            });
    };

    render() {
        return (
            <div className="container page">
                <div className="row">
                    <div className="page-left-col" style={{width: '15%'}}>
                        <MyMenu/>
                    </div>
                    <div className="page-right-col" style={{width: '85%', marginLeft: '15%'}}>
                        <ListErrors errors={this.props.activityStore.addActivityErrors}/>
                        <div className="product-section ">
                            <div className="inner-product-section"
                                 style={{width: '100%', maxWidth: '1124px', margin: '0 auto'}}>
                                <form onSubmit={this.submitForm}>
                                    <div className="view-frame">
                                        <div id="main-detail" className="account-page desktop">
                                            <div id="account-content">
                                                <div style={{borderBottom: '1px solid #aaaaaa'}}>
                                                    <h2 className="account-header sg-f-dspl-m">Добавить мероприятие</h2>
                                                    детали предложения будут настроено после добавления основного
                                                </div>
                                                <div id="profile" className="shadow-inputbox">
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="title" className="required">Название
                                                                <span className="required">*</span>
                                                            </label>
                                                        </div>
                                                        <div className="sibs">
                                                            <input style={{background: '#FFF', width: '400px'}}
                                                                   type="text"
                                                                   name="title"
                                                                   placeholder="Название"
                                                                   value={this.state.title}
                                                                   onChange={this.updateState('title')}/>
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="firstName" className="required">Краткое
                                                                описание
                                                                <span className="required">*</span></label>
                                                        </div>
                                                        <div className="sibs">
                                                        <textarea
                                                            rows="3"
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
                                                            <label htmlFor="tags" className="required">Теги</label>
                                                        </div>
                                                        <div className="sibs" style={{width: '380px'}}>
                                                            <TagsInput id="tags"
                                                                       value={this.state.tags}
                                                                       inputProps={{
                                                                           placeholder: "Добавьте теги, характеризующие ваше предложение"
                                                                       }}
                                                                       onChange={this.handleTagsChange}/>
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="category"
                                                                   className="required">Категория</label>
                                                        </div>
                                                        <div className="sibs" style={{width: '280px'}}>
                                                            <Select
                                                                style={{width: '280px'}}
                                                                name="category"
                                                                value={this.state.category}
                                                                className="language_select desktop"
                                                                placeholder={"Выберите"}
                                                                onChange={(e) => this.handleSelectCategoryChange(e)}
                                                                options={this.categoryList}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="activityCategory"
                                                                   className="required">Тип</label>
                                                        </div>
                                                        <div className="sibs" style={{width: '280px'}}>
                                                            <Select
                                                                style={{width: '280px'}}
                                                                name="activityCategory"
                                                                value={this.state.activityCategory}
                                                                className="language_select desktop"
                                                                placeholder={"Выберите"}
                                                                onChange={(e) => this.handleSelectActivityCategoryChange(e)}
                                                                options={this.activityCategoryList}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="occasion"
                                                                   className="required">Случай</label>
                                                        </div>
                                                        <div className="sibs" style={{width: '280px'}}>
                                                            <Select
                                                                style={{width: '280px'}}
                                                                name="occasion"
                                                                value={this.state.occasion}
                                                                placeholder={"Выберите"}
                                                                className="language_select desktop"
                                                                onChange={(e) => this.handleSelectOccasionChange(e)}
                                                                options={this.occasionList}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="trending" className="required">Тренд</label>
                                                        </div>
                                                        <div className="sibs" style={{width: '280px'}}>
                                                            <Select
                                                                style={{width: '280px'}}
                                                                name="trending"
                                                                placeholder={"Выберите"}
                                                                value={this.state.trending}
                                                                className="language_select desktop"
                                                                onChange={(e) => this.handleSelectTrendingChange(e)}
                                                                options={this.state.trendsList}
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
                                                    {/*
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
                                                                onChange={value => this.setState({customers: value})}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="durations"
                                                                   className="required">Длительность</label>
                                                        </div>
                                                        <div className="sibs" style={{width: '280px'}}>
                                                            <Select
                                                                name="duration"
                                                                value="1"
                                                                placeholder={"Выберите"}
                                                                style={{width: '300px'}}
                                                                clearable={false}
                                                                options={this.state.durations}
                                                            />
                                                        </div>
                                                    </div>
*/}

                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="" className="required">Изображения</label>
                                                        </div>
                                                        <div className="sibs">
                                                            <ImagesUploader
                                                                url="http://api.tt.ru/v1/images"
                                                                optimisticPreviews
                                                                images={this.state.images}
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
                        <hr/>
                        {this.state.activityListRows}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddActivity;
