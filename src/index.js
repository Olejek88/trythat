import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';

import App from './components/App';

import commentsStore from './stores/commentsStore';
import authStore from './stores/authStore';
import commonStore from './stores/commonStore';
import editorStore from './stores/editorStore';
import imageStore from './stores/imageStore';
import luminaryStore from "./stores/luminaryStore";
import userStore from './stores/userStore';
import countryStore from './stores/countryStore';
import locationStore from './stores/locationStore';
import profileStore from './stores/profileStore';
import activityStore from "./stores/activityStore";
import cityStore from "./stores/cityStore";
import activityCategoryStore from "./stores/activityCategoryStore";
import categoryStore from "./stores/categoryStore";
import occasionStore from "./stores/occasionStore";
import trendingStore from "./stores/trendingStore";
import durationStore from "./stores/durationStore";
import tagStore from "./stores/tagStore";
import orderStore from "./stores/orderStore";
import orderStatusStore from "./stores/orderStatusStore";

const stores = {
    activityStore,
    activityCategoryStore,
    authStore,
    categoryStore,
    cityStore,
    commentsStore,
    commonStore,
    countryStore,
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
    userStore
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
