import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';

import App from './components/App';

import activityStore from "./stores/activityStore";
import activityCategoryStore from "./stores/activityCategoryStore";
import activityListingStore from "./stores/activityListingStore";
import wishListStore from './stores/wishListStore';
import authStore from './stores/authStore';
import commonStore from './stores/commonStore';
import customerStore from "./stores/customerStore";
import editorStore from './stores/editorStore';
import imageStore from './stores/imageStore';
import luminaryStore from "./stores/luminaryStore";
import userStore from './stores/userStore';
import countryStore from './stores/countryStore';
import locationStore from './stores/locationStore';
import profileStore from './stores/profileStore';
import cityStore from "./stores/cityStore";
import categoryStore from "./stores/categoryStore";
import occasionStore from "./stores/occasionStore";
import trendingStore from "./stores/trendingStore";
import durationStore from "./stores/durationStore";
import tagStore from "./stores/tagStore";
import orderStore from "./stores/orderStore";
import orderStatusStore from "./stores/orderStatusStore";

const stores = {
    activityStore,
    activityListingStore,
    activityCategoryStore,
    authStore,
    categoryStore,
    cityStore,
    commonStore,
    countryStore,
    customerStore,
    durationStore,
    editorStore,
    imageStore,
    locationStore,
    luminaryStore,
    profileStore,
    occasionStore,
    orderStore,
    orderStatusStore,
    tagStore,
    trendingStore,
    userStore,
    wishListStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
useStrict(true);

ReactDOM.render((
    <Provider {...stores}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
), document.getElementById('root'));
