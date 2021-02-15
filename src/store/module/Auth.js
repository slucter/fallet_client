import axios from 'axios';
// import jwt from 'jsonwebtoken';

const Auth = {
  namespaced: true,
  state: {
    userDataId: '',
    allUser: '',
    receiverUser: '',
    confirmData: '',
    active: 'a',
  },
  getters: {
    getUserId(state) {
      return state.userDataId.id;
    },
  },
  mutations: {
    ACTIVE_CLASS(state, data) {
      state.active = data;
    },
    USER_DATA_BY_ID(state, data) {
      state.userDataId = data;
    },
    GET_ALL_USER(state, data) {
      state.allUser = data;
    },
    RECEIVER_USER(state, data) {
      state.receiverUser = data;
    },
    CONFIRMATION_DATA(state, data) {
      state.confirmData = data;
    },
  },
  actions: {
    signUp(context, data) {
      return new Promise((resolve) => {
        axios.post(`${process.env.VUE_APP_APIURL}zwallet-api/user/signup`, data).then((result) => {
          resolve(result);
        });
      });
    },
    signIn(context, data) {
      return new Promise((resolve) => {
        axios.post(`${process.env.VUE_APP_APIURL}zwallet-api/user/signin`, data).then((result) => {
          resolve(result);
        });
      });
    },
    makePin(context, { pins }) {
      return new Promise((resolve) => {
        axios.patch(`${process.env.VUE_APP_APIURL}zwallet-api/user/setPin/`, { newPin: pins },
          {
            headers: {
              authorization: localStorage.pinSession || localStorage.token,
            },
          }).then((result) => {
          resolve(result);
        });
      });
    },
    patchImage(context, { id, image }) {
      return new Promise((resolve) => {
        axios.patch(`${process.env.VUE_APP_APIURL}zwallet-api/user/upload/img/${id}`, image).then((result) => {
          resolve(result);
        });
      });
    },
    getUserById(context, { id, token }) {
      return new Promise((resolve) => {
        axios.get(`${process.env.VUE_APP_APIURL}zwallet-api/user/${id}`, {
          headers: {
            authorization: token,
          },
        }).then((rslt) => {
          resolve(rslt);
          context.commit('USER_DATA_BY_ID', rslt.data.result[0]);
        });
      });
    },
    getAllUser(context, { token, page, search }) {
      return new Promise((resolve) => {
        axios.get(`${process.env.VUE_APP_APIURL}zwallet-api/user/?limit=5&page=${page}&search=${search}`, {
          headers: {
            authorization: token,
          },
        }).then((result) => {
          resolve(result);
          context.commit('GET_ALL_USER', result.data.result);
        });
      });
    },
    searchUser(context, { token, search }) {
      return new Promise((resolve) => {
        axios.get(`${process.env.VUE_APP_APIURL}zwallet-api/user/?search=${search}`, {
          headers: {
            authorization: token,
          },
        }).then((result) => {
          resolve(result);
          context.commit('GET_ALL_USER', result.data.result);
        });
      });
    },
    receiverUser(context, { token, id }) {
      return new Promise((resolve) => {
        axios.get(`${process.env.VUE_APP_APIURL}zwallet-api/user/${id}`, {
          headers: {
            authorization: token,
          },
        }).then((result) => {
          resolve(result);
          context.commit('RECEIVER_USER', result.data.result[0]);
        });
      });
    },
    confirmTrx(context, data) {
      context.commit('CONFIRMATION_DATA', data);
    },
    Verify(context, token) {
      return new Promise((resolve) => {
        axios.patch(`${process.env.VUE_APP_APIURL}zwallet-api/user/verif/${token}`).then((result) => resolve(result));
      });
    },
    patchUserSetting(context, { data, id }) {
      return new Promise((resolve) => {
        axios.patch(`${process.env.VUE_APP_APIURL}zwallet-api/user/update/personalSetting/${id}`, data).then((result) => {
          resolve(result);
        });
      });
    },
    changePw(context, { current, newpw }) {
      console.log(current);
      return new Promise((resolve) => {
        axios.patch(`${process.env.VUE_APP_APIURL}zwallet-api/user/changePassword`, {
          newPassword: newpw,
          oldPassword: current,

        }, {
          headers: {
            authorization: localStorage.token,
          },
        })
          .then((result) => resolve(result))
          .catch((error) => console.log(error));
      });
    },
  },
};

export default Auth;
