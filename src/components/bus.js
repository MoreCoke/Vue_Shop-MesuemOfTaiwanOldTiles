import Vue from 'vue';
// 將$bus掛載在vue原型下
Vue.prototype.$bus = new Vue();

// Message
// vm.$bus.$emit('message:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式