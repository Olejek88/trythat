import {observable, action} from 'mobx';
import agent from '../agent';
import activityListingStore from "./activityListingStore";
import orderStatusStore from "./orderStatusStore";
import customerStore from "./customerStore";

const LIMIT = 10;

export class OrderStore {

    @observable isLoading = false;
    @observable page = 0;
    @observable totalPagesCount = 0;
    @observable ordersRegistry = observable.map();
    @observable addOrderErrors;
    @observable predicate = {};

    staticData =
        [{   _id: '1',
            listing: activityListingStore.loadTestOneActivityListing(),
            orderStatus: orderStatusStore.loadOrderStatus(1),
            created: new Date(),
            customer: customerStore.customer,
            startDate: new Date()
        }];

    @action setPredicate(predicate) {
        if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
        this.clear();
        this.predicate = predicate;
    }

    $req(count = 10, start = 0) {
        if (this.predicate.filter && this.predicate.id)
            return agent.Order.filter(this.predicate.filter, this.predicate.id, this.predicate.limit, this.predicate.start);
        return agent.Order.all(count, start);
    }

    @action loadOrders() {
        this.isLoading = true;
        this.$req()
            .then(action(({ orders, ordersCount }) => {
                this.ordersRegistry.clear();
                orders.forEach(order => this.ordersRegistry.set(order.slug, order));
                this.totalPagesCount = Math.ceil(ordersCount / LIMIT);
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.staticData;
    }

    getOrder(id) {
        return this.ordersRegistry.get(id);
    }

    @action loadOrder(id, {acceptCached = false} = {}) {
        if (acceptCached) {
            const order = this.getOrder(id);
            if (order) return Promise.resolve(order);
        }
        this.isLoading = true;
        return agent.Order.get(id)
            .then(action(({order}) => {
                this.ordersRegistry.set(order._id, order);
                return order;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }

    clear() {
        this.ordersRegistry.clear();
        this.page = 0;
    }

    @action createOrder(order) {
        return agent.Order.create(order)
            .then(({order}) => {
                this.ordersRegistry.set(order._id, order);
                return order;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    @action updateOrder(data) {
        return agent.Order.update(data)
            .then(({order}) => {
                this.ordersRegistry.set(order._id, order);
                return order;
            })
            .catch(action(err => {
                throw err;
            }))
    }

    @action deleteOrder(id) {
        this.ordersRegistry.delete(id);
        return agent.Order.del(id)
            .catch(action(err => {
                this.loadOrders();
                throw err;
            }));
    }
}

export default new OrderStore();
