const mutations = {};

const actions = {};

const getters = {
    filterProducts(state) {
        return { ...state.filters, ...state.ranges, ...state.colors, ...state.sports };
    },
};

export default {
    namespaced: true,
    state() {
        return {
            filters: {
                type: 'gender',
                values: ['men', 'women', 'unisex']
            },
            ranges: {
                type: 'price',
                values: ['50', '50-100', '100-150', '150']
            },
            colors: {
                type: 'color',
                values: ['pourpre', 'noir', 'rouge', 'orange', 'bleu', 'blanc', 'marron', 'vert', 'jaune', 'gris', 'multicolore']
            },
            sports: {
                type: 'sport',
                values: ['running', 'football', 'basket']
            }
        }
    },
    mutations,
    actions,
    getters
};