<template>
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <table class="font-weight-bold cart--header">
        <tr>
          <td>
            <h3 class="font-weight-bold m-0 pr-md-5 mr-md-5 cart--header--title">購物車</h3>
          </td>
          <td width="140" class="text-center cart--header--type">數量</td>
          <td width="80" class="text-right pr-md-2 cart--header--type">單價</td>
          <td width="140" class="text-right pr-4 pr-md-5 cart--header--type">總價</td>
          <td width="50" class="__hide"></td>
        </tr>
      </table>
      <hr />
      <div class="cart--content">
        <p
          class="text-center cart__empty"
          v-show="carts.carts && carts.carts.length === 0"
        >挑些喜歡的花磚再回來吧 ^_^</p>
        <table class="cart--contents">
          <tr class="cart--contents_bd" v-for="item in carts.carts" :key="item.id">
            <td class="cart--content" colspan="2">
              <div class="cart--content--imgs">
                <img
                  :src="item.product.imageUrl"
                  :alt="`【${item.product.category}】${item.product.title}`"
                  class="img-fluid cart--content--img"
                />
              </div>
              <p class="m-0 cart--content--name">
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
            <td width="140" class="text-right pr-md-4">
              <p class="m-0">{{item.product.price * item.qty | currency}}</p>
            </td>
            <td width="50" class="text-center">
              <p class="m-0" @click="delCartItem(item.id)">
                <i v-if="!status.isLoading" class="far fa-trash-alt"></i>
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
    <div class="col-12 col-md-10 offset-md-1">
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
                  class="btn btn-outline-secondary input-group-text cart--footer--coupon--btn"
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
              class="text-right m-0 pr-md-4 cart--footer--total"
            >{{carts.total === carts.final_total? carts.total:carts.final_total | currency}}</p>
          </td>
          <td width="50" class="__hide"></td>
        </tr>
      </table>
    </div>
    <div class="col-12 col-md-4 offset-md-7 col-lg-3 offset-lg-8 col-xl-2 offset-xl-9">
      <button
        class="btn btn-outline-light cart--next"
        @click="backToShop"
        v-if="carts.carts && carts.carts.length === 0"
      >前往挑選</button>
      <button class="btn btn-outline-light cart--next"
              @click="changePage(true)" v-else>填寫購物資料</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carts: [Object, Array],
  },
  data() {
    return {
      couponCode: 'OLDTILES',
      status: {
        isMsg: '',
        isLoading: false,
      },
    };
  },
  methods: {
    delCartItem(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.status.isLoading = true;
      this.$http.delete(api).then(() => {
        vm.$emit('get_cart');
        vm.status.isLoading = false;
      });
    },
    addCouponCode() {
      if (this.carts.carts && this.carts.carts.length === 0) {
        this.status.isMsg = '＊請選購商品再使用優惠券';
        return;
      }

      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.couponCode,
      };
      // console.log(coupon);
      this.$http.post(api, { data: coupon }).then((response) => {
        // console.log(response.data);
        this.$emit('get_cart');

        if (!response.data.success) {
          vm.status.isMsg = `＊${response.data.message}`;
        } else {
          vm.status.isMsg = '';
        }
      });
    },
    changePage() {
      this.$emit('change_page', true);
    },
    backToShop() {
      this.$emit('close_modal');
      // console.log(this.$route);
      if (this.$route.path !== '/shop') {
        this.$router.push('/shop');
      }
    },
  },
  created() {
    this.$emit('get_cart');
  },
};
</script>

<style scoped lang="sass">
@import '@/assets/_carts.sass'

@mixin fz($p)
  font-size: 1rem * $p

.cart--header--type
  letter-spacing: 2px
  vertical-align: bottom
  @media all and (max-width: 567.98px)
    font-size: 1rem * .9

.cart__empty
  position: relative
  top: 50%
  +fz(1.5)
  letter-spacing: 2px
  transform: translateY(-50%)
  @media all and (max-width: 567.98px)
    +fz(1.2)

.cart--contents
  width: 100%
  .cart--contents_bd
    border-bottom: 1px solid rgba($white, .7)
    &:last-child
      border-bottom: 0px
    @media all and (max-width: 567.98px)
      +fz(.8)

    .cart--content
      height: 20vh
      padding: 3vh 5vw 3vh 0
      display: flex
      flex-direction: row
      align-items: center
      @media all and (max-width: 567.98px)
        height: 23vh
        flex-direction: column

      .cart--content--name
        padding-left: 2vw
        @media all and (max-width: 567.98px)
          padding: 0
          padding-top: 2.5vh

      .cart--content--imgs
        width: 162px
        @media all and (max-width: 567.98px)
          width: 100px

    .far
      +fz(1.2)
      vertical-align: text-top
      opacity: .7

    .far,.fas
      cursor: pointer

.cart--footer
  width: 100%

  .cart--footer--coupon
    width: 60%
    padding-left: 15px
    @media all and (max-width: 768px)
      width: 100%

    .cart--footer--coupon--input
      +fz(1.1)
      @media all and (max-width: 567.98px)
        +fz(.8)

    .cart--footer--coupon--btn
      +fz(1.1)
      @media all and (max-width: 567.98px)
        +fz(.8)

  .cart--footer--coupon--ps
    padding: 0
    padding-left: 15px
    +fz(.9)
    @media all and (max-width: 567.98px)
      +fz(.8)

  .cart--footer--total
    +fz(1.2)
    padding-right: -10px
    padding-bottom: 5px
    vertical-align: bottom
    @media all and (max-width: 567.98px)
      +fz(1)
      word-break: keep-all

@media all and (max-width: 567.98px)
  .cart--next
    +fz(1)
    word-break: keep-all

@media all and (max-width: 768px)
  .__hide
    display: none
</style>
