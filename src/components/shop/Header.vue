<template>
  <div>
    <header class="row header">
      <div class="col-12 col-sm-9">
        <h1 data-40="font-size: 3.5em" data-100="font-size: 2.5em">
          <router-link to="/shop" class="font-weight-bold shop--title">花磚商店</router-link>
        </h1>
      </div>
      <div class="col-12 col-sm-3 text-info icon">
        <!-- 產品搜尋 -->
        <div class="btn-group">
          <button
            type="button"
            class="pb-4 btn text-center icon--fas"
            id="dropdownMenuOffset"
            data-toggle="dropdown"
            data-display="static"
            aria-haspopup="true"
            aria-expanded="false"
            data-offset="10,20"
            title="產品搜尋"
          >
            <span class="fas--num">
              <i class="fas fa-search"></i>
            </span>
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuOffset">
            <p class="dropdown-header">產品搜尋</p>
            <div class="dropdown-divider"></div>
            <div class="input-group pl-2 pr-2 mb-2">
              <input
                type="text"
                class="form-control border-info"
                placeholder="請輸入產品名稱"
                v-model="keyWords"
              />
            </div>
            <div>
              <a
                class="dropdown-item"
                href="#"
                v-for="item in filteredProducts"
                :key="item.id"
                @click="findProducts(item.id)"
              >【{{item.category}}】{{item.title}}</a>
              <p
                class="dropdown-item text-center m-0"
                v-if="keyWords !== '' && !filteredProducts"
              >找不到相關產品唷</p>
            </div>
          </div>
        </div>

        <!-- 後台管理 -->
        <button
          class="btn text-center icon--fas"
          :class="{'text-primary': cartsLength}"
          title="後台管理"
        >
          <router-link to="/login" class="icon--fas">
            <i class="fas fa-user-cog"></i>
          </router-link>
        </button>

        <!-- 我的最愛 -->
        <div class="btn-group">
          <button
            type="button"
            class="btn text-center icon--fas"
            :class="{'text-primary': favoriteLength}"
            id="dropdownMenuOffset"
            data-toggle="dropdown"
            data-display="static"
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
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuOffset">
            <p class="dropdown-header">我的最愛</p>
            <div class="dropdown-divider"></div>

            <div v-if="favorites">
              <a class="dropdown-item" href="#" v-for="item in favorites" :key="item.id">
                【{{item.category}}】{{item.title}}
                <span
                  class="ml-2"
                >{{item.price | currency}} /{{item.unit}}</span>
                <i class="far fa-trash-alt ml-3" @click="removeFavorite(item)"></i>
              </a>
            </div>
            <p
              class="text-center text-muted m-0 pt-2 pb-2"
              v-if="favorites.length <= 0"
            >尋找一下你的最愛吧 ^_^</p>
          </div>
        </div>

        <!-- 購物車 -->
        <button
          class="btn text-center icon--fas"
          :class="{'text-primary': cartsLength}"
          title="購物車"
          @click.prevent="openModal"
        >
          <span class="fas--num">
            <i class="fas fa-shopping-cart" style="padding-right: 5px"></i>
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
    isLoading: Boolean
  },
  data() {
    return {
      keyWords: "",
      allProducts: [],
      cartsLength: 0,
      favorites: [],
      favoriteLength: 0
    };
  },
  methods: {
    findProducts(id) {
      // this.$router.push({ name: "item", params: { id: id } });
      this.$bus.$emit("getProduct", id);
      console.log(this.$router);
    },
    openModal() {
      this.$emit("open_cart_modal");
    },
    removeFavorite(item) {
      this.$bus.$emit("removeFavorite", item);
    }
  },
  computed: {
    filteredProducts() {
      if (this.keyWords.trim() !== "") {
        let t = this.allProducts.filter(el => {
          return el.title.indexOf(this.keyWords) > -1;
        });
        return t.length > 0 ? t : false;
      }
    }
  },
  created() {
    this.$bus.$on("favoriteLength", favoriteLength => {
      this.favoriteLength = favoriteLength;
    });
    this.$bus.$on("favorite", favorites => {
      this.favorites = favorites;
    });
    this.$bus.$on("get_cart_length", cartsLength => {
      this.cartsLength = cartsLength;
    });
  },
  updated() {
    this.$bus.$on("getAllProduct", allProducts => {
      this.allProducts = allProducts;
      console.log(this.allProducts);
    });
  },
  beforeDestroy() {
    this.$bus.$off("favoriteLength");
    this.$bus.$off("favorites");
    this.$bus.$off("get_cart_length");
    this.$bus.$off("getAllProduct");
  }
};
</script>

<style scoped lang='sass'>
@import '@/assets/color.sass'

// init
button
  background-color: transparent
  border: none
  &:active
    border: none
  &:focus
    outline: none

.shop--title
  color: $teal
  letter-spacing: 5px
  transition: .5s
  &:hover
    color: $black

.header
  transition: .5s
  margin-top: 20vh

.dropdown-menu
  min-width: 15rem
  .far
    &:hover
      color: $teal

.icon
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  font-size: 1.75em
  .icon--fas
    padding-bottom: 20px
    font-size: 1em
    color: $cyan
    line-height: .4em
    &:hover
      color: $teal
    &:focus
      color: $teal
      box-shadow: none  
    .fas--num
      display: flex
      flex-direction: column
      font-size: .4em
      .fas
        font-size: 2.5em
        padding-bottom: 5px
</style>
