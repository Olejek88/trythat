import { observable, action } from 'mobx';
import agent from '../agent';
import imageStore from "./imageStore";
import cityStore from "./cityStore";

class LocationStore {
    @observable currentLocation;
    @observable isLoading = false;
    @observable locationsRegistry = observable.map();

    testData = [{
        _id: 1,
        city: cityStore.loadCity(1),
        title: 'Челябинская обл., вулкан Свердловский',
        latitude: 55.66,
        longitude: 56.44,
        image: imageStore.loadImage(1)
    }];

    getLocation(id) {
        return this.locationsRegistry.get(id);
    }

    @action loadLocation(id, { acceptCached = false } = {}) {
        if (acceptCached) {
            const location = this.getLocation(id);
            if (location) return Promise.resolve(location);
        }
        this.isLoading = true;
        agent.Locations.get(id)
            .then(action(({ location }) => {
                this.locationsRegistry.set(location.slug, location);
                return location;
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.testData[0];
    }

    @action loadLocations() {
        this.isLoading = true;
        agent.Locations.all()
            .then(action(({ locations }) => {
                this.locationsRegistry.clear();
                locations.forEach(location => this.locationsRegistry.set(locations.slug, location));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
        return this.testData;
    }
}

export default new LocationStore();
