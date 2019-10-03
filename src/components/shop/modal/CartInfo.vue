<template>
  <div class="row">
    <div class="col-10 offset-1">
      <table class="font-weight-bold cart--header">
        <tr>
          <td>
            <h3 class="font-weight-bold m-0 cart--header--title">購物車</h3>
          </td>
          <td width="140" class="text-center cart--header--type">數量</td>
          <td width="80" class="text-right cart--header--type">單價</td>
          <td width="140" class="text-right pr-4 cart--header--type">總價</td>
          <td width="50"></td>
        </tr>
      </table>
      <hr />
      <div class="cart--content">
        <table class="cart--contents">
          <tr class="cart--contents_bd" v-for="item in carts.carts" :key="item.id">
            <td width="190" class="pt-4 pb-4">
              <div class="cart--content--imgs">
                <img
                  :src="item.product.imageUrl"
                  :alt="`【${item.product.category}】${item.product.title}`"
                  class="img-fluid cart--content--img"
                />
              </div>
            </td>
            <td>
              <p class="m-0">
                <span>【{{item.product.category}}】</span>
                {{item.product.title}}
              </p>
            </td>
            <td width="140" class="text-center">
              <p class="m-0">{{item.qty}}</p>
            </td>
            <td width="80" class="text-right">
              <p class="m-0">{{item.product.price | currency}}</p>
            </td>
            <td width="140" class="text-right pr-4">
              <p class="m-0">{{item.product.price * item.qty | currency}}</p>
            </td>
            <td width="50" class="text-center">
              <p class="m-0" @click="delCartItem(item.id)">
                <i v-if="!isLoading" class="far fa-trash-alt"></i>
                <i v-else class="fas fa-spinner fa-spin"></i>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="col-12">
      <hr class="cart--hr" />
    </div>
    <div class="col-10 offset-1">
      <table class="cart--footer">
        <tr>
          <td>
            <div class="input-group mt-4 mb-2 cart--footer--coupon">
              <input
                type="text"
                class="form-control cart--footer--coupon--input"
                placeholder="請輸入八位英數字"
                value="TESTCODE"
                maxlength="8"
                v-model="couponCode"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary input-group-text"
                  type="button"
                  id="button-addon2"
                  @click="addCouponCode"
                >套用優惠券</button>
              </div>
            </div>
            <span class="cart--footer--coupon--ps">{{status.isMsg}}</span>
          </td>
          <td width="90">
            <p
              class="text-right m-0 font-weight-bold cart--footer--total"
            >{{carts.total === carts.final_total? "總計：":"優惠價："}}</p>
          </td>
          <td width="140">
            <p
              class="text-right m-0 pr-4 cart--footer--total"
            >{{carts.total === carts.final_total? carts.total:carts.final_total | currency}}</p>
          </td>
          <td width="50"></td>
        </tr>
      </table>
    </div>
    <div class="col-12">
        <button class="btn btn-outline-light cart--next" @click="changePage(2)">填寫購物資料</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carts: [Object, Array],
    isLoading: Boolean
  },
  data() {
    return {
      couponCode: "OLDTILES",
      status: {
        isMsg: ""
      }
    };
  },
  methods: {
    delCartItem(id) {
      this.$emit("del_cart_item", id);
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.couponCode
      };
      // console.log(coupon);
      this.$http.post(api, { data: coupon }).then(response => {
        // console.log(response.data);
        this.$emit("get_cart");
        if (!response.data.success) {
          vm.status.isMsg = `＊${response.data.message}`;
        } else {
          vm.status.isMsg = "";
        }
      });
    },
    changePage() {
      this.$emit("change_page", 2);
      if (this.carts.length === 0) {
        // console.log("請選購商品再進回來");
      }
    }
  },
  created() {
    this.$emit('get_cart')
  }
};
</script>

<style scoped lang="sass">
@import '@/assets/color.sass'
@import '@/assets/carts.sass'

.cart--header--type
  letter-spacing: 2px
  vertical-align: bottom
.cart--contents
  width: 100%
  .cart--contents_bd
    border-bottom: 1px solid rgba($white, .7)
    &:last-child
      border-bottom: 0px
    .cart--content--imgs
      width: 162px
      height: 100px
      overflow: hidden
      .cart--content--img
        width: 190px
    .far
      font-size: 1.2em
      vertical-align: text-top
      opacity: .7
    .far,.fas
      cursor: pointer
.cart--footer
  width: 100%
  .cart--footer--coupon
    width: 60%
    padding-left: 15px
    font-size: 1.2em
  .cart--footer--coupon--ps
    padding: 0
    padding-left: 15px
    font-size: .9em
  .cart--footer--total
    font-size: 1.2em
    padding-bottom: 5px
    padding-right: -10px
    vertical-align: bottom
.cart--next
  width: 15%
  position: relative
  left: 78%
  font-size: 1.2em
</style>
