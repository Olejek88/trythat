import React from 'react';
import {inject} from 'mobx-react';

@inject('cityStore', 'categoryStore', 'occasionStore', 'trendingStore')
class FooterCategories extends React.Component {
    render() {
        let citiesList = '';
        let categoriesListFirst = Array.of(undefined), categoriesListSecond = Array.of(undefined);
        let occasionListFirst = Array.of(undefined), occasionListSecond = Array.of(undefined);
        let trendsListFirst = Array.of(undefined), trendsListSecond = Array.of(undefined);

        let cities = this.props.cityStore.loadCities();
        if (cities) {
            citiesList = cities.map(function (city,i) {
                return (<li key={i}><a href={"/#/activities/city/" + city.value} className="sg-f-bdy"
                               style={{lineHeight: '2em'}}>{city.label}</a></li>);
            });
        }

        let categories = this.props.categoryStore.loadCategories();
        if (categories) {
            let half = categories.length/2;
            let index=0;
            categories.forEach(function (category,i) {
                if (index<half)
                    categoriesListFirst.push(<li key={i}><a href={"/#/activities/category/" + category.value} className="sg-f-bdy"
                                       style={{lineHeight: '2em'}}>{category.label}</a></li>);
                else
                    categoriesListSecond.push(<li key={i}><a href={"/#/activities/category/" + category.value} className="sg-f-bdy"
                                                            style={{lineHeight: '2em'}}>{category.label}</a></li>);
                index++;
            });
        }

        let occasions = this.props.occasionStore.loadOccasions();
        if (occasions) {
            let half = occasions.length/2;
            let index=0;
            occasions.forEach(function (occasion,i) {
                if (index<half)
                    occasionListFirst.push(<li key={i}><a href={"/activities/occasion/" + occasion.value} className="sg-f-bdy"
                                                            style={{lineHeight: '2em'}}>{occasion.label}</a></li>);
                else
                    occasionListSecond.push(<li key={i}><a href={"/activities/occasion/" + occasion.value} className="sg-f-bdy"
                                                             style={{lineHeight: '2em'}}>{occasion.label}</a></li>);
                index++;
            });
        }

        let trends = this.props.trendingStore.loadTrends();
        if (trends) {
            let half = trends.length/2;
            let index=0;
            trends.forEach(function (trend,i) {
                if (index<half)
                    trendsListFirst.push(<li key={i}><a href={"/activities/trend/" + trend.value} className="sg-f-bdy"
                                                  style={{lineHeight: '2em'}}>{trend.label}</a></li>);
                else
                    trendsListSecond.push(<li key={i}><a href={"/activities/trend/" + trend.value} className="sg-f-bdy"
                                                           style={{lineHeight: '2em'}}>{trend.label}</a></li>);
                index++;
            });
        }

        return (
            <div className="footer_div">
                <h2 className="footer_header" style={{marginBottom: '20px'}}>Выбирайте впечатления на любой вкус</h2>
                <div className="pageframe_content_container">
                    <table className="tile_table discovery-footer catch_all_footer_table" data-cols="5">
                        <tbody>
                        <tr>
                            <td className="sg-bd-2">
                                <div className="catch_all_footer_subtitle">Категории</div>
                                <table className="catch_all_footer_lists_table">
                                    <tbody>
                                    <tr>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {categoriesListFirst}
                                            </ul>
                                        </td>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {categoriesListSecond}
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
                                                {occasionListFirst}
                                            </ul>
                                        </td>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {occasionListSecond}
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
                                                {trendsListFirst}
                                            </ul>
                                        </td>
                                        <td className="footer-td-content">
                                            <ul className="catch_all_footer_list">
                                                {trendsListSecond}
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
                                                {citiesList}
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

export default FooterCategories;
