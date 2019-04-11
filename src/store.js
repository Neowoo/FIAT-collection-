import Vue from 'vue';
import Vuex from 'vuex';
import axios from './signUpAxios';
import globalAxios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signUpOk: true,
    logDone: false,
    idToken: null,
    userId: null,
    user: null,
    key_wrong: false
  },
  getters: {},
  mutations: {
    authUser(state, authData) {
      state.idToken = authData.idToken;
      state.userId = authData.userId;
    },
    clearAuthUser(state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    setLogoutTime({ commit }, expiration) {
      setTimeout(() => {
        commit('clearAuthUser');
      }, expiration);
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
        state.signUpOk = false;
    },
    signUp({ commit, state }, authData) {
      axios
        .post('/signupNewUser?key=AIzaSyAr7sqm-7JNNnHTNv2IzF-gU3c1VTciEoU', {
          email: authData.signUpEmail,
          password: authData.signUpPassword,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res);
          const token = res.data.idToken;
          const userId = res.data.localId;
          const now = new Date();
          const expirationData = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);
          localStorage.setItem('expirationData', expirationData);
          alert('註冊成功！')
          state.signUpOk = false
          state.logDone = true
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch('setLogoutTime', expirationData);
        })
        .catch(err => {
          console.log(err);
        });
    },
    logIn({ commit, state }, authData) {
      axios
        .post('/verifyPassword?key=AIzaSyAr7sqm-7JNNnHTNv2IzF-gU3c1VTciEoU', {
          email: authData.logInEmail,
          password: authData.logInPassword,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res);
          const token = res.data.idToken;
          const userId = res.data.localId;
          const now = new Date();
          const expirationData = new Date(
            now.getTime() + res.data.expiresIn * 1000
          )
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);
          localStorage.setItem('expirationData', expirationData);
          state.logDone = true;
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          dispatch('setLogoutTime', expirationData);
        })
        .catch(err => {
          console.log(err);
          state.key_wrong = !state.key_wrong
        });
    },
    remainLogin({commit, state}){
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if(!token){
          return
        }
        const now = new Date()
        const expirationData = localStorage.getItem('expirationData')
        if(now >= expirationData){
          return
        }
        commit('authUser', {token: token, userId: userId})
        state.logDone = true
    },
    logout({commit, state}){
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('expirationData')
        commit('clearAuthUser')
        state.logDone = false
    }
    }
});
