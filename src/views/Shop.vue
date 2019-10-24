<template>
  <div>
    <loading :active.sync="status.isLoading" color="#71A2A7"></loading>
    <Navbar></Navbar>
    <HeaderTiles :is-shop="status.isShop"></HeaderTiles>
    <div class="container">
      <SubNavbar
        :is-loading="status.isLoading"
        @open_cart_modal="openCartModal"
      ></SubNavbar>
      <main class="row main">
        <router-view name="sidebar"></router-view>
        <div class="col-md-10">
          <keep-alive>
            <router-view
              :product="product"
              @get_product="getProduct">
            </router-view>
          </keep-alive>
        </div>
      </main>
    </div>
    <Footer></Footer>
    <Cart></Cart>
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
    // 打開購物車頁面
    openCartModal() {
      $('#cartModal').modal('show');
    },
    // 取得單一產品
    getProduct(id) {
      const vm = this;
      vm.$route.params.id = id;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.$route.params.id}`;
      vm.status.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        if (response.data.success) {
          vm.$router
            .push(`/shop/product_id=${response.data.product.id}`)
            .catch(() => {});
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
