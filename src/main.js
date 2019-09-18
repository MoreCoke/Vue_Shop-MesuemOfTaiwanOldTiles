import Vue from 'vue';
// Ajax
import axios from 'axios';
import VueAxios from 'vue-axios';
// Bootstrap
import 'bootstrap';
// Loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
// filter
import currencyFilter from './filters/currency';
import timestampFilter from './filters/timestamp';

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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
