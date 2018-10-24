import Header from './Header/Header';
import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import PrivateRoute from './PrivateRoute';

import Activity from './Activity';
import Editor from './Editor';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Sell from './Sell';
import About from './About';
import Footer from "./Footer";
import Settings from "./Settings";
import Category from "./Category";
import Orders from "./Orders";
import Cart from "./Cart";
import AddActivity from "./AddActivity";
import WishList from "./WishList";
import Activities from "./Activities";
import Checkout from "./Cart/Checkout";

@inject('userStore', 'commonStore', 'activityStore', 'locationStore')
@withRouter
@observer
export default class App extends React.Component {

    componentWillMount() {
        if (!this.props.commonStore.token) {
            this.props.commonStore.setAppLoaded();
        }
    }

    componentDidMount() {
        if (this.props.commonStore.token) {
            this.props.userStore.pullUser()
                .finally(() => this.props.commonStore.setAppLoaded());

        }
    }

    render() {
        if (this.props.commonStore.appLoaded) {
            return (
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/activities/:filter/:id" component={Activities}/>
                        <Route path="/cart/checkout" component={Checkout}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/editor/:slug?" component={Editor}/>
                        <PrivateRoute path="/settings" component={Settings}/>
                        <Route path="/@:username" component={Profile}/>
                        <Route path="/@:username/favorites" component={Profile}/>
                        <Route path="/activity/:id" component={Activity}/>
                        <Route path="/category/:id" component={Category}/>
                        <Route path="/sell" component={Sell}/>
                        <Route path="/wishlist" component={WishList}/>
                        <Route path="/about" component={About}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/add" component={AddActivity}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                    <Footer/>
                </div>
            );
        }
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}
