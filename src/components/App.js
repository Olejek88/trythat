import Header from './Header/Header';
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import PrivateRoute from './PrivateRoute';

import Activity from './Activity';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Sell from './Sell';
import WantLuminary from './Sell/WantLuminary';
import About from './About';
import Footer from "./Footer";
import Settings from "./My/Settings";
import Category from "./Category";
import Orders from "./Orders";
import Cart from "./Cart";
import AddActivity from "./My/AddActivity";
import Luminary from "./My/Luminary";
import WishList from "./WishList";
import Activities from "./Activities";
import MyActivities from "./My/MyActivities";
import Checkout from "./Cart/Checkout";
import MyFollows from "./My/MyFollows";
import LuminaryActivity from "./Activities/LuminaryActivity";
import Conversation from "./My/Conversation";
import AllLuminary from "./Luminary/AllLuminary";
import TermsLuminary from "./About/TermsLuminary";
import TermsCustomers from "./About/TermsCustomer";
import Privacy from "./About/Privacy";

class App extends React.Component {

    componentWillMount() {
        if (!this.props.commonStore.token) {
            this.props.commonStore.setAppLoaded();
        }
    }

    componentDidMount() {
        if (this.props.commonStore.token) {
            this.props.userStore.pullUser()
                .finally(() => {
                        this.props.commonStore.setAppLoaded();
                        //this.render();
                    }
                );
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
                        <PrivateRoute path="/settings" component={Settings}/>
                        <Route path="/@:username" component={Profile}/>
                        <Route path="/@:username/favorites" component={Profile}/>
                        <Route path="/activity/:id" component={Activity}/>
                        <Route path="/my/activity/:filter/:listing" component={MyActivities}/>
                        <Route path="/my/activity/:filter" component={MyActivities}/>
                        <Route path="/my/activity" component={MyActivities}/>
                        <Route path="/my/luminary" component={Luminary}/>
                        <Route path="/mail/:filter/:by" component={Conversation}/>
                        <Route path="/mail" component={Conversation}/>
                        <Route path="/follows" component={MyFollows}/>
                        <Route path="/category/:id" component={Category}/>
                        <Route path="/sell" component={Sell}/>
                        <Route path="/become" component={WantLuminary}/>
                        <Route path="/wish_list" component={WishList}/>
                        <Route path="/about" component={About}/>
                        <Route path="/orders/:filter" component={Orders}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/terms-luminary" component={TermsLuminary}/>
                        <Route path="/terms-customers" component={TermsCustomers}/>
                        <Route path="/privacy" component={Privacy}/>
                        <Route path="/luminary/:id" component={LuminaryActivity}/>
                        <Route path="/luminaries" component={AllLuminary}/>
                        <Route path="/add/:activity_id" component={AddActivity}/>
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

export default inject('userStore', 'commonStore', 'activityStore', 'locationStore')(withRouter(observer(App)));