import Vue from 'vue';
// Ajax
import axios from 'axios';
import VueAxios from 'vue-axios';
// Bootstrap
import 'bootstrap';
// validate
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
// Loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
// filter
import currencyFilter from './filters/currency';
import timestampFilter from './filters/timestamp';
// event bus
import '@/components/bus.js';

// validate
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// Ajax
Vue.use(VueAxios, axios);
// Loading
// Vue.use(Loading);
Vue.component('Loading', Loading);
// filter
Vue.filter('currency', currencyFilter);
Vue.filter('timestamp', timestampFilter);

Vue.config.productionTip = false;
// 前端要把 cookie 的開關打開
axios.defaults.withCredentials = true;



router.beforeEach((to, from, next) => {
  console.log('to:', to, 'from:', from, 'next:', next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      // console.log(response)
      if(response.data.success) {
        next();
      } else {
        next({path: '/login'});
      }
    })
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
