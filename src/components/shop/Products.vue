<template>
  <div>
    <loading :active.sync="status.isLoading" color="#71A2A7"></loading>
    <div class="row __mqpt">
      <div
        class="col-12 col-sm-6 col-lg-4"
        v-show="item.is_enabled"
        v-for="item in filteredProducts"
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
                  <span class="items--unit" v-if="item.unit">/{{item.unit}}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allProducts: [],
      favorites: [],
      favoriteLength: 0,
      status: {
        isLoading: false,
        isFavortie: false,
      },
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      vm.status.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.$http.get(api).then((response) => {
        vm.allProducts = response.data.products;
        vm.$bus.$emit('getAllProduct', vm.allProducts);
        vm.status.isLoading = false;
      });
    },
    getProduct(id) {
      this.$emit('get_product', id);
    },
    addFavorite(item) {
      const obj = {
        id: item.id,
        category: item.category,
        title: item.title,
        price: item.price,
        unit: item.unit,
      };
      this.favorites.push(obj);
      localStorage.setItem('favorite', JSON.stringify(this.favorites));
      this.getFavoriteLength();
      this.$bus.$emit('favorite', this.favorites);
      // console.log(localStorage.getItem('favorite'));
    },
    removeFavorite(item) {
      const i = this.favorites.findIndex((el) => {
        const result = el.id === item.id;
        return result;
      });
      this.favorites.splice(i, 1);
      localStorage.setItem('favorite', JSON.stringify(this.favorites));
      this.getFavoriteLength();
      this.$bus.$emit('favorite', this.favorites);
    },
    getFilteredFavorite(item) {
      return this.favorites.some((el) => {
        const result = item.id === el.id;
        return result;
      });
    },
    getFavoriteLength() {
      if (!JSON.parse(localStorage.getItem('favorite'))) {
        return;
      }
      this.favoriteLength = JSON.parse(localStorage.getItem('favorite')).length;
      this.$bus.$emit('favoriteLength', this.favoriteLength);
    },
  },
  computed: {
    filteredProducts() {
      const product = this.allProducts;
      let filtered = '';
      switch (this.$route.name) {
        case 'shop':
          return product;
        case 'all':
          return product;
        case 'taiwan_old_tile':
          filtered = this.allProducts.filter((el) => {
            const result = el.category === '台灣花磚';
            return result;
          });
          return filtered;
        case 'mirror':
          filtered = this.allProducts.filter((el) => {
            const result = el.category === '花磚小鏡子';
            return result;
          });
          return filtered;
        case 'magnet':
          filtered = this.allProducts.filter((el) => {
            const result = el.category === '花磚磁鐵';
            return result;
          });
          return filtered;
        case 'coaster':
          filtered = this.allProducts.filter((el) => {
            const result = el.category === '花磚竹杯墊';
            return result;
          });
          return filtered;
        default:
          return product;
      }
    },
  },
  created() {
    this.getProducts();
    this.favorites = JSON.parse(localStorage.getItem('favorite')) || [];
    this.getFavoriteLength();
    // products to header
    this.$bus.$emit('favorite', this.favorites);
    // header to products
    this.$bus.$on('addFavorite', (item) => {
      this.addFavorite(item);
    });
    this.$bus.$on('removeFavorite', (item) => {
      this.removeFavorite(item);
    });
    this.$bus.$emit('getAllProduct', this.allProducts);
  },
  beforeDestroy() {
    this.$bus.$off('addFavorite');
    this.$bus.$off('removeFavorite');
  },
};
</script>

<style scoped lang="sass">
@import '@/assets/_color.sass'

@mixin fz($p)
  font-size: 1rem * ($p)

.far,.fas
  display: inline-block
  position: absolute
  top: 15px
  right: 2.5rem
  +fz(1.2)
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
  @media all and (min-width: 992px) and (max-width: 1200px)
    margin: 0
    margin-bottom: 70px
  &:hover
    box-shadow: 0 2px 10px rgba($black,.1)
    transform: translateY(5px)
    .items
      padding: 20px
      @media all and (min-width: 992px) and (max-width: 1200px)
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
      +fz(1.2)

      .items--category
        width: 100%
        position: relative
        left: -5px
        +fz(.75)
        word-break: keep-all
        opacity: .5

      .items--name
        width: 70%

      .items--price
        display: inline-block

      .items--unit
        +fz(.7)

      .items--origin_price
        +fz(.9)
        vertical-align: text-bottom
        text-decoration: line-through

@media all and (max-width: 991.98px)
  .__mqpt
    padding-top: 5vh
</style>
