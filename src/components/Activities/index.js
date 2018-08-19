import MainView from './MainView';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import ExperienceRow from "../ExperienceRow";
import ExperienceTitle from "../ExperienceTitle";
import MainCategories from "../Home/MainCategories";
import Banner from "../About/Banner";

@inject('commonStore')
@withRouter
@observer
export default class Home extends React.Component {
  componentDidMount() {
    this.props.commonStore.loadTags();
  }

  render() {
    return (
        <div className="home-page" style={{minHeight: '100%', width: '100%', position: 'relative', margin: '0 auto',
            overflow: 'hidden', paddingTop: '80px'}}>
            <div className="main-row">
                <React.Fragment>
                    <Banner/>
                    <MainCategories/>
                    <ExperienceTitle/>
                    <ExperienceRow category={1}/>
                    <ExperienceRow category={2}/>
                </React.Fragment>
          </div>
      </div>
    );
  }
}
