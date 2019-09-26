<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="item in products"
        :key="item.id"
        @click="getProduct(item.id)"
      >
        <div class="card">
          <img
            :src="item.imageUrl"
            class="card-img-top items_img"
            :alt=" '【' + item.category + '】' + item.title "
          />
          <div class="card-body items">
            <table class="items--table">
              <tr>
                <td class="items--category">【{{item.category}}】</td>
                <td
                  class="text-right items--origin_price"
                  v-if="item.origin_price"
                >{{item.origin_price | currency}}</td>
              </tr>
              <tr>
                <td class="card-text items--name">{{item.title}}</td>
                <td class="text-right items--price" :class="{'text-danger': item.origin_price}">
                  {{item.price | currency}}
                  <span style="font-size: 0.7em" v-if="item.unit">/{{item.unit}}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pagination="pagination" @page_change="getProducts"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      isLoading: false,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMAPI}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      this.$emit('get_product', id);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped lang="sass">
@import '@/assets/color.sass'

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
  .items_img
    transition: .5s
    &:hover
      transform: scale(1.1)
      margin-bottom: 10px
  .items
    padding: 10px 5px 0
    transition: .5s
    .items--table
      width: 100%
      font-size: 1.2em
      .items--category
        width: 100%
        position: relative
        left: -5px
        font-size: .75em
        opacity: .5
      .items--name
        letter-spacing: 1px
      .items--price
        display: inline-block
        width: 5rem
      .items--origin_price
        font-size: .9em
        text-decoration: line-through
        vertical-align: text-bottom
</style>
