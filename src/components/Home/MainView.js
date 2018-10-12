import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter} from 'react-router-dom'
import { parse as qsParse } from 'query-string';
import Banner from "./Banner";
import MainCategories from "./MainCategories";
import ExperienceTitle from "../ExperienceTitle";
import ExperienceRow from "../ExperienceRow";
import FooterCategories from "../FooterCategories";

@inject('activityStore', 'commonStore', 'userStore')
@withRouter
@observer
export default class MainView extends React.Component {

  componentWillMount() {
    this.props.activityStore.setPredicate(this.getPredicate());
  }

  componentDidMount() {
    this.props.activityStore.loadActivities();
  }

  componentDidUpdate(previousProps) {
    if (
      this.getTab(this.props) !== this.getTab(previousProps) ||
      this.getTag(this.props) !== this.getTag(previousProps)
    ) {
      this.props.activityStore.setPredicate(this.getPredicate());
      this.props.activityStore.loadActivity();
    }
  }

  getTag(props = this.props) {
    return qsParse(props.location.search).tag || "";
  }

  getTab(props = this.props) {
    return qsParse(props.location.search).tab || 'all';
  }

  getPredicate(props = this.props) {
    switch (this.getTab(props)) {
      case 'feed': return { myFeed: true };
      case 'tag': return { tag: qsParse(props.location.search).tag };
      default: return {};
    }
  }

  handleTabChange = (tab) => {
    if (this.props.location.query.tab === tab) return;
    this.props.router.push({ ...this.props.location, query: { tab } })
  };

  handleSetPage = page => {
    this.props.activityStore.setPage(page);
    this.props.activityStore.loadActivity();
  };

  render() {

    return (
        <React.Fragment>
            <Banner/>
            <MainCategories/>
            <ExperienceTitle/>
            <ExperienceRow category={1}/>
            <ExperienceRow category={2}/>
            <FooterCategories/>
        </React.Fragment>
    );
  }
};
