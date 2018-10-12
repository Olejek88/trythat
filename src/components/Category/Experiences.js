import React from 'react';
import { observer } from 'mobx-react';
import ExperienceRow from "../ExperienceRow";

@observer
class Experiences extends React.Component {
  render() {
    return (
        <div className="pageframe_div_discovery layout_tiles last_pageframe partial_width layout_3-3-3" style={{position: 'relative'}}>
            <div id="" href="/" style={{position: 'absolute', right: '0px'}} className="go-to-filter">
                <div className="allowAllUsers sg-text-transform secondaryButton button" tabIndex="0">
                    <div className="title-container">
                        <p className="title">
                            <img src={"icon_filter_green.png"} alt="filter"/> фильтр
                        </p>
                    </div>
                </div>
                <img style={{display: 'none'}} src={"icon_filter_fff.png"} alt={""}/>
            </div>
            <div></div>
            <div></div>
            <h2 className="discovery_pageframe_header sg-f-dspl-m txt-align-ovr1" style={{marginBottom: '20px'}}>
                Самые популярные впечатления в категории Спорт </h2>
            <div className="layout_tiles_container_discovery pageframe_content_container  ">
                <ExperienceRow/>
                <ExperienceRow/>
                <ExperienceRow/>
                <div style={{clear: 'both'}}></div>
            </div>
            <h3 className="discovery_pageframe_button">
                <a className="sg-text-transform primaryButton button" href="/" tabIndex="0">
                <div className="title-container"><p className="title">Показать все впечатления категории</p></div>
            </a></h3>
        </div>
    );
  }
}

export default Experiences;
