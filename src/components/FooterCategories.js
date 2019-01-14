import React from 'react';
import {inject} from 'mobx-react';

class FooterCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 1920,
            activityCategoriesList: [],
            categoriesList: [],
            occasionList: [],
            trendsList: [],
            citiesList: []
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    updateDimensions() {
        let documentElement = document.documentElement;
        this.setState({width: documentElement.clientWidth});
    }

    componentWillMount() {
        let self = this;
        window.addEventListener("resize", this.updateDimensions);
        this.props.activityCategoryStore.loadActivityCategories()
            .then(() => {
                let activityCategoriesList = [];
                for (let category of Array.from(self.props.activityCategoryStore.activityCategoryRegistry.values())) {
                    activityCategoriesList.push(<li key={category.id}>
                        <a href={"/#/activities/activity-category/" + category.id} className="sg-f-bdy"
                           style={{lineHeight: '2em'}}>{category.title}</a></li>);
                }
                self.setState({activityCategoriesList: activityCategoriesList});
            });

        this.props.cityStore.loadCities()
            .then(() => {
                let citiesList = [];
                for (let city of Array.from(self.props.cityStore.cityRegistry.values())) {
                    citiesList.push(<li key={city.id}><a href={"/#/activities/city/" + city.id}
                                                                    className="sg-f-bdy"
                                                              style={{lineHeight: '2em'}}>{city.title}</a></li>);
                }
                self.setState({citiesList: citiesList});
            });

        this.props.categoryStore.loadCategories()
            .then(() => {
                let categoriesList = [];
                for (let category of Array.from(self.props.categoryStore.categoryRegistry.values())) {
                    categoriesList.push(<li key={category.id}>
                        <a href={"/#/activities/category/" + category.id} className="sg-f-bdy"
                           style={{lineHeight: '2em'}}>{category.title}</a></li>);
                }
                self.setState({categoriesList: categoriesList});
            });

        this.props.occasionStore.loadOccasions()
            .then(() => {
                let occasionList = [];
                for (let occasion of Array.from(self.props.occasionStore.occasionRegistry.values())) {
                    occasionList.push(<li key={occasion.id}>
                        <a href={"/#/activities/occasion/" + occasion.id} className="sg-f-bdy"
                           style={{lineHeight: '2em'}}>{occasion.title}</a></li>);
                }
                self.setState({occasionList: occasionList});
            });

        this.props.trendingStore.loadTrends()
            .then(() => {
                let trendsList = [];
                for (let trend of Array.from(self.props.trendingStore.trendingRegistry.values())) {
                    trendsList.push(<li key={trend.id}>
                        <a href={"/#/activities/trend/" + trend.id} className="sg-f-bdy"
                           style={{lineHeight: '2em'}}>{trend.title}</a></li>);
                }
                self.setState({trendsList: trendsList});
            });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div className="footer_div">
                <h2 className="footer_header" style={{marginBottom: '20px'}}>Выбирайте впечатления на любой вкус</h2>
                <div className="pageframe_content_container">
                    <table className="tile_table discovery-footer catch_all_footer_table" data-cols="5">
                        <tbody>
                        <tr>
                            <td className="sg-bd-2">
                                <div className="catch_all_footer_subtitle">Виды</div>
                                <table className="catch_all_footer_lists_table">
                                    <tbody>
                                    <tr>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {this.state.categoriesList}
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="sg-bd-2">
                                <div className="catch_all_footer_subtitle">Категории</div>
                                <table className="catch_all_footer_lists_table">
                                    <tbody>
                                    <tr>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {this.state.activityCategoriesList}
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="sg-bd-2">
                                <div className="catch_all_footer_subtitle">Для случая</div>
                                <table className="catch_all_footer_lists_table">
                                    <tbody>
                                    <tr>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {this.state.occasionList}
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            {this.state.width >= 1000 &&
                            <td className="sg-bd-2">
                                <div className="catch_all_footer_subtitle">По тренду</div>
                                <table className="catch_all_footer_lists_table">
                                    <tbody>
                                    <tr>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {this.state.trendsList}
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            }
                            {this.state.width >= 1000 &&
                            <td className="sg-bd-2">
                                <div className="catch_all_footer_subtitle">Локации</div>
                                <table className="catch_all_footer_lists_table">
                                    <tbody>
                                    <tr>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {this.state.citiesList}
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            }
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{clear: 'both'}}>
                </div>
            </div>
        );
    }
}

export default inject('cityStore', 'activityCategoryStore', 'categoryStore', 'occasionStore', 'trendingStore')(FooterCategories);
