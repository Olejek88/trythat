import React from 'react';
import {observer} from 'mobx-react';
import ExperienceMini from "../ExperienceMini";

@observer
class AboutCategory extends React.Component {
    render() {
        return (
            <div className="pageframe_div_discovery layout_tiles first_pageframe partial_width position_relative layout_">
                <div></div>
                <div></div>
                <h3 className="pageframe_sub_header sg-f-dspl-s txt-align-ovr1 sg-c-2 discovery"></h3>
                <div className="layout_tiles_container discovery pageframe_content_container">
                    <a style={{marginTop: '-300px', position: 'absolute'}} name="category-learn-more"></a>
                    <div className="layout_tile tile1  discovery">
                        <div className="tile_title sg-f-dspl-m txt-align-ovr1">О категории</div>
                        <div className="tile_subtitle sg-f-dspl-s txt-align-ovr1 sg-c-2">Мы предлагаем Вашему вниманию
                             самые яркие впечатления из области спорта.
                        </div>
                    </div>
                    <div style={{clear:'both'}}></div>
                </div>
            </div>
        );
    }
}

export default AboutCategory;
