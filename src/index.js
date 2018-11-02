import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import App from './components/App';

import activityStore from "./stores/activityStore";
import activityCategoryStore from "./stores/activityCategoryStore";
import activityListingStore from "./stores/activityListingStore";
import commonStore from './stores/commonStore';
import userStore from './stores/userStore';
import authStore from './stores/authStore';
import cityStore from './stores/cityStore';
import customerStore from './stores/customerStore';
import countryStore from './stores/countryStore';
import categoryStore from "./stores/categoryStore";
import durationStore from "./stores/durationStore";
import wishListStore from './stores/wishListStore';
import editorStore from './stores/editorStore';
import imageStore from './stores/imageStore';
import followListStore from "./stores/followListStore";
import luminaryStore from "./stores/luminaryStore";
import locationStore from './stores/locationStore';
import profileStore from './stores/profileStore';
import occasionStore from "./stores/occasionStore";
import trendingStore from "./stores/trendingStore";
import reviewStore from "./stores/reviewStore";
import tagStore from "./stores/tagStore";
import orderStore from "./stores/orderStore";
import orderStatusStore from "./stores/orderStatusStore";


const stores = {
    activityStore,
    activityCategoryStore,
    activityListingStore,
    commonStore,
    userStore,
    authStore,
    categoryStore,
    cityStore,
    countryStore,
    customerStore,
    durationStore,
    editorStore,
    imageStore,
    followListStore,
    locationStore,
    luminaryStore,
    profileStore,
    occasionStore,
    orderStore,
    orderStatusStore,
    reviewStore,
    tagStore,
    trendingStore,
    wishListStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
//useStrict(true);

ReactDOM.render((
    <Provider {...stores}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
), document.getElementById('root'));
