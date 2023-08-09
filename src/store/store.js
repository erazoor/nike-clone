import { createStore } from 'vuex';
import productsModule from './modules/products/index';
import filtersModule from './modules/filters/index';

const store = createStore({
  modules: {
    products: productsModule,
    filters: filtersModule
  }
});

export default store;