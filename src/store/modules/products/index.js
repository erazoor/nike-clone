import database from '../../../database/database.json';

const mutations = {};

const actions = {};

const getters = {
    displayProducts(state) {
        return state.products;
    },
};

export default {
    namespaced: true,
    state() {
        return {
            products: database
        }
    },
    mutations,
    actions,
    getters
};