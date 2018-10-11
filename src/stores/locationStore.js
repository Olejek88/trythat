import { observable, action } from 'mobx';
import agent from '../agent';

class LocationStore {
    @observable currentLocation;
    @observable isLoading = false;
    @observable locationsRegistry = observable.map();

    $req() {
        return agent.Locations.all();
    }

    getLocation(slug) {
        return this.locationsRegistry.get(slug);
    }

    @action loadLocation(slug, { acceptCached = false } = {}) {
        if (acceptCached) {
            const location = this.getLocation(slug);
            if (location) return Promise.resolve(location);
        }
        this.isLoading = true;
        return agent.Locations.get(slug)
            .then(action(({ location }) => {
                this.locationsRegistry.set(location.slug, location);
                return location;
            }))
            .finally(action(() => { this.isLoading = false; }));
    }

    @action loadLocations() {
        this.isLoading = true;
        return this.$req()
            .then(action(({ locations }) => {
                this.locationsRegistry.clear();
                locations.forEach(location => this.locationsRegistry.set(locations.slug, location));
            }))
            .finally(action(() => { this.isLoading = false; }));
    }
}

export default new LocationStore();
