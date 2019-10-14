<template>
  <div>
    <loading :active.sync="status.isLoading"></loading>
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0 bg-primary text-white">
          <div class="modal-body ml-2 mr-2">
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
        <p class="text-info decoration_text">
          <span style="vertical-align: text-bottom">_____</span> Museum of Old Taiwan Tiles
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import CartInfo from "@/components/shop/modal/CartInfo.vue";
import CheckOut from "@/components/shop/modal/CheckOut.vue";

export default {
  data() {
    return {
      carts: [],
      cartsLength: 0,
      status: {
        isLoading: false,
        isCheckOut: false
      }
    };
  },
  components: {
    CartInfo,
    CheckOut
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(api).then(response => {
        vm.carts = response.data.data;
        vm.cartsLength = response.data.data.carts.length;
        // console.log("getcart", response);
        this.$bus.$emit("get_cart_length", this.cartsLength);
      });
    },
    closeModal() {
      $("#cartModal").modal("hide");
    },
    changePage(status) {
      this.status.isCheckOut = status;
    }
  },
  created() {
    this.getCart();
    this.$bus.$on("getCart", this.getCart);
  },
  beforeDestroy() {
    this.$bus.$off("getCart");
  }
};
</script>

<style scoped lang="sass">
@import '@/assets/color.sass'

*
  // border: 1px solid black

h1,h2,h3,h4,h5,h6,p,span,a,li,td,input,router-link
  &::selection
    background-color: $white

// .cross
//   &:before,&:after
//     content: ''
//     display: block
//     position: relative
//     top: -40px
//     width: 2px
//     height: 50px
//     background-color: $white
//   &:before
//     transform: rotate(45deg) translateY(70%)
//   &:after
//     transform: rotate(-45deg) translateY(-70%)

.close
  position: relative
  top: -15px
  right: 10px

.modal
  width: auto
  left: unset
  right: 0

.modal-content
  padding-top: 10vh
  padding-bottom: 10vh
  height: 100vh
  @media all and (max-width: 1440px)
    padding-top: 5vh
.decoration_text
  position: fixed
  bottom: 150px
  right: -40px
  transform: rotate(90deg)
  z-index: 100
</style>
