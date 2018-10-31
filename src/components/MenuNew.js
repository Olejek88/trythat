import React from 'react';
import {inject} from 'mobx-react';

@inject('cityStore', 'categoryStore', 'occasionStore', 'trendingStore')
class SiteMenu extends React.Component {
    render() {
        let citiesList = '';
        let categoriesList = Array.of(undefined);
        let occasionList = Array.of(undefined);
        let trendsList = Array.of(undefined);

        let cities = this.props.cityStore.loadCities();
        if (cities) {
            citiesList = cities.map(function (city, i) {
                return (<div data-navmenuid="go-298" className="topNavCat" key={i}>
                    <a href={'/#/activities/city/' + city.value} title={city.label}>
                        <p className="level-link fo-14-n-s4">{city.label}</p></a></div>);
            });
        }

        let categories = this.props.categoryStore.loadCategories();
        if (categories) {
            categories.forEach(function (category,i) {
                categoriesList.push(<div className="topNavCat" key={i}>
                    <a href={"/#/activities/category/" + category.value} title={category.label}>
                        <p className="level-link fo-14-n-s4">{category.label}</p></a></div>);
            });
        }

        let occasions = this.props.occasionStore.loadOccasions();
        if (occasions) {
            occasions.forEach(function (occasion,i) {
                occasionList.push(<div className="topNavCat" key={i}>
                    <a href={"/#/activities/occasion/" + occasion.value} title={occasion.label}>
                        <p className="level-link fo-14-n-s4">{occasion.label}</p></a></div>);
            });
        }

        let trends = this.props.trendingStore.loadTrends();
        if (trends) {
            trends.forEach(function (trend,i) {
                trendsList.push(<div className="topNavCat" key={i}>
                    <a href={"/#/activities/trend/" + trend.value} title={trend.label}>
                        <p className="level-link fo-14-n-s4">{trend.label}</p></a></div>);
            });
        }

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
                            <div className="level-3">
                                <div className="col" style={{minWidth: '320px'}}>
                                    {categoriesList}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-menu js-menu" data-navmenuid="2" id="menu2">
                        <a href="/" className="label js-tab-featrue js-show-dropdown" tabIndex="1100">
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
                                    {trendsList}
                                </div>
                                <div className="col">
                                    {occasionList}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-menu js-menu  " data-navmenuid="3" id="menu3">
                        <a href="/" className="label js-tab-featrue js-show-dropdown" tabIndex="1200">
                            <p className=" sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Локации</p>
                        </a>
                        <div className="highlight-bar" id="menu_highlight_3"></div>
                        <div className="drop-down version1" style={{minWidth: '160px'}} id="menu_drop_3">
                            <div className="level-3">
                                <div className="col">
                                    {citiesList}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-menu js-menu  " data-navmenuid="122" id="menu4">
                        <a href="/" className="label js-tab-featrue js-show-dropdown" tabIndex="1300">
                            <p className=" sg-f-btn sg-text-transform" style={{textAlign: 'center'}}>Фильтр</p>
                        </a>
                        <div className="highlight-bar" id="menu_highlight_4"></div>
                        <div className="drop-down  version1" style={{minWidth: '160px'}} id="menu_drop_4">
                            <div className="level-3">
                                <div className="col">
                                    <div data-navmenuid="213" className="topNavCat">
                                        <a href={"/#/activities/filter/popular"} title="Популярное" className=" " tabIndex="1001">
                                            <p className="level-link fo-14-n-s4">Популярное</p></a>
                                    </div>
                                    <div data-navmenuid="213" className="topNavCat">
                                        <a href={"/#/activities/filter/new"} title="Новинки" className=" " tabIndex="1001">
                                            <p className="level-link fo-14-n-s4">Новинки</p></a>
                                    </div>
                                    <div data-navmenuid="213" className="topNavCat">
                                        <a href={"/#/activities/filter/cheap"} title="Недорогие" className=" " tabIndex="1001">
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

export default SiteMenu;
