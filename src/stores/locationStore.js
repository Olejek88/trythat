import {action, observable} from 'mobx';
import agent from '../agent';
import imageStore from "./imageStore";
import cityStore from "./cityStore";

class LocationStore {
    @observable currentLocation;
    @observable isLoading = false;
    locationsRegistry = new Map();

    testData = {
        _id: 1,
        city: cityStore.defaultData,
        title: 'Челябинская обл., вулкан Свердловский',
        latitude: 55.66,
        longitude: 56.44,
        image: imageStore.images[0]
    };

    getLocation(id) {
        return this.locationsRegistry.get(id);
    }

    @action loadLocation(id, { acceptCached = false } = {}) {
        if (acceptCached) {
            const location = this.getLocation(id);
            if (location) return Promise.resolve(location);
        }
        this.isLoading = true;
        return agent.Locations.get(id)
            .then(action((location) => {
                this.locationsRegistry.set(location.id, location);
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
    }

    @action loadLocations() {
        this.isLoading = true;
        return agent.Locations.all()
            .then(action((locations) => {
                this.locationsRegistry.clear();
                locations.forEach(location => this.locationsRegistry.set(location.id, location));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
    }

    @action createLocation(location) {
        return agent.Locations.create(location)
            .then((location) => {
                this.locationsRegistry.set(location.id, location);
            })
            .catch(action(err => {
                throw err;
            }))
    }
}

export default new LocationStore();
