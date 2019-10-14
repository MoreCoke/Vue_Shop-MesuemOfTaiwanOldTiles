import Vue from 'vue';
// 將$bus掛載在vue原型下
Vue.prototype.$bus = new Vue();

// AlertMsg
// vm.$bus.$emit('message:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式

// Prodcuts
// this.$bus.$emit("favorite", this.status.favoriteItems);
// this.status.favoriteItems(Array): 我的最愛產品
// this.$bus.$emit("favoriteLength", this.favoriteLength);
// this.favoriteLength(Number): 我的最愛產品長度

// Product
// this.$bus.$emit("addFavorite", item);
// item(Object): 加入我的最愛的產品
// this.$bus.$emit("removeFavorite", item); 
// item(Object): 移除我的最愛的產品
// this.$bus.$emit("getFilteredFavorite", item);
// item(Object): 篩選我的最愛的產品
// vm.$bus.$emit("getCart");
// 取得我的最愛產品列表

// Header
// this.$bus.$emit('removeFavorite', item);
// item(Object): 指定欲刪除的產品

// Sideber
// this.$bus.$emit("getFilteredProducts", 1, category);
// 1: 當前頁碼
// category: 產品種類

// Cart
// this.$bus.$emit("get_cart_length", this.cartsLength);
// this.cartsLength(Number): 購物車產品長度

// Order
// this.$bus.$emit('getOrder', vm.order)
// vm.order(Object): 取得該筆訂單資訊