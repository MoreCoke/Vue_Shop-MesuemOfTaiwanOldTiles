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
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="container">
                <CartInfo
                v-show="status.isStep === 1"
                :carts="carts"
                @change_page="changePage"
                @get_cart="getCart"
              ></CartInfo>
              <CheckOut
                v-show="status.isStep === 2"
                @close_modal="closeModal"
                @change_page="changePage"
              ></CheckOut>
            </div>
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
  props: {
    carts: [Object, Array],
  },
  data() {
    return {
      order: {},
      status: {
        isLoading: false,
        isStep: 1
      }
    };
  },
  components: {
    CartInfo,
    CheckOut,
  },
  methods: {
    orderData() {
      this.$emit('order_data',this.order);
    },
    closeModal() {
      $("#cartModal").modal("hide");
      this.orderData();
    },
    // delCartItem(id) {
    //   this.$emit("del_cart_item", id);
    // },
    changePage(status) {
      this.status.isStep = status;
    },
    getCart() {
      this.$emit("get_cart");
    },
  }
};
</script>

<style scoped lang="sass">

*
  border: 1px solid black

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
