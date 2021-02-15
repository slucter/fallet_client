import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './module/Auth';
import Trx from './module/Transaction';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Trx,
  },
});
