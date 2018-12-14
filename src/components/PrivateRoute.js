import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject} from 'mobx-react';

class PrivateRoute extends React.Component {
  render() {
    const { userStore, ...restProps } = this.props;
    if (userStore.currentUser) return <Route {...restProps} />;
    return <Redirect to="/" />;
  }
}
export default inject('userStore', 'commonStore')(PrivateRoute);
