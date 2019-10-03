<template>
  <div>
    <header class="row header">
      <div class="col-12 col-sm-10">
        <h1 data-40="font-size: 3.5em" data-100="font-size: 2.5em">
          <router-link to="/shop" class="shop--title">台灣花磚博物館</router-link>
        </h1>
      </div>
      <div class="col-12 col-sm-2 text-info icon">
        <router-link to="/shop/order" class="icon--fas">
          <i class="fas fa-list-alt" title="訂單查詢"></i>
        </router-link>
        <router-link to="/login" class="icon--fas">
          <i class="fas fa-edit" title="後台管理"></i>
        </router-link>
        <button
          type="button"
          class="btn text-center icon--fas"
          id="dropdownMenuOffset"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-offset="10,20"
          title="我的最愛"
        >
          <span class="fas--num">
            <i class="fas fa-heart"></i>
            [{{favoriteLength}}]
          </span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
        <button class="btn text-center icon--fas" href="#" title="購物車" @click.prevent="openModal">
          <span class="fas--num">
            <i class="fas fa-shopping-cart" style="right:5%"></i>
            [{{cartsLength}}]
          </span>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    carts: [Array, Object],
    cartsLength: Number,
    isLoading: Boolean
  },
  data() {
    return {
      // favoriteLength: 0,
    };
  },
  methods: {
    openModal() {
      this.$emit("open_cart_modal");
    }
  },
  computed: {
    favoriteLength() {
      return JSON.parse(localStorage.getItem("favorite")).length;
    }
  }
};
</script>

<style scoped lang='sass'>
@import '@/assets/color.sass'

button
  background-color: transparent
  border: none
  &:active
    border: none

.header
  transition: .5s

.shop--title
  color: $black
  font-weight: 700
  letter-spacing: 5px
  transition: .5s
  &:hover
    color: $teal
  @media all and (max-width: 768px)
    font-size: 3em

.icon
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  font-size: 1.75em
  .icon--fas
    font-size: 1em
    line-height: .4em
    padding-bottom: 20px
    color: $cyan
    &:hover
      color: $teal
      // text-decoration: none
    .fas--num
      font-size: .4em
      position: relative
      top: 8px
      .fas
        font-size: 2.5em
        position: relative
</style>
