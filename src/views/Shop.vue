<template>
  <div>
    <loading :active.sync="status.isLoading" color="#71A2A7"></loading>
    <Navbar></Navbar>
    <HeaderTiles :is-shop="status.isShop"></HeaderTiles>
    <div class="container">
      <SubNavbar
        :is-loading="status.isLoading"
        :carts-length="cartsLength"
        :favorite-length="favoriteLength"
        @open_cart_modal="openCartModal"
      ></SubNavbar>
      <main class="row main">
        <router-view name="sidebar"></router-view>
        <div class="col-12 col-md-10">
          <keep-alive>
            <router-view
              :product="product"
              @test="favoriteLength"
              @get_product="getProduct">
            </router-view>
          </keep-alive>
        </div>
      </main>
    </div>
    <Footer></Footer>
    <Cart :carts="carts"></Cart>
  </div>
</template>

<script>
import $ from 'jquery';
import Navbar from '@/components/Navbar.vue';
import HeaderTiles from '@/components/shop/HeaderTiles.vue';
import SubNavbar from '@/components/shop/SubNavbar.vue';
import Footer from '@/components/shop/Footer.vue';
import Cart from '@/components/shop/Cart.vue';

export default {
  data() {
    return {
      product: {},
      carts: [],
      cartsLength: 0,
      favoriteLength: 0,
      status: {
        isLoading: false,
        isShop: true,
      },
    };
  },
  components: {
    Navbar,
    SubNavbar,
    HeaderTiles,
    Footer,
    Cart,
  },
  methods: {
    openCartModal() {
      $('#cartModal').modal('show');
    },
    getProduct(id) {
      const vm = this;
      vm.$route.params.id = id;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.$route.params.id}`;
      vm.status.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        // console.log('get product', vm.product);
        if (response.data.success) {
          vm.$router
            .push(`/shop/product_id=${response.data.product.id}`)
            .catch(() => {});
          // console.log(vm);
          vm.status.isLoading = false;
        }
      });
    },
  },
  watch: {
    // 當route出現變化再重新執行一次以重新調用複用元件
    $route(to) {
      if (to.name === 'item') {
        this.getProduct(to.params.id);
      }
    },
  },
  created() {
    this.$bus.$on('getProduct', (item) => {
      this.getProduct(item);
    });
  },
  // mounted() {
  //   const s = skrollr.init();
  // }
};
</script>

<style scoped lang='sass'>
.main
  margin-top: 60px
  transition: .5s
  @media all and (max-width: 767.98px)
    margin: 0

.navbar
  align-items: flex-start
</style>
