import { createStore } from 'vuex';

const store = createStore({
  state: {
    selectedColor: []
  },
  mutations: {
    setColor(state, payload) {
      state.selectedColor = payload;
    },
  },
  actions: {
    
  },
  getters: {
    getColor(state) {
      return state.selectedColor;
    }
  },
});

export default store;