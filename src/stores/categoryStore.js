import {action, observable} from 'mobx';
import agent from "../agent";

class CategoryStore {
    categoryRegistry = new Map();
     isLoading = true;

    defaultData = {id: 2, title: 'Туризм'};

     loadCategories() {
        return agent.Categories.all()
            .then(action((categories) => {
                this.categoryRegistry.clear();
                categories.forEach(category =>
                    this.categoryRegistry.set(category.id, category));
            }))
            .finally(action(() => { this.isLoading = false; }))
            .catch(action(err => {
                throw err;
            }));
    }

     loadCategory(id) {
        if (this.categoryRegistry.size>0) {
            return this.categoryRegistry.get(parseInt(id,10));
        }
        this.isLoading = true;
        return agent.Categories.get(id)
            .then(action((category) => {
                this.categoryRegistry.set(id, category);
                return category;
            }))
            .finally(action(() => {
                this.isLoading = false;
            }))
            .catch(action(err => {
                throw err;
            }));
    }
}

export default new CategoryStore();
