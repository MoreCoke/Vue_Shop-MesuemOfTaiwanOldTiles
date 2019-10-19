<template>
  <div class="row __mqpt">
    <div class="col-12 col-lg-7">
      <img
        v-if="product.imageUrl"
        class="item_img"
        :src="product.imageUrl"
        :alt="'【' + product.category + '】' + product.title"
      />
      <p class="text-primary item_path">
        <router-link to="/shop">花磚商店</router-link>>
        <router-link to="/shop/all">所有商品</router-link>>
        <span class="__hover" @click="turntoCategory">{{product.category}}</span>
        >
        {{product.title}}
      </p>
    </div>
    <div class="col-12 col-lg-5 item">
      <h3 class="item--title">
        <i class="fas fa-heart text-primary" v-if="status.isFavorite" @click="removeFavorite"></i>
        <i class="far fa-heart text-primary" v-else @click="addFavorite"></i>
        {{product.title}}
      </h3>
      <p class="text item--intro">{{product.description}}</p>
      <p class="item--price text-right">
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
    <div class="col-12 col-lg-5 offset-lg-7">
      <p class="text item--info">
        <span class="font-weight-bold">產品說明：</span>
        <br />{{product.content}}
      </p>
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
      status: {
        isFavorite: false,
      },
    };
  },
  methods: {
    turntoCategory() {
      switch (this.product.category) {
        case '台灣花磚':
          this.$router.push({ name: 'taiwan_old_tile' });
          break;
        case '花磚小鏡子':
          this.$router.push({ name: 'mirror' });
          break;
        case '花磚磁鐵':
          this.$router.push({ name: 'magnet' });
          break;
        case '花磚竹杯墊':
          this.$router.push({ name: 'coaster' });
          break;
        default:
          break;
      }
    },
    num(calc) {
      const qty = Number(this.qty);
      if (calc === 1 && this.qty >= 1) {
        this.qty = qty + 1;
      }
      if (calc === 0 && this.qty >= 2) {
        this.qty = qty - 1;
      }
    },
    addFavorite() {
      this.$bus.$emit('addFavorite', this.product);
      this.getFilteredFavorite();
    },
    removeFavorite() {
      this.$bus.$emit('removeFavorite', this.product);
      this.status.isFavorite = false;
    },
    getFilteredFavorite() {
      this.status.isFavorite = false;
      const i = JSON.parse(localStorage.getItem('favorite')) || [];
      this.status.isFavorite = i.some((el) => {
        const result = this.product.id === el.id;
        return result;
      });
    },
    addToCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      const cart = {
        product_id: vm.product.id,
        qty: vm.qty,
      };
      this.$http.post(api, { data: cart }).then(() => {
        vm.$bus.$emit('getCart');
      });
    },
  },
  beforeUpdate() {
    this.getFilteredFavorite();
    this.$bus.$emit('test', this.status.favorite);
  },
  created() {
    this.$emit('get_product', this.$route.params.id);
    this.favorites = JSON.parse(localStorage.getItem('favorite')) || [];
  },
};
</script>

<style scoped lang='sass'>
@import '@/assets/_color.sass'

@mixin fz($p)
  font-size: 1rem * $p

.__hover
  cursor: pointer
  &:hover
    color: #4e797e

.item_img
  width: 100%

.item_path
  margin-top: .3em
  +fz(.9)
  @media all and (max-width: 991.98px)
    text-align: right

.item
  height: 25.625rem
  display: flex
  flex-direction: column
  @media all and (max-width: 1199.98px)
    height: 30rem

  .item--title
    letter-spacing: 2px
    flex-grow: 1
    @media all and (max-width: 991.98px)
      margin-top: 2em

  .item--price
    margin-right: 10px
    flex-grow: 1
    +fz(1.75)

    .item--price_ps
      position: relative
      +fz(.7)

    .item--origin_price
      +fz(.7)
      text-decoration: line-through

  .item--intro
    line-height: 2em
    flex-grow: 8

  .item--btns
    flex-grow: 1
    .item--btn
      width: 100%
      @media all and (max-width: 1199.98px)
        padding-left: 6px
        padding-right: 6px

.item--info
  margin-top: 1em
  +fz(.9)
  line-height: 1.9em
  white-space: pre
  @media all and (max-width: 991.98px)
    margin-top: 3em
    white-space: pre-line

.item--num
  border: 1px $teal solid

.fa-heart
  &:hover
    cursor: pointer

@media all and (max-width: 991.98px)
  .__mqpt
    padding-top: 5vh

</style>
