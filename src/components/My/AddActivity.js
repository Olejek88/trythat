import React from 'react';
import ListErrors from '../ListErrors';
import {inject} from 'mobx-react';
import {Redirect, withRouter} from "react-router-dom";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';
import ImageUploader from 'react-images-upload';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import MyMenu from "./MyMenu";
import ActivityListingItem from "./ActivityListingItem";
import LocationPicker from 'react-location-picker';
import agent from "../../agent";
import {action} from "mobx/lib/mobx";
import AddListingDialog from "./AddLIstingDialog";

class AddActivity extends React.Component {
    constructor(props) {
        super(props);
        this.minCustomers = 1;
        this.maxCustomers = 20;
        this.errors = [];
        this.activity = null;

        this.defaultPosition = {
            lat: 55.09,
            lng: 61.24
        };

        this.state = {
            city: 1,
            title: '',
            location_title: '',
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
            location: '',
            location_id: '',
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
            activity: null,
            activityListRows: [],
            showAddDialog: false,
            address: "Kalal",
            position: {
                lat: 0,
                lng: 0
            }
        };

        this.imageLoad = false;
        this.citiesList = [];
        this.activityListRows = [];
        this.categoryList = [];
        this.activityCategoryList = [];
        this.occasionList = [];
        this.trendsList = [];
        this.imagesList = [];

        this.updateState = field => ev => {
            const state = this.state;
            const newState = Object.assign({}, state, {[field]: ev.target.value});
            this.setState(newState);
        };

        this.onDrop = this.onDrop.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.click = this.click.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
        this.createActivity = this.createActivity.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);

        this.handleSelectCityChange = (event) => {
            this.setState({city: event});
            this.setState({city_id: event.value});
        };

        this.handleSelectLocationChange = (event) => {
            this.setState({location: event});
            this.setState({location_id: event.value});
        };

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

        this.clickHandler = (component) => {
            component.setState({showAddDialog: false});
            return <Redirect to='/#/my/conversation'/>
        };

        this.submitForm = ev => {
            ev.preventDefault();
            let self = this;
            if (this.state.location === '' && this.state.city !== '' && this.state.location_title !== '') {
                let location = {
                    city_id: this.state.city.value,
                    title: this.state.location_title
                };
                location.latitude = this.state.position.lat;
                location.longitude = this.state.position.lng;
                agent.Locations.create(location).then(function (location) {
                    self.setState({
                        location: location,
                        location_id: location.id
                    }, () => {
                        self.createActivity();
                    });
                });
            } else {
                this.createActivity();
            }
        };
    }

    createActivity() {
        let errors = [];
        let self = this;
        if (this.state.title === '')
            errors.push(<span style={{color: 'red'}} key={1}>Не заполнено поле названия<br/></span>);
        if (this.state.shortDescription.length < 10)
            errors.push(<span style={{color: 'red'}} key={2}>Не заполнено поле короткого описания<br/></span>);
        if (this.state.description.length < 30)
            errors.push(<span style={{color: 'red'}} key={3}>Не заполнено поле описания<br/></span>);
        if (!this.state.location_id)
            errors.push(<span style={{color: 'red'}} key={4}>Не указана локация<br/></span>);
        if (!this.state.category_id)
            errors.push(<span style={{color: 'red'}} key={5}>Не указана категория<br/></span>);
        if (!this.state.activityCategory_id)
            errors.push(<span style={{color: 'red'}} key={6}>Не указана подкатегория<br/></span>);
        if (this.state.images.length === 0)
            errors.push(<span style={{color: 'red'}} key={7}>Не добавлено ни одного фото<br/></span>);

        this.setState({errors: errors});
        let activity = {
            title: this.state.title,
            images: this.state.images,
            luminary_id: this.props.userStore.currentLuminary.id,
            location_id: this.state.location_id,
            shortDescription: this.state.shortDescription,
            description: this.state.description,
            tags: this.state.tags,
            category_id: this.state.category_id,
            activity_category_id: this.state.activityCategory_id,
            occasions: [this.state.occasion],
            trendings: [this.state.trending],
            start_date: moment(this.state.startDate).format('YYYY-MM-DD HH:mm:00'),
            end_date: moment(this.state.endDate).format('YYYY-MM-DD HH:mm:00'),
            min_customers: this.state.customers.min,
            max_customers: this.state.customers.max
        };
        if (errors.length === 0) {
            agent.Activities.create(activity)
                .then(action((created_activity) => {
                    this.state.images.forEach(function (image) {
                        let activityImage = {
                            activity_id: created_activity.id,
                            image_id: image.id
                        };
                        console.log(activityImage);
                        self.props.activityImageStore.createImage(activityImage);
                    });
                    this.props.history.replace('/my/activity');
                }));
        }
    }

    onDrop(picture) {
        if (!this.imageLoad) {
            this.imageLoad = true;
            let data = new FormData();
            let self = this;
            let images = this.state.images;
            data.append('image', picture[0]);
            data.append('title', "предложение");
            this.props.imageStore.createImage(data).then(function (image) {
                images.push(image);
                self.setState({
                    image: image,
                    images: images
                });
                self.imageLoad = false;
            });
        }
    }

    click() {
        document.getElementById('file').click();
    }

    clickDelete() {
        this.props.activityStore.deleteActivity(this.state.activity).then(() => {
            this.props.history.replace('/my/activity');
        });
    }

    clickAdd() {
        this.setState({showAddDialog: !this.state.showAddDialog})
    }

    handleTagsChange(tags) {
        this.setState({tags: tags});
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

    handleLocationChange({position, address}) {
        this.setState({position, address});
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    componentWillMount() {
        let self = this;
        let activity_id = this.props.match.params['activity_id'];
        this.setState({city: this.props.cityStore.defaultData});
        if (activity_id) {
            this.props.activityStore.loadActivity(activity_id).then((activity) => {
                self.activity = activity;
                self.setState({activity: self.activity});
                if (activity) {
                    if (activity.tags) {
                        self.activity.tags.forEach(function (tag) {
                            self.state.tags[self.state.tags.length] = tag.title;
                        });
                    }

                    self.props.activityListingStore.loadActivityListing(activity).then((activity_lists) => {
                        activity_lists.forEach(function (activity_list, i) {
                            self.activityListRows.push(<ActivityListingItem activity={self.activity}
                                                                            activity_listing={activity_list}
                                                                            key={i}/>);
                        });
                        self.setState({activityListRows: self.activityListRows});
                    });

                    self.props.activityImageStore.loadImages(this.activity.id).then(function (images) {
                        if (images) {
                            let i = 1;
                            images.forEach(function (image) {
                                self.imagesList.push(<img style={{width: '100px', padding: '3px'}} key={i}
                                                          src={self.props.commonStore.apiServer + image.image.path}
                                                          alt={"img"}/>);
                                console.log(self.imagesList);
                                i++;
                            });
                            self.setState({images: self.imagesList});
                        }
                    });
                    self.setState({
                        customers: {
                            min: this.activity.min_customers,
                            max: this.activity.max_customers
                        }
                    });
                    self.setState({city: this.activity.location.city});
                    self.setState({title: this.activity.title});
                    self.setState({description: this.activity.description});
                    self.setState({shortDescription: this.activity.shortDescription});
                    self.setState({luminary: this.activity.luminary});
                    self.setState({startDate: moment(this.activity.startDate)});
                    self.setState({endDate: moment(this.activity.endDate)});
                    self.setState({images: this.activity.images});
                }
            });
        }

        this.props.cityStore.loadCities()
            .then(() => {
                self.citiesList = Array.from(this.props.cityStore.cityRegistry.values()).map(x => ({
                    label: x.title,
                    value: x.id
                }));
                if (this.activity) {
                    self.citiesList.forEach(function (city) {
                        if (city.value === self.activity.location.city.id) {
                            self.setState({city: city});
                        }
                    });
                }
            });

        this.props.locationStore.loadLocations()
            .then(() => {
                self.locationList = Array.from(this.props.locationStore.locationsRegistry.values())
                    .map(x => ({label: x.title, value: x.id}));
                if (this.activity) {
                    self.locationList.forEach(function (location) {
                        if (location.value === self.activity.location.id) {
                            self.setState({location: location});
                        }
                    });
                }
                this.setState({categoryList: self.categoryList});
            });
        this.props.categoryStore.loadCategories()
            .then(() => {
                self.categoryList = Array.from(this.props.categoryStore.categoryRegistry.values())
                    .map(x => ({label: x.title, value: x.id}));
                if (this.activity) {
                    self.categoryList.forEach(function (category) {
                        if (category.value === self.activity.category_id) {
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
                        if (category.value === self.activity.activity_category_id) {
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
                    {this.state.showAddDialog && <AddListingDialog clickHandler={() => this.clickHandler(this)}
                                                                   activity={this.state.activity}/>}
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
                                                        </div>
                                                        <div className="sibs">
                                                            {this.state.errors}
                                                        </div>
                                                    </div>
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
                                                            <label htmlFor="city">Город</label></div>
                                                        <div className="sibs" style={{width: '280px'}}>
                                                            <Select
                                                                style={{width: '280px'}}
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
                                                            <label htmlFor="category"
                                                                   className="required">Локация</label>
                                                        </div>
                                                        <div className="sibs" style={{width: '280px'}}>
                                                            <Select
                                                                style={{width: '280px'}}
                                                                name="location"
                                                                value={this.state.location}
                                                                className="language_select desktop"
                                                                placeholder={"Выберите"}
                                                                onChange={(e) => this.handleSelectLocationChange(e)}
                                                                options={this.locationList}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="title" className="required">Или новая
                                                                локация
                                                                <span className="required">*</span>
                                                            </label>
                                                        </div>
                                                        <div className="sibs">
                                                            <input style={{background: '#FFF', width: '400px'}}
                                                                   type="text"
                                                                   name="title"
                                                                   placeholder="Название"
                                                                   value={this.state.location_title}
                                                                   onChange={this.updateState('location_title')}/>
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            <label htmlFor="category"
                                                                   className="required">Выберите позицию</label>
                                                        </div>
                                                        <div className="sibs" style={{width: '280px'}}>
                                                            <LocationPicker
                                                                containerElement={<div style={{height: '100%'}}/>}
                                                                mapElement={<div style={{height: '200px'}}/>}
                                                                defaultPosition={this.defaultPosition}
                                                                onChange={this.handleLocationChange}
                                                            />
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
                                                            <label htmlFor="trending"
                                                                   className="required">Тренд</label>
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
                                                            <label htmlFor="startDate" className="required">Дата
                                                                начала
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
                                                            <label htmlFor="endDate" className="required">Дата
                                                                окончания
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
                                                            <label htmlFor=""
                                                                   className="required">Изображения</label>
                                                        </div>
                                                        <div className="sibs">
                                                        </div>
                                                        <div className="sibs">
                                                            {this.state.images}
                                                            <ImageUploader
                                                                withIcon={true}
                                                                withPreview={true}
                                                                buttonText='Изображение'
                                                                onChange={this.onDrop}
                                                                singleImage={true}
                                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                                maxFileSize={5242880}
                                                                label={'Максимальный размер файла: 5Мб [gif,jpg,png]'}
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
                                                            <button id="addActivity"
                                                                    type="submit"
                                                                    style={{width: '252px'}}
                                                                    className="medium primaryButton button title-container button-green">
                                                                <p className="title">Сохранить изменения</p>
                                                            </button>
                                                            {this.state.activity &&
                                                            <button id="addActivityListing"
                                                                    style={{width: '252px', margin: '3px'}}
                                                                    onClick={this.clickAdd.bind(this)}
                                                                    className="medium primaryButton button title-container button-blue">
                                                                <p className="title">Добавить вариант</p>
                                                            </button>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="row-flow">
                                                        <div className="sibs">
                                                            {this.state.activity &&
                                                            <button id="deleteActivity"
                                                                    onClick={this.clickDelete}
                                                                    style={{width: '202px', margin: '3px'}}
                                                                    className="medium primaryButton button title-container button-red">
                                                                <p className="title">Удалить</p>
                                                            </button>
                                                            }
                                                        </div>
                                                    </div>
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

export default inject('activityCategoryStore', 'activityListingStore', 'activityStore', 'categoryStore', 'occasionStore', 'cityStore',
    'trendingStore', 'tagStore', 'userStore', 'activityImageStore', 'commonStore', 'imageStore', 'locationStore')(withRouter(AddActivity));
