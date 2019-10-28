<template>
  <div>
    <loading :active.sync="status.isLoading" color="#71A2A7"></loading>
    <div
      class="modal bg-primary fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0 bg-primary text-white">
          <div class="modal-body ml-md-2 mr-md-2">
            <button
              type="button"
              class="close text-white"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
            >
              <i aria-hidden="true" class="fas fa-times"></i>
            </button>
            <CartInfo
              v-show="status.isCheckOut === false"
              :carts="carts"
              @close_modal="closeModal"
              @change_page="changePage"
              @get_cart="getCart"
            ></CartInfo>
            <CheckOut
              v-show="status.isCheckOut === true"
              @close_modal="closeModal"
              @change_page="changePage"
            ></CheckOut>
          </div>
        </div>
        <p class="text-info decoration_text __hide">
          <span></span> Museum of Old Taiwan Tiles
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import CartInfo from '@/components/shop/modal/CartInfo.vue';
import CheckOut from '@/components/shop/modal/CheckOut.vue';

export default {
  data() {
    return {
      carts: [],
      cartsLength: 0,
      status: {
        isLoading: false,
        isCheckOut: false,
      },
    };
  },
  components: {
    CartInfo,
    CheckOut,
  },
  methods: {
    // 取得購物車列表
    getCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(api).then((response) => {
        vm.carts = response.data.data;
        vm.cartsLength = response.data.data.carts.length;
        this.$bus.$emit('get_cart_length', this.cartsLength);
      });
    },
    // 關閉購物車頁面
    closeModal() {
      $('#cartModal').modal('hide');
    },
    // 換頁
    changePage(status) {
      this.status.isCheckOut = status;
    },
  },
  created() {
    this.getCart();
    this.$bus.$on('getCart', this.getCart);
  },
  beforeDestroy() {
    this.$bus.$off('getCart');
  },
};
</script>

<style scoped lang='sass'>
h1,h2,h3,h4,h5,h6,p,span,a,li,td,input,router-link
  &::selection
    background-color: $white

.close
  position: relative
  top: 10px
  right: 10px
  @media all and (min-width: 1441px)
    top: 35px
    right: 40px
    font-size: 2rem
  @media all and (max-width: 575.98px)
    top: 10px

.modal
  width: auto
  left: unset
  right: 0

.decoration_text
  display: inline-block
  position: fixed
  top: 70vh
  right: -4vw
  transform: rotate(90deg)
  z-index: 100
  @media all and (max-width: 1200px)
    right: -9vw
  @media all and (max-width: 768px)
    right: -10vw
  @media all and (max-width: 575.98px)
    top: 65vh
    right: -27vw

  > span
    width: 3rem
    display: inline-block
    border-bottom: 1px solid $white

@media all and (max-width: 575.98px)
  .__hide
    display: none
</style>
