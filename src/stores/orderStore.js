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

    staticData =
        [{   _id: '1',
            listing: activityListingStore.loadTestOneActivityListing(),
            orderStatus: orderStatusStore.getTestOrderStatus(),
            created: new Date(),
            customer: customerStore.getTestCustomer(),
            startDate: new Date()
        }];

    loadTestOrders() {
        return this.staticData;
    }

    loadTestOrdersCount() {
        return this.staticData.length;
    }

    getOrder(slug) {
        return this.ordersRegistry.get(slug);
    }

    @action loadOrder(slug, {acceptCached = false} = {}) {
        if (acceptCached) {
            const order = this.getOrder(slug);
            if (order) return Promise.resolve(order);
        }
        this.isLoading = true;
        return agent.Order.get(slug)
            .then(action(({order}) => {
                this.ordersRegistry.set(order.slug, order);
                return order;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }));
    }

    $req() {
        return agent.Order.all(this.page, LIMIT);
    }

    clear() {
        this.ordersRegistry.clear();
        this.page = 0;
    }

    @action loadOrders() {
        this.isLoading = true;
        return this.$req()
            .then(action(({ orders, ordersCount }) => {
                this.ordersRegistry.clear();
                orders.forEach(order => this.ordersRegistry.set(order.slug, order));
                this.totalPagesCount = Math.ceil(ordersCount / LIMIT);
            }))
            .finally(action(() => { this.isLoading = false; }));
    }

    @action createOrder(order) {
        return agent.create(order)
            .then(({order}) => {
                this.ordersRegistry.set(order.slug, order);
                return order;
            })
    }

    @action updateOrder(data) {
        return agent.update(data)
            .then(({order}) => {
                this.ordersRegistry.set(order.slug, order);
                return order;
            })
    }

    @action deleteOrder(slug) {
        this.ordersRegistry.delete(slug);
        return agent.Order.del(slug)
            .catch(action(err => {
                this.loadOrders();
                throw err;
            }));
    }
}

export default new OrderStore();
