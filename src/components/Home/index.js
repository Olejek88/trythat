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
        <div className="home-page" style={{minHeight: '100%', width: '100%', position: 'relative', margin: '0 auto',
            overflow: 'hidden', paddingTop: '80px'}}>
            <div className="main-row">
            <MainView />
          </div>
      </div>
    );
  }
}
