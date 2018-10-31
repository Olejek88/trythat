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

const limit = (count, start) => `limit=${count}&offset=${start}`;

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
    get: (id) =>
        requests.get(`/activity-categories/${id}`)
};

const ActivityListing = {
    forActivity: (activity_id) =>
        requests.get(`/activity-listing/activity?${activity_id}`),
    del: (activity_listing_id) =>
        requests.del(`/activity-listing/del?${activity_listing_id}`),

    get: (activity_listing_id) =>
        requests.get(`/activity-listing/${activity_listing_id}`),
    update: (activity_listing_id, activity) =>
        requests.put(`/activity-listing/${activity_listing_id}`, {activity: activity}),
    create: (activity_listing) =>
        requests.post('/activity-listing/create', {activity_listing})
};

const Activities = {
    // wish / customer._id
    // luminary / luminary._id
    filter: (filter, id, lim = 3, start = 0) =>
        requests.get(`/activities/${filter}/${id}?${limit(lim, start)}`),
    get: id =>
        requests.get(`/activities/${id}`),
    all: (page = 0, lim = 10) =>
        requests.get(`/activities/all?${limit(lim, page)}`),
    isFavorite: (activity_id, customer_id) =>
        requests.get(`/activities/is_favorite/${activity_id}&customer=${customer_id}`),
    favorite: (activity_id, customer_id) =>
        requests.get(`/activities/favorite/${activity_id}&customer=${customer_id}`),
    unFavorite: (activity_id, customer_id) =>
        requests.get(`/activities/un_favorite/${activity_id}&customer=${customer_id}`),
    create: activity =>
        requests.post('/activities', {activity}),
    del: id =>
        requests.del(`/activities/${id}`),
    update: activity =>
        requests.put(`/activities/update`, {activity}),

/*
    byTag: (tag, page, lim = 10) =>
        requests.get(`/activities?tag=${encode(tag)}&${limit(lim, page)}`),
*/
};

const Categories = {
    all: () =>
        requests.get(`/category`),
    get: id =>
        requests.get(`/category/${id}`),
};

const Country = {
    all: () =>
        requests.get(`/country`),
    get: id =>
        requests.get(`/country/${id}`),
};

const Cities = {
    all: () =>
        requests.get(`/cities`),
    get: id =>
        requests.get(`/cities/${id}`),
};

const Currency = {
    all: () =>
        requests.get(`/currency`),
    get: id =>
        requests.get(`/currency/${id}`),
};

const Duration = {
    all: () =>
        requests.get(`/duration`),
    get: id =>
        requests.get(`/duration/${id}`),
};

const FollowList = {
    get: customer_id =>
        requests.get(`/follow-list/${customer_id}`),
    isFollow: (customer,luminary) =>
        requests.get(`/follow-list/get?${customer}&${luminary}`),
    follow: (customer,luminary) =>
        requests.get(`/follow-list/follow?${customer}&${luminary}`),
    unFollow: (customer,luminary) =>
        requests.get(`/follow-list/unfollow?${customer}&${luminary}`),
};

const Tags = {
    all: () => requests.get('/tags')
};

const Customer = {
    get: customer_id =>
        requests.get(`/customer/${customer_id}`),
    forUser: user =>
        requests.get(`/customer/${user}`),
    create: (customer) =>
        requests.post(`/customer/${customer}`),
};

const Image = {
    // чисто формальный метод - возвращать 5-10 последних фото, не должен вызываться
    all: () =>
        requests.get(`/image/`),
    get: image =>
        requests.get(`/image/${image}`),
    filter: (filter, id) =>
        requests.get(`/image/${filter}/${id}`),
    create: (image) =>
        requests.post(`/image/${image}`),
    del: (image_id) =>
        requests.del(`/image/${image_id}`),
};

const Locations = {
    all: () =>
        requests.get(`/locations`),
    get: slug =>
        requests.get(`/locations/${slug}`),
};

const Luminary = {
    get: luminary_id =>
        requests.get(`/luminary/${luminary_id}`),
    forUser: luminary =>
        requests.get(`/luminary/${luminary}`),
    create: luminary =>
        requests.post(`/luminary/${luminary}`),
};

const Order = {
    all: (page, lim = 10) =>
        requests.get(`/orders?${limit(lim, page)}`),
    forUser: (user, page) =>
        requests.get(`/orders?user=${encode(user)}&${limit(5, page)}`),
    filter: (filter, id, lim = 10, start = 0) =>
        requests.get(`/orders/${filter}/${id}?${limit(lim, start)}`),
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
    filter: (filter, id, lim = 3, start = 0) =>
        requests.get(`/review/${filter}/${id}?${limit(lim, start)}`),
    del: (review_id) =>
        requests.del(`/review/${review_id}`),
    get: (review_id) =>
        requests.get(`/review/${review_id}`),
    create: (review) =>
        requests.post(`/review/${review}`),
    all: () =>
        requests.get(`/review}`)
};

const WishList = {
    forCustomer: (customer) =>
        requests.get(`/wish-list/customer?${customer}`),
    isWished: (activity, customer) =>
        requests.get(`/wish-list/get?customer=${customer}&activity=${activity}`),
    wish: (activity, customer) =>
        requests.get(`/wish-list/wish?customer=${customer}&activity=${activity}`),
    unWish: (activity, customer) =>
        requests.get(`/wish-list/unwish?customer=${customer}&activity=${activity}`)
};

const Occasions = {
    all: () =>
        requests.get(`/occasions`),
};

const Trending = {
    all: () =>
        requests.get(`/trending`),
};

const User = {
    get: luminary =>
        requests.get(`/luminary/${luminary}`),
    create: luminary =>
        requests.post(`/luminary/${luminary}`),
};


export default {
    Activities,
    ActivityListing,
    ActivityCategories,
    Auth,
    Categories,
    Cities,
    Country,
    Currency,
    Customer,
    Duration,
    Image,
    FollowList,
    Locations,
    Luminary,
    Profile,
    Occasions,
    Order,
    OrderStatus,
    Review,
    Tags,
    Trending,
    User,
    WishList
};
