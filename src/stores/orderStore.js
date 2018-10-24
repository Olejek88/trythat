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
            customer: customerStore.getCustomer(),
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
            .finally(action(() => { this.isLoading = false; }));
        return this.staticData;
    }

    loadTestOrdersCount() {
        return this.staticData.length;
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
            }));
    }

    clear() {
        this.ordersRegistry.clear();
        this.page = 0;
    }

    @action createOrder(order) {
        return agent.create(order)
            .then(({order}) => {
                this.ordersRegistry.set(order._id, order);
                return order;
            })
    }

    @action updateOrder(data) {
        return agent.update(data)
            .then(({order}) => {
                this.ordersRegistry.set(order._id, order);
                return order;
            })
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
