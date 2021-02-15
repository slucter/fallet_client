import axios from 'axios';

const Trx = {
  namespaced: true,
  state: {
    dataHistoryId: [],
    dataHistoryIdAll: [],
    userId: '',
  },
  getters: {
    expense(state) {
      const id = state.userId;
      return state.dataHistoryIdAll.filter((e) => e.sender_id === id.toString())
        .reduce((sum, d) => sum + d.amount, 0);
    },
    income(state) {
      const id = state.userId;
      return state.dataHistoryIdAll.filter((e) => e.sender_id !== id.toString())
        .reduce((sum, d) => sum + d.amount, 0);
    },
  },
  mutations: {
    DATA_HISTORY_BY_ID(state, data) {
      state.dataHistoryId = data.result;
    },
    DATA_HISTORY_BY_ID_ALL(state, data) {
      state.dataHistoryIdAll = data.result.result;
    },
    USER_ID(state, data) {
      state.userId = data;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    getHistoryById(context, { id, token, limit }) {
      return new Promise((resolve) => {
        axios.get(`${process.env.VUE_APP_APIURL}zwallet-api/transaction/history/?user=${id}&limit=${limit}`).then((result) => {
          resolve(result);
          context.commit('DATA_HISTORY_BY_ID', result.data);
          context.commit('USER_ID', id);
        });
      });
    },
    // eslint-disable-next-line no-unused-vars
    getHistoryByIdAll(context, { id, token, limit }) {
      return new Promise((resolve) => {
        axios.get(`${process.env.VUE_APP_APIURL}zwallet-api/transaction/history/?user=${id}&limit=${limit}`).then((result) => {
          resolve(result);
          context.commit('DATA_HISTORY_BY_ID_ALL', result.data);
          context.commit('USER_ID', id);
        });
      });
    },
    sendMoney(context, { data, token }) {
      return new Promise((resolve) => {
        axios.post(`${process.env.VUE_APP_APIURL}zwallet-api/transaction/send`, data, {
          headers: {
            autorizathion: token,
          },
        }).then((result) => {
          resolve(result);
        });
      });
    },
  },
};

export default Trx;
