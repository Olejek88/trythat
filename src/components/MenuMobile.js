import React from 'react';
import {inject} from 'mobx-react';

class MenuMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityCategoriesList: [],
            categoriesList: [],
            occasionList: [],
            trendsList: [],
            citiesList: []
        };
    }

    componentWillMount() {
        let self = this;
        this.props.activityCategoryStore.loadActivityCategories()
            .then(() => {
                let activityCategoriesList = [];
                for (let category of Array.from(self.props.activityCategoryStore.activityCategoryRegistry.values())) {
                    activityCategoriesList.push(<div className="topNavCat" key={category.id}>
                        <a href={"/#/activities/activity-category/" + category.id} title={category.title}>
                            <p className="level-link fo-14-n-s4">{category.title}</p></a></div>);
                }
                self.setState({activityCategoriesList: activityCategoriesList});
            });

        this.props.cityStore.loadCities()
            .then(() => {
                let citiesList = [];
                for (let city of Array.from(self.props.cityStore.cityRegistry.values())) {
                    citiesList.push(<div className="topNavCat" key={city.id}>
                        <a href={"/#/activities/city/" + city.id} title={city.title}>
                            <p className="level-link fo-14-n-s4">{city.title}</p></a></div>);
                }
                self.setState({citiesList: citiesList});
            });

        this.props.categoryStore.loadCategories()
            .then(() => {
                let categoriesList = [];
                for (let category of Array.from(self.props.categoryStore.categoryRegistry.values())) {
                    categoriesList.push(<div className="topNavCat" key={category.id}>
                        <a href={"/#/activities/category/" + category.id} title={category.title}>
                            <p className="level-link fo-14-n-s4">{category.title}</p></a></div>);
                }
                self.setState({categoriesList: categoriesList});
            });

        this.props.occasionStore.loadOccasions()
            .then(() => {
                let occasionList = [];
                for (let occasion of Array.from(self.props.occasionStore.occasionRegistry.values())) {
                    occasionList.push(<div className="topNavCat" key={occasion.id}>
                        <a href={"/#/activities/occasion/" + occasion.id} title={occasion.title}>
                            <p className="level-link fo-14-n-s4">{occasion.title}</p></a></div>);
                }
                self.setState({occasionList: occasionList});
            });

        this.props.trendingStore.loadTrends()
            .then(() => {
                let trendsList = [];
                for (let trend of Array.from(self.props.trendingStore.trendingRegistry.values())) {
                    trendsList.push(<div className="topNavCat" key={trend.id}>
                        <a href={"/#/activities/trend/" + trend.id} title={trend.title}>
                            <p className="level-link fo-14-n-s4">{trend.title}</p></a></div>);
                }
                self.setState({trendsList: trendsList});
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
                                    {this.state.categoriesList}
                                </div>
                                <div className="col">
                                    {this.state.activityCategoriesList}
                                </div>
                            </div>
                            <div className="level-2 f-style-ovr1 sg-c-3">
                                <div className="col"><p className="fo-13-i-g co-ff">Впечатления</p></div>
                                <div className="col"><p className="fo-13-i-g co-ff">События</p></div>
                            </div>
                            <div className="level-3">
                                <div className="col">
                                    {this.state.trendsList}
                                </div>
                                <div className="col">
                                    {this.state.occasionList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('cityStore', 'categoryStore', 'activityCategoryStore', 'occasionStore', 'trendingStore')(MenuMobile);
