import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, NavLink } from 'react-router-dom'
import { parse as qsParse } from 'query-string';
import Banner from "./Banner";
import MainCategories from "./MainCategories";
import ExperienceTitle from "../ExperienceTitle";
import ExperienceRow from "../ExperienceRow";
import FooterCategories from "../FooterCategories";

const YourFeedTab = props => {
  if (props.currentUser) {

    return (
      <li className="nav-item">
      <NavLink
          className="nav-link"
          isActive={
            (match, location) => {
              return location.search.match("tab=feed") ? 1 : 0;
            }
          }
          to={{
            pathname: "/",
            search: "?tab=feed"
          }}
        >
          Your Feed
        </NavLink>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = props => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        isActive={
          (match, location) => {
            return !location.search.match(/tab=(feed|tag)/) ? 1 : 0;
          }
        }
        to={{
          pathname: "/",
          search: "?tab=all"
        }}
      >
        Global Feed
      </NavLink>
    </li>
  );
};

const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
    <li className="nav-item">
      <a href="" className="nav-link active">
        <i className="ion-pound" /> {props.tag}
      </a>
    </li>
  );
};

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
