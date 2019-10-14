<template>
  <div class="col-2">
    <!-- navbar-expand-lg -->
    <nav class="navbar p-0 shop--sidebar">
      <!-- <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
      </button>-->

      <div
        id="navbarSupportedContent"
        data-50="padding-top: 0"
        data-200="padding-top: 25vh"
      >
        <ul class="navbar-nav flex-column">
          <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('所有商品')">
            <router-link to="/shop" class="nav-link text-right pt-1 pb-1 shop--sidebar--a">所有商品</router-link>
          </li>
          <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('台灣花磚')">
            <router-link
              to="/shop/taiwan_old_tiles"
              class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
            >台灣花磚</router-link>
          </li>
          <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('花磚小鏡子')">
            <router-link
              to="/shop/mirrors"
              class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
            >花磚小鏡子</router-link>
          </li>
          <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('花磚磁鐵')">
            <router-link
              to="/shop/magnets"
              class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
            >花磚磁鐵</router-link>
          </li>
          <li class="nav-item shop--sidebar--li" @click="getCategoryProducts('花磚竹杯墊')">
            <router-link
              to="/shop/coasters"
              class="nav-link text-right pt-1 pb-1 shop--sidebar--a"
            >花磚竹杯墊</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    getCategoryProducts(category) {
      this.$bus.$emit("getFilteredProducts", 1, category);
    }
  }
};
</script>

<style scoped lang="sass">
@import '@/assets/color.sass'

.shop--sidebar
  position: sticky
  top: 0
  #navbarSupportedContent
    transition: .5s
    .shop--sidebar--li
      word-break: keep-all
      &:after
        content: ''
        position: relative
        right: -100px
        font-size: 2em
        border-right: 1px $teal solid
      &:hover:after
        content: ''
        color: $teal
      &:last-child:after
        border: none
      &:first-child:before
        border: none
      .shop--sidebar--a
        color: $teal
        padding: 0
        padding-left: 20px
        transition: .5s
        // 圖片路徑無法打包
        // &:before
          content: ''
          position: absolute
          width: 20px
          height: 20px
          right: 70px
          background: url('')
        &:hover
          color: $black
        &:active
          color: $black
        // 超帥動畫
        // &:hover
        //   color: $black
        //   font-size: 2em
        // &:before
        //   content: 'Tiles'
        //   visibility: hidden
        //   color: $cyan
        //   position: relative
        //   right: -85px
        //   border-right: .5px $teal solid
        //   transition: .5s
        // &:hover:before
        //   content: ''
        //   visibility: visible
        //   font-size: 3em
        //   color: $teal
        // &:after
        //   content: ''
        //   visibility: hidden
        //   color: $cyan
        //   position: relative
        //   right: -85px
        //   border-right: .5px $teal solid
        //   transition: .5s
        // &:hover:after
        //   content: ''
        //   visibility: visible
        //   color: $teal
        //   font-size: 3em
        // &:last-child:after
        //   border: none
        // &:first-child:before
        //   border: none
</style>