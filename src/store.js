import Vue from 'vue'
import Vuex from 'vuex'
import axios from './signUpAxios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        signUpOk: true,
        logDone: false
    },
    getters:{

    },
    mutations: {

    },
    actions: {
        signUp({commit, state}, authData){
            axios.post('/signupNewUser?key=AIzaSyAr7sqm-7JNNnHTNv2IzF-gU3c1VTciEoU', {
                email: authData.signUpEmail,
                password: authData.signUpPassword,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                alert('註冊成功！')
                state.signUpOk = false;
            })
            .catch(err => {
                console.log(err)
            })
        },
        logIn({commit, state}, authData){
            axios.post('/verifyPassword?key=AIzaSyAr7sqm-7JNNnHTNv2IzF-gU3c1VTciEoU', {
                email: authData.logInEmail,
                password: authData.logInPassword,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                state.logDone = true
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})