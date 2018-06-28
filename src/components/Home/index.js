import MainView from './MainView';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('commonStore')
@withRouter
@observer
export default class Home extends React.Component {
  componentDidMount() {
    this.props.commonStore.loadTags();
  }

  render() {
    const { tags, token, appName } = this.props.commonStore;
    return (
        <div className="home-page">

        <div className="container page">
          <div className="row">
            <MainView />
          </div>
        </div>

      </div>
    );
  }
}
