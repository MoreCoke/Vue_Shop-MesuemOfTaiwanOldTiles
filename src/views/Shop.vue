<template>
  <div class="body">
    <loading :active.sync="isLoading"></loading>
    <!-- badge -->
    <div class="container">
      <nav class="row">
        <router-link to="/login" class="text-primary shop--nav">後台管理</router-link>
        <router-link to="/" class="text-primary shop--nav">首頁故事</router-link>
      </nav>
      <Header
        :is-loading="isLoading"
        :carts-length="cartsLength"
        :favorite-length="favoriteLength"
        @open_cart_modal="openCartModal"
        @get_cart="getCart"
      ></Header>
      <main class="row main">
        <div class="col-10">
          <keep-alive>
            <router-view
              ref="child"
              :order="order"
              :product="product"
              @test="favoriteLength"
              @get_product="getProduct"
              @get_cart="getCart"
              @get_favorite="getFavorite"
            ></router-view>
          </keep-alive>
        </div>
        <!-- Sidebar -->
        <div class="col-2">
          <Sidebar @get_category_products="getCategoryProducts"></Sidebar>
          <!-- navbar-expand-lg -->
          <!-- <nav class="navbar p-0 shop--sidebar">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="sticky"
              id="navbarSupportedContent"
              data-50="padding-top: 0"
              data-200="padding-top: 25vh"
            >
              <ul class="navbar-nav flex-column">
                <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('所有商品')">
                  <router-link
                    to="/shop"
                    class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
                  >所有商品</router-link>
                </li>
                <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('台灣花磚')">
                  <router-link
                    to="/shop/taiwan_old_tiles"
                    class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
                  >台灣花磚</router-link>
                </li>
                <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('花磚小鏡子')">
                  <router-link
                    to="/shop/mirrors"
                    class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
                  >花磚小鏡子</router-link>
                </li>
                <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('花磚磁鐵')">
                  <router-link
                    to="/shop/magnets"
                    class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
                  >花磚磁鐵</router-link>
                </li>
                <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('花磚竹杯墊')">
                  <router-link
                    to="/shop/coasters"
                    class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
                  >花磚竹杯墊</router-link>
                </li>
              </ul>
            </div>
          </nav>-->
        </div>
      </main>
    </div>
    <Footer></Footer>
    <Background></Background>
    <Cart :carts="carts" @order_data="orderData" @get_cart="getCart"></Cart>
  </div>
</template>

<script>
import $ from "jquery";
import Header from "@/components/shop/Header.vue";
import Sidebar from "@/components/shop/Sidebar.vue";
import Footer from "@/components/shop/Footer.vue";
import Background from "@/components/shop/decoration/Background.vue";
import Cart from "@/components/shop/modal/Cart.vue";
import AlertMsg from "@/components/AlertMsg.vue";

export default {
  data() {
    return {
      product: {},
      carts: [],
      cartsLength: 0,
      favoriteLength: 0,
      order: {},
      isLoading: false
    };
  },
  components: {
    Header,
    Footer,
    Background,
    Cart,
    Sidebar
  },
  methods: {
    orderData(data) {
      this.order = data;
    },
    openCartModal() {
      $("#cartModal").modal("show");
    },
    getCategoryProducts(category) {
      this.$refs.child.getFilteredProducts(1, category);
    },
    getProduct(id) {
      const vm = this;
      vm.$route.params.id = id;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.$route.params.id}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.product = response.data.product;
        console.log("get product", vm.product);
        if (response.data.success) {
          vm.$router
            .push(`/shop/product_id=${response.data.product.id}`)
            .catch(err => {});
          console.log(vm);
          vm.isLoading = false;
        }
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(api).then(response => {
        vm.carts = response.data.data;
        vm.cartsLength = response.data.data.carts.length;
      });
    },
    getFavorite() {

    }
    // delCartItem(id) {
    //   const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
    //   const vm = this;
    //   vm.isLoading = true;
    //   this.$http.delete(api).then(response => {
    //     vm.isLoading = false;
    //     vm.getCart();
    //   });
    // }
  },
  created() {},
  mounted() {
    const s = skrollr.init();
  }
};
</script>

<style scoped lang='sass'>
@import '@/assets/color.sass'

.body
  position: relative
  padding-top: 9em

.shop--nav
  position: relative
  top: -144px
  margin: 50px 20px 0
.main
  margin-top: 60px
  transition: .5s

.navbar
  align-items: flex-start

.shop--sidebar
  .sticky
    position: sticky
    top: 0
    transition: .5s
    .shop--sidebar--li
      word-break: keep-all
      &:after
        content: ''
        position: relative
        right: -100px
        font-size: 2em
        border-right: 1px $teal solid
      &:hover:after
        content: ''
        color: $teal
      &:last-child:after
        border: none
      &:first-child:before
        border: none
      .shop--sidebar--a
        color: $teal
        padding: 0
        padding-left: 20px
        transition: .5s
        // 圖片路徑無法打包
        // &:before
          content: ''
          position: absolute
          width: 20px
          height: 20px
          right: 70px
          background: url('')
        &:hover
          color: $black
        &:active
          color: $black
        // 超帥動畫
        // &:hover
        //   color: $black
        //   font-size: 2em
        // &:before
        //   content: 'Tiles'
        //   visibility: hidden
        //   color: $cyan
        //   position: relative
        //   right: -85px
        //   border-right: .5px $teal solid
        //   transition: .5s
        // &:hover:before
        //   content: ''
        //   visibility: visible
        //   font-size: 3em
        //   color: $teal
        // &:after
        //   content: ''
        //   visibility: hidden
        //   color: $cyan
        //   position: relative
        //   right: -85px
        //   border-right: .5px $teal solid
        //   transition: .5s
        // &:hover:after
        //   content: ''
        //   visibility: visible
        //   color: $teal
        //   font-size: 3em
        // &:last-child:after
        //   border: none
        // &:first-child:before
        //   border: none
</style>
