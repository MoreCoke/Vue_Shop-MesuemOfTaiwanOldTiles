<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-7">
        <img
          class="item_img"
          :src="product.imageUrl"
          :alt="'【' + product.category + '】' + product.title"
        />
        <p class="text-primary path">
          <router-link to="/">首頁</router-link>>
          <router-link to="/shop">所有商品</router-link>> 台灣花磚 > 秋菊高潔
        </p>
      </div>
      <div class="col-12 col-lg-5 item">
        <h3 class="item--title">{{product.title}}</h3>
        <p class="text item--intro">{{product.description}}</p>
        <p class="item--price text-right">
          <!-- <span class="item--price_ps">售價： </span> -->
          <span
            class="text-primary item--origin_price"
            v-if="product.origin_price"
          >{{product.origin_price | currency}}</span>
          {{product.price | currency}}
          <span
            class="item--price_ps"
            v-if="product.unit"
          >/{{product.unit}}</span>
        </p>
        <div class="row item--btns">
          <div class="col-7">
            <div class="input-group mb-3">
              <div class="input-group-prepend" id="button-addon3">
                <button
                  class="btn btn-outline-primary"
                  :class="{disabled: qty <= 0}"
                  type="button"
                  @click="num(0)"
                >-</button>
              </div>
              <input
                type="number"
                class="form-control text-center item--num"
                placeholder
                aria-label="Example text with two button addons"
                aria-describedby="button-addon3"
                min="0"
                v-model.number="qty"
              />
              <div class="input-group-append" id="button-addon4">
                <button class="btn btn-outline-primary" type="button" @click="num(1)">+</button>
              </div>
            </div>
          </div>
          <div class="col-5">
            <button class="btn btn-outline-primary item--btn" @click="addToCart">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-5 offset-lg-7">
        <p class="text item--info">
          <span style="font-weight: 700">產品說明：</span>
          <br />{{product.content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      qty: 1,
    };
  },
  methods: {
    num(calc) {
      const qty = Number(this.qty);
      if ((calc === 1) && (this.qty >= 1)) {
        this.qty = qty + 1;
      }
      if ((calc === 0) && (this.qty >= 2)) {
        this.qty = qty - 1;
      }
      // if (calc === 0) {
      //   if (this.qty >= 1) {
      //     this.qty = qty - 1;
      //   }
      //   if (this.qty === 0) {
      //     this.qty = 1;
      //   }
      // }
    },
    addToCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      const cart = {
        product_id: vm.product.id,
        qty: vm.qty,
      };
      // console.log(cart);
      if (!vm.qty) {
        // console.log('請選擇數量');
      }
      this.$http.post(api, { data: cart }).then((response) => {
        // console.log(response.data);
        this.$emit('get_cart');
      });
    },
  },
};
</script>

<style scoped lang='sass'>
@import '@/assets/color.sass'

.path
  margin-top: .3em
  font-size: .9em
  @media all and (max-width: 992px)
    text-align: right
.item_img
  width: 100%

.item
  height: 25.625rem
  display: flex
  flex-direction: column
  @media all and (max-width: 1200px)
    height: 30rem
  @media all and (max-width: 992px)
    height: 21.875rem

  .item--title
    font-size: 2em
    letter-spacing: 2px
    flex-grow: 1
    @media all and (max-width: 992px)
      margin-top: .5em

  .item--price
    margin-right: 10px
    flex-grow: 1
    font-size: 1.75rem

    .item--price_ps
      position: relative
      font-size: .7em
    .item--origin_price
      font-size: .7em
      text-decoration: line-through

  .item--intro
    line-height: 2em
    flex-grow: 8

  .item--btns
    flex-grow: 1
    .item--btn
      width: 100%
      @media all and (max-width: 1200px)
        padding-left: 6px
        padding-right: 6px

.item--info
  margin-top: 1em
  font-size: .9em
  line-height: 1.9em
  white-space: pre

.item--num
  border: 1px $teal solid
</style>
