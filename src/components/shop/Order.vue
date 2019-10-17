<template>
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1 p-0 __bd">
      <div class="__bd __gap" v-if="this.order">
        <h3
          class="font-weight-bold mb-3 m-0 cart--header--title"
          :class="{'text-primary': order.is_paid}"
        >{{order.is_paid? '付款成功':'訂單成立'}}</h3>
        <div class="cart--content">
          <table class="pb-3 cart--contents __bdt __bdb">
            <tr>
              <td width="70" class="pt-4 carts--subtitle">
                <p>姓名：</p>
              </td>
              <td class="pt-4">
                <p>{{order.user? order.user.name : ''}}</p>
              </td>
              <td width="70" class="pt-4 carts--subtitle">
                <p>地址：</p>
              </td>
              <td width="250" class="pt-4">
                <p>{{order.user? order.user.address : ''}}</p>
              </td>
            </tr>
            <tr>
              <td class="carts--subtitle">
                <p>電話：</p>
              </td>
              <td>
                <p>{{order.user? order.user.tel : ''}}</p>
              </td>
              <td width="60" class="__vat carts--subtitle" rowspan="2">
                <p>備註：</p>
              </td>
              <td width="250" class="__vat" rowspan="2">{{order.message}}</td>
            </tr>
            <tr>
              <td class="pb-3 carts--subtitle">
                <p>Email：</p>
              </td>
              <td class="pb-3">
                <p>{{order.user? order.user.email : ''}}</p>
              </td>
            </tr>
            <tr class="__bdb __bdt">
              <td colspan="3"></td>
              <td class="pt-3 pb-3 text-right font-weight-bold">數量</td>
            </tr>
            <tr v-for="item in order.products" :key="item.id">
              <td colspan="3">
                <p class="m-0 mt-2 mb-2">【{{item.product.category}}】{{item.product.title}}</p>
              </td>
              <td class="text-right">
                <p class="m-0 mt-2 mb-2">{{item.qty}} {{item.product.unit}}</p>
              </td>
            </tr>
          </table>
        </div>
        <table class="cart--footer">
          <tr>
            <td width="85%" class="pt-4 pb-5">
              <p class="text-right m-0 font-weight-bold cart-footer-total">總計：</p>
            </td>
            <td width="100" class="pt-4 pb-5">
              <p class="text-right m-0 cart-footer-total">{{order.total | currency}}</p>
            </td>
          </tr>
        </table>
        <button
          class="btn btn-outline-primary cart--next"
          @click.once="payOrder(order.id)"
          v-if="!order.is_paid"
        >確認並付款</button>
        <button class="btn btn-outline-primary cart--next" disabled v-else>付款成功</button>
      </div>
      <p v-else>您的訂單成立中⋯⋯</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {},
      orderId: ""
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${this.orderId}`;
      const vm = this;
      this.$http.get(api).then(response => {
        vm.order = response.data.order;
        // console.log('getorder',response.data);
      });
    },
    payOrder(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${id}`;
      const vm = this;
      this.$http.post(api).then(response => {
        vm.getOrder();
      });
    }
  },
  created() {
    this.orderId = this.$route.params.id;
    this.getOrder();
  },
};
</script>

<style scoped lang="sass">
@import '@/assets/_color.sass'

@mixin fz($p)
  font-size: 1rem * $p

.__gap
  margin: 10px
  padding: 5vw
  @media all and (max-width: 567.98px)
    padding: 10vw

.__bd
  border: 1px solid $cyan

.__bdb
  border-bottom: 1px solid $cyan

.__bdt
  border-top: 1px solid $cyan

.__vat
  vertical-align: top

.cart--contents
  width: 100%
  @media all and (max-width: 567.98px)
    font-size: calc(1rem * .9)

.carts--subtitle
  font-weight: 700
  word-break: keep-all
    
.cart--footer
  width: 100%

  .cart--footer--coupon
    width: 60%
    padding-left: 15px
    +fz(1.2)

  .cart--footer--coupon--ps
    padding: 0
    padding-left: 15px
    font-size: .9em

  .cart-footer-total
    +fz(1.2)
    @media all and (max-width: 567.98px)
      +fz(1)

.cart--next
  width: 25%
  position: relative
  left: 75%
  +fz(1.2)
  @media all and (max-width: 768px)
    width: 35%
    left: 70%
  @media all and (max-width: 567.98px)
    width: 100%
    position: static
    +fz(1)
</style>
