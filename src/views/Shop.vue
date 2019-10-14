<template>
  <div class="body">
    <loading :active.sync="isLoading"></loading>
    <Navbar></Navbar>
    <div class="container">
      <!-- <nav class="row">
        <router-link to="/login" class="text-primary shop--nav">後台管理</router-link>
        <router-link to="/" class="text-primary shop--nav">博物館故事</router-link>
        <router-link to="/about" class="text-primary shop--nav">參觀資訊</router-link>
        <router-link to="/shop" class="text-primary shop--nav">購買花磚</router-link>
      </nav>-->
      <Header
        :is-loading="isLoading"
        :carts-length="cartsLength"
        :favorite-length="favoriteLength"
        @open_cart_modal="openCartModal"
      ></Header>
      <main class="row main">
        <div class="col-10">
          <keep-alive>
            <router-view
              ref="child"
              :product="product"
              @test="favoriteLength"
              @get_product="getProduct"
            ></router-view>
          </keep-alive>
        </div>
        <!-- Sidebar -->
        <router-view name="sidebar"></router-view>
        <!-- <Sidebar></Sidebar> -->
      </main>
    </div>
    <Footer></Footer>
    <Cart :carts="carts"></Cart>
  </div>
</template>

<script>
import $ from "jquery";
import Navbar from '@/components/Navbar.vue';
import Header from "@/components/shop/Header.vue";
import Sidebar from "@/components/shop/Sidebar.vue";
import Footer from "@/components/shop/Footer.vue";
import Background from "@/components/shop/decoration/Background.vue";
import Cart from "@/components/shop/Cart.vue";

export default {
  data() {
    return {
      product: {},
      carts: [],
      cartsLength: 0,
      favoriteLength: 0,
      isLoading: false
    };
  },
  components: {
    Navbar,
    Header,
    Footer,
    Background,
    Cart,
    Sidebar
  },
  methods: {
    openCartModal() {
      $("#cartModal").modal("show");
    },
    // getCategoryProducts(category) {
    //   this.$refs.child.getFilteredProducts(1, category);
    // },
    getProduct(id) {
      const vm = this;
      vm.$route.params.id = id;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.$route.params.id}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.product = response.data.product;
        // console.log("get product", vm.product);
        if (response.data.success) {
          vm.$router
            .push(`/shop/product_id=${response.data.product.id}`)
            .catch(err => {});
          // console.log(vm);
          vm.isLoading = false;
        }
      });
    }
  },
  watch: {
    // 當route出現變化再重新執行一次以重新調用複用元件
    $route(to, from) {
      if (this.$route.name === "item") {
        this.getProduct(this.$route.params.id);
      }
    }
  },
  created() {
    this.$bus.$on("getProduct", item => {
      this.getProduct(item);
    });
  },
  mounted() {
    const s = skrollr.init();
  }
};
</script>

<style scoped lang='sass'>
@import '@/assets/color.sass'

.body
  // position: relative
  // padding-top: 9em

.shop--nav
  position: relative
  top: -144px
  margin: 50px 20px 0
.main
  margin-top: 60px
  transition: .5s

.navbar
  align-items: flex-start
</style>
