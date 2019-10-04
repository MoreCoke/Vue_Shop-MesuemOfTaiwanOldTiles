<template>
  <div>
    <loading :active.sync="status.isLoading"></loading>
    <div class="row">
      <!-- <p @click="test">123</p> -->
      <div
        class="col-12 col-md-6 col-lg-4"
        v-show="item.is_enabled"
        v-for="item in products"
        :key="item.id"
      >
        <i
          class="fas fa-heart text-primary"
          v-if="getFilteredFavorite(item)"
          @click="removeFavorite(item)"
        ></i>
        <i class="far fa-heart text-primary" v-else @click="addFavorite(item)"></i>
        <div class="card" @click="getProduct(item.id)">
          <img
            :src="item.imageUrl"
            class="card-img-top items_img"
            :alt=" '【' + item.category + '】' + item.title "
          />
          <div class="card-body items">
            <table class="items--table">
              <tr>
                <td class="items--category">
                  <span>【{{item.category}}】</span>
                </td>
                <td
                  class="text-right items--origin_price"
                  v-if="item.origin_price"
                >{{item.origin_price | currency}}</td>
              </tr>
              <tr>
                <td class="card-text items--name">{{item.title}}</td>
                <td
                  width="90"
                  class="text-right items--price"
                  :class="{'text-danger': item.origin_price}"
                >
                  {{item.price | currency}}
                  <span
                    style="font-size: 0.7em"
                    v-if="item.unit"
                  >/{{item.unit}}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- <Pagination :pagination="pagination" @page_change="getProducts"></Pagination> -->
  </div>
</template>



<script>
import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      allProducts: [],
      products: [],
      product: {},
      pagination: {},
      favoriteLength: 0,
      status: {
        isLoading: false,
        favoriteItems: []
      },
      path: this.$router.currentRoute.path
    };
  },
  components: {
    Pagination,
    Icon: {
      template: `<slot name="Icon">
<i class="fas fa-heart text-primary"></i>
</slot>`
    }
  },
  methods: {
    getProducts(page = 1, category) {
      const vm = this;
      vm.status.isLoading = true;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.$http.get(api).then(response => {
        vm.allProducts = response.data.products;
        vm.products = Object.assign([], vm.allProducts);
        vm.status.isLoading = false;
      });
    },
    getFilteredProducts(page = 1, category) {
      const vm = this;
      if (category === "所有商品") {
        return (vm.products = vm.allProducts);
      }
      vm.products = vm.allProducts.filter(el => {
        return el.category === category;
      });
    },
    getProduct(id) {
      this.$emit("get_product", id);
    },
    addFavorite(item) {
      let obj = {
        id: item.id,
        title: item.title
      };
      this.status.favoriteItems.push(obj);
      localStorage.setItem(
        "favorite",
        JSON.stringify(this.status.favoriteItems)
      );
      this.getFavoriteLength();
      console.log(localStorage.getItem("favorite"));
    },
    removeFavorite(item) {
      let i = this.status.favoriteItems.findIndex(el => {
        return el.id === item.id;
      });
      this.status.favoriteItems.splice(i, 1);
      localStorage.setItem(
        "favorite",
        JSON.stringify(this.status.favoriteItems)
      );
      this.getFavoriteLength();
    },
    getFilteredFavorite(item) {
      return this.status.favoriteItems.some(el => {
        return item.id === el.id;
      });
    },
    getFavoriteLength() {
      this.favoriteLength = JSON.parse(localStorage.getItem("favorite")).length;
      this.$bus.$emit("favoriteLength", this.favoriteLength);
    }
  },
  watch: {
    $route(to, from) {
      this.path = this.$router.currentRoute.path;
    }
  },
  created() {
    this.getProducts(1, "所有商品");
    this.status.favoriteItems =
      JSON.parse(localStorage.getItem("favorite")) || [];
    this.getFavoriteLength();
  }
};
</script>

<style scoped lang="sass">
@import '@/assets/color.sass'

.far,.fas
  display: inline-block
  position: absolute
  top: 15px
  right: 2.5rem
  font-size: 1.2em
  transition: .5s
  cursor: pointer
  z-index: 100
  &:hover
    transform: scale(1.5)

.card
  border: none
  margin: 0 10px 70px
  transition: .5s
  overflow: hidden
  cursor: pointer
  &:hover
    box-shadow: 0 2px 10px rgba($black,.1)
    transform: translateY(5px)
    .items
      padding: 20px
    @media all and (min-width: 992px) and (max-width: 1200px)
      .items
        padding: 20px 5px
  .items_img
    transition: .5s
    &:hover
      transform: scale(1.1)
      margin-bottom: 10px
  .items
    padding: 10px 5px 0
    transition: .5s
    .items--table
      font-size: 1.2em
      .items--category
        width: 100%
        position: relative
        left: -5px
        font-size: .75em
        opacity: .5
        word-break: keep-all
      .items--name
        width: 70%
      .items--price
        display: inline-block
      .items--origin_price
        font-size: .9em
        text-decoration: line-through
        vertical-align: text-bottom

@media all and (min-width: 992px) and (max-width: 1200px)
  .card
    margin: 0
    margin-bottom: 70px
</style>
