import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import commonStore from './stores/commonStore';
import authStore from './stores/authStore';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const encode = encodeURIComponent;

const handleErrors = err => {
    if (err && err.response && err.response.status === 401) {
        authStore.logout();
    }
    return err;
};

const responseBody = res => res.body;

const tokenPlugin = req => {
    if (commonStore.token) {
        req.set('authorization', `Token ${commonStore.token}`);
    }
};

const requests = {
    del: url =>
        superagent
            .del(`${API_ROOT}${url}`)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    get: url =>
        superagent
            .get(`${API_ROOT}${url}`)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    put: (url, body) =>
        superagent
            .put(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    post: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
};

const Auth = {
    current: () =>
        requests.get('/user'),
    login: (email, password) =>
        requests.post('/users/login', {user: {email, password}}),
    register: (username, email, password) =>
        requests.post('/users', {user: {username, email, password}}),
    password: (user, password, newPassword) =>
        requests.post('/user/password', {user: {password}, newPassword}),
    save: user => requests.put('/user', {user})
};

const ActivityCategories = {
    all: () =>
        requests.get(`/activity-categories`),
};

const Categories = {
    all: () =>
        requests.get(`/categories`),
};

const Comments = {
    create: (slug, comment) =>
        requests.post(`/activities/${slug}/comments`, {comment}),
    delete: (slug, commentId) =>
        requests.del(`/activities/${slug}/comments/${commentId}`),
    forActivity: slug =>
        requests.get(`/activities/${slug}/comments`)
};

const Country = {
    all: () =>
        requests.get(`/country`),
    get: slug =>
        requests.get(`/country/${slug}`),
};

const Cities = {
    all: () =>
        requests.get(`/cities`),
    get: slug =>
        requests.get(`/cities/${slug}`),
};

const Tags = {
    getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = activity => Object.assign({}, activity, {slug: undefined})

const Activities = {
    all: (page, lim = 10) =>
        requests.get(`/activities?${limit(lim, page)}`),
    byLuminary: (luminary, page, query) =>
        requests.get(`/activities?luminary=${encode(luminary)}&${limit(5, page)}`),
    wished: (customer) =>
        requests.get(`/activities?customer=${encode(customer)}&wish=1`),
    byTag: (tag, page, lim = 10) =>
        requests.get(`/activities?tag=${encode(tag)}&${limit(lim, page)}`),
    del: slug =>
        requests.del(`/activities/${slug}`),
    favorite: (activity, customer_id) =>
        requests.post(`/activities/${customer_id}/favorite`, {activity}),
    feed: () =>
        requests.get('/activities/feed?limit=10&offset=0'),
    get: slug =>
        requests.get(`/activities/${slug}`),
    unfavore: slug =>
        requests.del(`/activities/${slug}/favorite`),
    update: activity =>
        requests.put(`/activities/${activity.slug}`, {activity: omitSlug(activity)}),
    create: activity =>
        requests.post('/activities', {activity})
};

const ActivityListing = {
    forActivity: (activity_id) =>
        requests.get(`/activity-listing/activity?${activity_id}`),
    del: (activity_listing_id) =>
        requests.del(`/activity-listing/del?${activity_listing_id}`),
    get: (activity_listing_id) =>
        requests.get(`/activity-listing/${activity_listing_id}`),
    update: (activity_listing_id, activity) =>
        requests.put(`/activity-listing/update?${activity_listing_id}`, {activity: omitSlug(activity)}),
    create: (activity, customer) =>
        requests.post('/activity-listing/create', {activity}, {customer})
};

const Customer = {
    forUser: user =>
        requests.get(`/customer/?user=${user}`),
    get: customer =>
        requests.get(`/customer/${customer}`),
    create: (customer) =>
        requests.post(`/customer/${customer}`),
    del: (slug, customerId) =>
        requests.del(`/customer/${slug}/${customerId}`),
};

const Image = {
    get: image =>
        requests.get(`/image/${image}`),
    create: (image) =>
        requests.post(`/image/${image}`),
    del: (slug, imageId) =>
        requests.del(`/image/${slug}/${imageId}`),
};

const Locations = {
    all: () =>
        requests.get(`/locations`),
    get: slug =>
        requests.get(`/locations/${slug}`),
};

const Luminary = {
    follow: luminary =>
        requests.post(`/luminary/${luminary}/follow`),
    get: luminary =>
        requests.get(`/luminary/${luminary}`),
    unfollow: luminary =>
        requests.post(`/luminary/${luminary}/unfollow`),
    create: (luminary) =>
        requests.post(`/luminary/${luminary}`),
    del: (slug, luminaryId) =>
        requests.del(`/luminary/${slug}/${luminaryId}`),
};

const Order = {
    all: (page, lim = 10) =>
        requests.get(`/orders?${limit(lim, page)}`),
    forUser: (user, page) =>
        requests.get(`/orders?user=${encode(user)}&${limit(5, page)}`),
    get: orderId =>
        requests.get(`/order/${orderId}`),
    create: (order) =>
        requests.post(`/order/${order}`),
    del: (slug, orderId) =>
        requests.del(`/order/${slug}/${orderId}`),
};

const OrderStatus = {
    all: () => requests.get(`/order-status}`),
    get: statusId =>
        requests.get(`/order-status/${statusId}`),
};

const Profile = {
    follow: username =>
        requests.post(`/profiles/${username}/follow`),
    get: username =>
        requests.get(`/profiles/${username}`),
    unfollow: username =>
        requests.del(`/profiles/${username}/follow`)
};

const Review = {
    forCustomer: (customer_id) =>
        requests.get(`/review/customer?${customer_id}`),
    forActivity: (activity_id) =>
        requests.get(`/review/activity?${activity_id}`),
    del: (review_id) =>
        requests.del(`/review/?review=${review_id}`),
    get: (review_id) =>
        requests.get(`/review/${review_id}`),
    create: (review) =>
        requests.post(`/review/${review}`)
};

const WishList = {
    forCustomer: (customer_id) =>
        requests.get(`/wish-list/customer?${customer_id}`),
    del: (activity_id, customer_id) =>
        requests.del(`/wish-list/?customer=${customer_id}&activity=${activity_id}`),
    get: (activity_id, customer_id) =>
        requests.get(`/wish-list/?customer=${customer_id}&activity=${activity_id}`),
    create: (activity_id, customer_id) =>
        requests.post(`/wish-list/?customer=${customer_id}&activity=${activity_id}`)
};

const Occasions = {
    all: () =>
        requests.get(`/occasions`),
};

const Trending = {
    all: () =>
        requests.get(`/trending`),
};


export default {
    Activities,
    ActivityListing,
    ActivityCategories,
    Auth,
    Categories,
    Cities,
    Comments,
    Country,
    Customer,
    Image,
    Locations,
    Luminary,
    Profile,
    Occasions,
    Order,
    OrderStatus,
    Review,
    Tags,
    Trending,
    WishList
};
