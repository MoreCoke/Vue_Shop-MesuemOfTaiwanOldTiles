<template>
  <div class="body">
    <loading :active.sync="isLoading"></loading>
    <!-- badge -->
    <div class="container">
      <Header @open_cart_modal="openCartModal"></Header>
      <main class="row main">
        <div class="col-10">
          <router-view @get_product="getProduct" :product="product"></router-view>
        </div>
        <!-- Sidebar -->
        <div class="col-2 test">
          <!-- navbar-expand-lg -->
          <nav class="navbar p-0 shop--sidebar">
            <!-- <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>-->

            <div class id="navbarSupportedContent">
              <ul class="navbar-nav flex-column">
                <li class="nav-item shop--sidebar--li">
                  <router-link
                    to="/shop"
                    class="nav-link text-right text pt-1 pb-1 shop--sidebar--a"
                    href="#"
                  >所有商品</router-link>
                </li>
                <li class="nav-item shop--sidebar--li">
                  <a class="nav-link text-right text pt-1 pb-1 shop--sidebar--a" href="#">台灣花磚</a>
                </li>
                <li class="nav-item shop--sidebar--li">
                  <a href="#" class="nav-link text-right text pt-1 pb-1 shop--sidebar--a">花磚小鏡子</a>
                </li>
                <li class="nav-item shop--sidebar--li">
                  <a href="#" class="nav-link text-right text pt-1 pb-1 shop--sidebar--a">花磚磁鐵</a>
                </li>
                <li class="nav-item shop--sidebar--li">
                  <a href="#" class="nav-link text-right text pt-1 pb-1 shop--sidebar--a">花磚竹杯墊</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </div>
    <Footer></Footer>
    <Background></Background>
    <Cart></Cart>
  </div>
</template>

<script>
import $ from 'jquery';
import Header from '@/components/shop/Header.vue';
import Footer from '@/components/shop/Footer.vue';
import Background from '@/components/shop/decoration/Background.vue';
import Cart from './Cart.vue';

export default {
  data() {
    return {
      allProducts: [],
      product: {},
      isLoading: false,
    };
  },
  components: {
    Header,
    Footer,
    Background,
    Cart,
  },
  methods: {
    openCartModal() {
      $('#cartModal').modal('show');
    },
    getAllProducts() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/products/all`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.allProducts = response.data.products;
        console.log('all product', vm.allProducts);
      });
    },
    getProduct(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/product/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        console.log('product', vm.product);
        if (response.data.success) {
          vm.$router.push(`/shop/${response.data.product.id}`);
          console.log(vm);
          vm.isLoading = false;
        }
      });
    },
  },
  created() {
    this.getAllProducts();
  },
};
</script>

<style scoped lang='sass'>
@import '@/assets/color.sass'
@import '@/assets/text.sass'

.body
  position: relative
  padding-top: 9em

.main
  margin-top: 60px
  transition: .5s

.test
  display: flex
  justify-content: flex-end
.shop--sidebar
  position: fixed
  .shop--sidebar--li
    &:after
      content: ''
      position: relative
      right: -100px
      font-size: 2.5em
      border-right: 1px $teal solid
      transition: .5s
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
        color: $teal
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
