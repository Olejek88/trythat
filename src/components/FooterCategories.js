import React from 'react';
import {inject} from 'mobx-react';

class FooterCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadComplete: true
        };
        this.activityCategoriesList = [];
        this.categoriesList = [];
        this.occasionList = [];
        this.trendsList = [];
        this.citiesList = [];
    }

    componentWillMount() {
        let self = this;
        this.props.activityCategoryStore.loadActivityCategories()
            .then(() => {
                for (let category of Array.from(this.props.activityCategoryStore.activityCategoryRegistry.values())) {
                    self.activityCategoriesList.push(<li key={category.id}>
                        <a href={"/#/activities/activity-category/" + category.id} className="sg-f-bdy"
                           style={{lineHeight: '2em'}}>{category.title}</a></li>);
                }
                this.setState({loadComplete: !this.state.loadComplete});
            });

        this.props.cityStore.loadCities()
            .then(() => {
                for (let city of Array.from(this.props.cityStore.cityRegistry.values())) {
                    self.citiesList.push(<li key={city.id}><a href={"/#/activities/city/" + city.id}
                                                              className="sg-f-bdy"
                                                              style={{lineHeight: '2em'}}>{city.title}</a></li>);
                }
                this.setState({loadComplete: !this.state.loadComplete});
            });

        this.props.categoryStore.loadCategories()
            .then(() => {
                for (let category of Array.from(this.props.categoryStore.categoryRegistry.values())) {
                    self.categoriesList.push(<li key={category.id}>
                        <a href={"/#/activities/category/" + category.id} className="sg-f-bdy"
                           style={{lineHeight: '2em'}}>{category.title}</a></li>);
                }
                this.setState({loadComplete: !this.state.loadComplete});
            });

        this.props.occasionStore.loadOccasions()
            .then(() => {
                for (let occasion of Array.from(this.props.occasionStore.occasionRegistry.values())) {
                    self.occasionList.push(<li key={occasion.id}>
                        <a href={"/#/activities/category/" + occasion.id} className="sg-f-bdy"
                           style={{lineHeight: '2em'}}>{occasion.title}</a></li>);
                }
                this.setState({loadComplete: !this.state.loadComplete});
            });

        this.props.trendingStore.loadTrends()
            .then(() => {
                for (let trend of Array.from(this.props.trendingStore.trendingRegistry.values())) {
                    self.trendsList.push(<li key={trend.id}>
                        <a href={"/#/activities/trend/" + trend.id} className="sg-f-bdy"
                           style={{lineHeight: '2em'}}>{trend.title}</a></li>);
                }
                this.setState({loadComplete: !this.state.loadComplete});
            });
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
                                                {this.categoriesList}
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
                                                {this.activityCategoriesList}
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
                                                {this.occasionList}
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="sg-bd-2">
                                <div className="catch_all_footer_subtitle">По тренду</div>
                                <table className="catch_all_footer_lists_table">
                                    <tbody>
                                    <tr>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {this.trendsList}
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="sg-bd-2">
                                <div className="catch_all_footer_subtitle">Локации</div>
                                <table className="catch_all_footer_lists_table">
                                    <tbody>
                                    <tr>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {this.citiesList}
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
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
