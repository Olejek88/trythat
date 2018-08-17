import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import commonStore from './stores/commonStore';
import authStore from './stores/authStore';
import activityStore from './stores/activityStore';

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
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = activity => Object.assign({}, activity, { slug: undefined })

const Activities = {
  all: (page, lim = 10) =>
    requests.get(`/activities?${limit(lim, page)}`),
  byLuminary: (luminary, page, query) =>
    requests.get(`/activities?luminary=${encode(luminary)}&${limit(5, page)}`),
  byTag: (tag, page, lim = 10) =>
    requests.get(`/activities?tag=${encode(tag)}&${limit(lim, page)}`),
  del: slug =>
    requests.del(`/activities/${slug}`),
  favorite: slug =>
    requests.post(`/activities/${slug}/favorite`),
  favoredBy: (luminary, page) =>
    requests.get(`/activities?favored=${encode(luminary)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/activities/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/activities/${slug}`),
  unfavore: slug =>
    requests.del(`/activities/${slug}/favorite`),
  update: activity =>
    requests.put(`/activities/${activity.slug}`, { activity: omitSlug(activity) }),
  create: activity =>
    requests.post('/activities', { activity })
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/activities/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/activities/${slug}/comments/${commentId}`),
  forActivity: slug =>
    requests.get(`/activities/${slug}/comments`)
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

export default {
  Activities,
  Auth,
  Comments,
  Profile,
  Tags,
};
