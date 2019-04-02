import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import router from './router'
import coverflow from '../node_modules/vue-coverflow'
import BootstrapVue from 'bootstrap-vue'
import EvaIcons from '../node_modules/vue-eva-icons'
import AOS from '../node_modules/aos'
import '../node_modules/aos/dist/aos.cjs'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(coverflow)
Vue.use(EvaIcons)
Vue.use(BootstrapVue)
new Vue({
  created(){
    AOS.init()
  },
  render: h => h(App),
  router,
}).$mount('#app')
