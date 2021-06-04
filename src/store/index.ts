import Vue from 'vue';
import Vuex from 'vuex';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false,
    themeColor: colors.blue.darken1,
  },
  mutations: {
    setDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    switchColor(state, payload) {
      state.themeColor = payload.themeColor;
    },
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store') as string)),
        );
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
