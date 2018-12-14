import React from 'react';
import {inject} from 'mobx-react';

class SiteMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadComplete: true
        };
        this.activityCategoriesList = [];
        this.citiesList = [];
        this.categoriesList = [];
        this.occasionList = [];
        this.trendsList = [];
    }

    componentWillMount() {
        let self = this;
        this.props.activityCategoryStore.loadActivityCategories()
            .then(() => {
                for (let category of Array.from(this.props.activityCategoryStore.activityCategoryRegistry.values())) {
                    self.activityCategoriesList.push(<div className="topNavCat" key={category.id}>
                        <a href={"/#/activities/activity-category/" + category.id} title={category.title}>
                            <p className="level-link fo-14-n-s4">{category.title}</p></a></div>);
                }
                this.setState ({loadComplete: !this.state.loadComplete});
            });

        this.props.cityStore.loadCities()
            .then(() => {
                for (let city of Array.from(this.props.cityStore.cityRegistry.values())) {
                    self.citiesList.push(<div className="topNavCat" key={city.id}>
                        <a href={"/#/activities/city/" + city.id} title={city.title}>
                            <p className="level-link fo-14-n-s4">{city.title}</p></a></div>);
                }
                this.setState ({loadComplete: !this.state.loadComplete});
            });

        this.props.categoryStore.loadCategories()
            .then(() => {
                for (let category of Array.from(this.props.categoryStore.categoryRegistry.values())) {
                    self.categoriesList.push(<div className="topNavCat" key={category.id}>
                        <a href={"/#/activities/category/" + category.id} title={category.title}>
                            <p className="level-link fo-14-n-s4">{category.title}</p></a></div>);
                }
                this.setState ({loadComplete: !this.state.loadComplete});
            });

        this.props.occasionStore.loadOccasions()
            .then(() => {
                for (let occasion of Array.from(this.props.occasionStore.occasionRegistry.values())) {
                    self.occasionList.push(<div className="topNavCat" key={occasion.id}>
                        <a href={"/#/activities/occasion/" + occasion.id} title={occasion.title}>
                            <p className="level-link fo-14-n-s4">{occasion.title}</p></a></div>);
                }
                this.setState ({loadComplete: !this.state.loadComplete});
            });

        this.props.trendingStore.loadTrends()
            .then(() => {
                for (let trend of Array.from(this.props.trendingStore.trendingRegistry.values())) {
                    self.trendsList.push(<div className="topNavCat" key={trend.id}>
                        <a href={"/#/activities/trend/" + trend.id} title={trend.title}>
                            <p className="level-link fo-14-n-s4">{trend.title}</p></a></div>);
                }
                this.setState ({loadComplete: !this.state.loadComplete});
            });
    }

    render() {
        return (
            <div id="header-menu" className="sg-inline-flex-grow" style={{margin: '0 10px', order: '2'}}>
                <div className="level-menu  sg-inline-middle version1" style={{flexWrap: 'nowrap'}}
                     data-header-version="1">
                    <div className="l-menu js-menu" data-navmenuid="1" id="menu1">
                        <a href="/" className="label js-tab-featrue js-show-dropdown" id="menu1">
                            <p className="sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Категории</p>
                        </a>
                        <div className="highlight-bar" id="menu_highlight_1"></div>
                        <div className="drop-down version1" style={{minWidth: '320px'}} id="menu_drop_1">
                            <div className="level-2 f-style-ovr1 sg-c-3">
                                <div className="col"><p className="fo-13-i-g co-ff">По виду</p></div>
                                <div className="col"><p className="fo-13-i-g co-ff">По типу</p></div>
                            </div>
                            <div className="level-3">
                                <div className="col">
                                    {this.categoriesList}
                                </div>
                                <div className="col">
                                    {this.activityCategoriesList}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-menu js-menu" data-navmenuid="2" id="menu2">
                        <a href="/" className="label js-tab-featrue js-show-dropdown">
                            <p className=" sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>На случай</p>
                        </a>
                        <div className="highlight-bar" id="menu_highlight_2"></div>
                        <div className="drop-down  version1" style={{minWidth: '320px'}} id="menu_drop_2">
                            <div className="level-2 f-style-ovr1 sg-c-3">
                                <div className="col"><p className="fo-13-i-g co-ff">Впечатления</p></div>
                                <div className="col"><p className="fo-13-i-g co-ff">События</p></div>
                            </div>
                            <div className="level-3">
                                <div className="col">
                                    {this.trendsList}
                                </div>
                                <div className="col">
                                    {this.occasionList}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-menu js-menu" data-navmenuid="3" id="menu3">
                        <a href="/" className="label js-tab-featrue js-show-dropdown" tabIndex="1200">
                            <p className="sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Локации</p>
                        </a>
                        <div className="highlight-bar" id="menu_highlight_3"></div>
                        <div className="drop-down version1" style={{minWidth: '160px'}} id="menu_drop_3">
                            <div className="level-3">
                                <div className="col">
                                    {this.citiesList}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-menu js-menu" data-navmenuid="122" id="menu4">
                        <a className="label js-tab-featrue js-show-dropdown" tabIndex="1300">
                            <p className="sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Фильтр</p>
                        </a>
                        <div className="highlight-bar" id="menu_highlight_4"></div>
                        <div className="drop-down  version1" style={{minWidth: '160px'}} id="menu_drop_4">
                            <div className="level-3">
                                <div className="col">
                                    <div data-navmenuid="213" className="topNavCat">
                                        <a href={"/#/activities/trends/3"} title="Популярное" className=" " tabIndex="1001">
                                            <p className="level-link fo-14-n-s4">Популярное</p></a>
                                    </div>
                                    <div data-navmenuid="213" className="topNavCat">
                                        <a href={"/#/activities/trends/2"} title="Новинки" className=" " tabIndex="1001">
                                            <p className="level-link fo-14-n-s4">Новинки</p></a>
                                    </div>
                                    <div data-navmenuid="213" className="topNavCat">
                                        <a href={"/#/activities/trends/1"} title="Недорогие" className=" " tabIndex="1001">
                                            <p className="level-link fo-14-n-s4">Недорогие</p></a>
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

export default inject('cityStore', 'categoryStore', 'activityCategoryStore', 'occasionStore', 'trendingStore')(SiteMenu);
