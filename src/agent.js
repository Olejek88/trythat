import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import commonStore from './stores/commonStore';
import authStore from './stores/authStore';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://api.tt.ru';

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
        req.set('Authorization', `Bearer ${commonStore.token}`);
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
    current: (id) =>
        requests.get(`/v1/users/${id}?expand=image`),
    get: (id) =>
        requests.get(`/v1/users/${id}?expand=image`),
    login: (email, password) =>
        requests.post('/v1/auth/request', {email, password}),
    register: (username, email, password) =>
        requests.post('/v1/signup/request', {email, password}),
//        requests.post('/users', {user: {username, email, password}}),
    password: (user, password, newPassword) =>
        requests.post('/v1/users/password', {password, newPassword}),
    save: (user, user_id) => requests.put(`/v1/users/${user_id}`, user)
};

const ActivityCategories = {
    all: () =>
        requests.get(`/v1/activity-categories`),
    get: (id) =>
        requests.get(`/v1/activity-categories/${id}`)
};

const ActivityImage = {
    all: (id) =>
        requests.get(`/v1/activity-images?activity_id=${id}&expand=image`),
    get: (id) =>
        requests.get(`/v1/activity-images/${id}`),
    create: (activity_image) =>
        requests.post(`/v1/activity-images`,activity_image)
};

const ActivityListing = {
    forActivity: (activity_id) =>
        requests.get(`/v1/activity-listings?activity_id=${activity_id}&expand=currency,duration`),
    del: (activity_listing_id) =>
        requests.del(`/v1/activity-listings/${activity_listing_id}`),
    get: (activity_listing_id) =>
        requests.get(`/v1/activity-listings/${activity_listing_id}`),
    update: (activity_listing) =>
        requests.put(`/v1/activity-listings/${activity_listing.id}`, activity_listing),
    create: (activity_listing) =>
        requests.post(`/v1/activity-listings`, activity_listing)
};

const Activities = {
    // wish / customer._id
    // luminary / luminary._id
    //?${limit(lim, start)}
    filter: (filter, id, lim = 3, start = 0) =>
        requests.get(`/v1/activities?${filter}_id=${id}&expand=luminary.user.image,activityImages.image,location.city`),
    get: id =>
        requests.get(`/v1/activities/${id}?expand=luminary.user.image,activityImages.image,location.city`),
    all: (lim = 10,page = 0) =>
        //requests.get(`/v1/activities/?${limit(lim, page)}`),
        requests.get(`/v1/activities?expand=luminary.user.image,activityImages.image,location.city`),
    isFavorite: (activity_id, customer_id) =>
        requests.get(`/v1/activities/is_favorite/${activity_id}&customer=${customer_id}`),
    favorite: (activity_id, customer_id) =>
        requests.get(`/v1/activities/favorite/${activity_id}&customer=${customer_id}`),
    unFavorite: (activity_id, customer_id) =>
        requests.get(`/v1/activities/un_favorite/${activity_id}&customer=${customer_id}`),
    create: activity =>
        requests.post('/v1/activities', activity),
    del: id =>
        requests.del(`/v1/activities/${id}`),
    update: activity =>
        requests.put(`/v1/activities/${activity.id}`, {activity}),

/*
    byTag: (tag, page, lim = 10) =>
        requests.get(`/activities?tag=${encode(tag)}&${limit(lim, page)}`),
*/
};

const Categories = {
    all: () =>
        requests.get(`/v1/categories`),
    get: id =>
        requests.get(`/v1/categories/${id}`),
};

const Country = {
    all: () =>
        requests.get(`/v1/countries`),
    get: id =>
        requests.get(`/v1/countries/${id}`),
};

const Cities = {
    all: () =>
        requests.get(`/v1/cities`),
    get: id =>
        requests.get(`/v1/cities/${id}`),
};

const Currency = {
    all: () =>
        requests.get(`/v1/currencies`),
    get: id =>
        requests.get(`/v1/currencies/${id}`),
};

const Duration = {
    all: () =>
        requests.get(`/v1/durations`),
    get: id =>
        requests.get(`/v1/durations/${id}`),
};

const FollowList = {
    get: customer_id =>
        requests.get(`/v1/follow-lists?customer_id=${customer_id}&expand=luminary.user.image`),
    isFollow: (customer,luminary) =>
        requests.get(`/v1/follow-lists?customer_id=${customer}&luminary_id=${luminary}`),
    follow: (follow) =>
        requests.post(`/v1/follow-lists`,follow),
    unFollow: (id) =>
        requests.del(`/v1/follow-lists/${id}`),
};

const Tags = {
    all: () => requests.get('/v1/tags')
};

const Customer = {
    get: user_id =>
        requests.get(`/v1/customers?expand=user&user.id=${user_id}`),
    forUser: user =>
        requests.get(`/v1/customers/user/${user}`),
    create: (customer) =>
        requests.post(`/v1/customers`,customer),
};

const Image = {
    // чисто формальный метод - возвращать 5-10 последних фото, не должен вызываться
    all: () =>
        requests.get(`/v1/images/`),
    get: image =>
        requests.get(`/v1/images/${image}`),
    filter: (filter, id) =>
        requests.get(`/v1/images/${filter}/${id}`),
    create: (image) =>
        requests.post(`/v1/images`,image),
    del: (image_id) =>
        requests.del(`/v1/images/${image_id}`),
};

const Locations = {
    all: () =>
        requests.get(`/v1/locations`),
    get: slug =>
        requests.get(`/v1/locations/${slug}`),
    create: (location) =>
        requests.post(`/v1/locations`,location)
};

const Luminary = {
    all: () =>
        requests.get(`/v1/luminaries?expand=user.image`),
    get: user_id =>
        requests.get(`/v1/luminaries?expand=user.image&user.id=${user_id}`),
    create: luminary =>
        requests.post(`/v1/luminaries`,{luminary}),
    update: luminary =>
        requests.put(`/v1/luminaries/${luminary.id}`,luminary),
};

const MailStatus = {
    all: () => requests.get(`/v1/mail-statuses}`),
    get: statusId =>
        requests.get(`/v1/mail-statuses/${statusId}`),
};

const Mail = {
    filter: (filter, id, lim = 10, start = 0) =>
//        requests.get(`/v1/mails/${filter}/${id}?${limit(lim, start)}`),
        requests.get(`/v1/mails?${filter}_id=${id}&expand=fromUser.image,toUser.image`),
    get: mail_id =>
        requests.get(`/v1/mails/${mail_id}`),
    create: (mail) =>
        requests.post(`/v1/mails`,mail),
    del: (mail_id) =>
        requests.del(`/v1/mails/${mail_id}`),
};

const Order = {
    all: (page, lim = 10) =>
        requests.get(`/v1/orders?${limit(lim, page)}&expand=orderStatus,activityListing.currency,activityListing.duration,
        activityListing.activity.activityImages.image,activityListing.activity.luminary.user.image`),
    forUser: (user, page) =>
        requests.get(`/v1/orders?user=${encode(user)}&${limit(5, page)}&expand=orderStatus,activityListing.activity.activityImages.image,
        activityListing.currency,activityListing.duration,activityListing.activity.luminary.user.image`),
    filter: (filter, id, lim = 10, start = 0) =>
        requests.get(`/v1/orders?${filter}_id=${id}&expand=activityListing.currency,activityListing.duration,
        activityListing.activity.activityImages.image,activityListing.activity.luminary.user.image,orderStatus,
        activityListing.activity.luminary.user.image`),
    get: orderId =>
        requests.get(`/v1/orders/${orderId}?expand=activityListing.activity.activityImages.image,activityListing.currency,
        activityListing.duration,activityListing.activity.luminary.user.image,orderStatus`),
    create: (order) =>
        requests.post(`/v1/orders`,order),
    del: (order_id) =>
        requests.del(`/v1/orders/${order_id}`),
};

const OrderStatus = {
    all: () => requests.get(`/v1/order-statuses}`),
    get: statusId =>
        requests.get(`/v1/order-statuses/${statusId}`),
};

const Profile = {
    follow: username =>
        requests.post(`/v1/profiles/${username}/follow`),
    get: username =>
        requests.get(`/v1/profiles/${username}`),
    unfollow: username =>
        requests.del(`/v1/profiles/${username}/follow`)
};

const Review = {
    filter: (filter, id, lim = 3, start = 0) =>
        requests.get(`/v1/reviews?${filter}_id=${id}&expand=customer.user&${limit(lim, start)}`),
    del: (review_id) =>
        requests.del(`/v1/reviews/${review_id}`),
    get: (review_id) =>
        requests.get(`/v1/reviews/${review_id}`),
    create: (review) =>
        requests.post(`/v1/reviews/${review}`),
    all: () =>
        requests.get(`/v1/reviews}`)
};

const WishList = {
    forCustomer: (customer) =>
        requests.get(`/v1/wishlists?customer_id=${customer}&expand=activity.luminary.user.image,activity.activityImages.image`),
    isWished: (activity, customer) =>
        requests.get(`/v1/wishlists?customer_id=${customer}&activity_id=${activity}`),
    wish: (wish) =>
        requests.post('/v1/wishlists',wish),
    unWish: (wish_id) =>
        requests.del(`/v1/wishlists/${wish_id}`)
};

const Occasions = {
    all: () =>
        requests.get(`/v1/occasions`),
};

const Trending = {
    all: () =>
        requests.get(`/v1/trendings`),
};

const User = {
    get: luminary =>
        requests.get(`/v1/luminaries/${luminary}`),
    create: luminary =>
        requests.post(`/v1/luminaries/${luminary}`),
};


export default {
    Activities,
    ActivityImage,
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
    Mail,
    MailStatus,
    Order,
    OrderStatus,
    Review,
    Tags,
    Trending,
    User,
    WishList
};
