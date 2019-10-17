<template>
  <header class="container-fluid">
    <div class="row header">
      <div class="col-12 text-primary about">
        <h1 class="font-weight-bold about--title" v-if="!isShop">
            參觀
            <br />資訊
        </h1>
        <h1 class="font-weight-bold about--title" v-else>
            花磚
            <br />商店
        </h1>
      </div>

      <div class="about--imgs">
        <div class="__r_flex">
          <img
            id="百事合意"
            :src="tilesBk.百事合意"
            alt="百事合意"
            @mouseenter="mouseenter('百事合意','id')"
            @mouseleave="mouseleave('百事合意','id')"
          />
          <img
            id="秋菊高潔"
            :src="tilesBk.秋菊高潔"
            alt="秋菊高潔"
            @mouseenter="mouseenter('秋菊高潔','id')"
            @mouseleave="mouseleave('秋菊高潔','id')"
          />
          <img
            id="財富"
            :src="tilesBk.財富"
            alt="財富"
            @mouseenter="mouseenter('財富','id')"
            @mouseleave="mouseleave('財富','id')"
          />
          <img
            id="黃槿謙德"
            :src="tilesBk.黃槿謙德"
            alt="黃槿謙德"
            @mouseenter="mouseenter('黃槿謙德','id')"
            @mouseleave="mouseleave('黃槿謙德','id')"
          />
          <img
            id="黃金萬兩"
            :src="tilesBk.黃金萬兩"
            alt="黃金萬兩"
            @mouseenter="mouseenter('黃金萬兩','id')"
            @mouseleave="mouseleave('黃金萬兩','id')"
          />
          <img
            id="健康"
            :src="tilesBk.健康"
            alt="健康"
            @mouseenter="mouseenter('健康','id')"
            @mouseleave="mouseleave('健康','id')"
          />
          <img
            id="堅持"
            class="fadein"
            :src="tilesColor.堅持"
            alt="堅持"
            @mouseenter="mouseenter('堅持','id')"
            @mouseleave="mouseleave('堅持','id')"
          />
          <img
            id="幸運"
            :src="tilesBk.幸運"
            alt="幸運"
            @mouseenter="mouseenter('幸運','id')"
            @mouseleave="mouseleave('幸運','id')"
          />
          <img
            id="海棠春好"
            :src="tilesBk.海棠春好"
            alt="海棠春好"
            @mouseenter="mouseenter('海棠春好','id')"
            @mouseleave="mouseleave('海棠春好','id')"
          />
          <img
            id="玉蘭貞潔"
            :src="tilesBk.玉蘭貞潔"
            alt="玉蘭貞潔"
            @mouseenter="mouseenter('玉蘭貞潔','id')"
            @mouseleave="mouseleave('玉蘭貞潔','id')"
          />
        </div>
        <div>
          <div class="__flex">
            <div class="line __hide"></div>
            <h3 class="text-right about--entitle" v-if="!isShop">Visit Information</h3>
            <h3 class="text-right about--entitle" v-else>Old Taiwan Tiles Shop</h3>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Header from "@/components/shop/Header.vue";

// tilesBk
import 百事合意_bk from "@/assets/img/black_1x/百事合意_四方連續_線稿_black.png";
import 秋菊高潔_bk from "@/assets/img/black_1x/秋菊高潔_四方連續_線稿_black.png";
import 黃金萬兩_bk from "@/assets/img/black_1x/黃金萬兩_四方連續_線稿_black.png";
import 財富_bk from "@/assets/img/black_1x/財富_四方連續_線稿_black.png";
import 黃槿謙德_bk from "@/assets/img/black_1x/黃槿謙德_四方連續_線稿_black.png";
import 健康_bk from "@/assets/img/black_1x/健康_四方連續_線稿_black.png";
import 堅持_bk from "@/assets/img/black_1x/堅持_四方連續_線稿_black.png";
import 幸運_bk from "@/assets/img/black_1x/幸運_四方連續_線稿_black.png";
import 海棠春好_bk from "@/assets/img/black_1x/海棠春好_四方連續_線稿_black.png";
import 玉蘭貞潔_bk from "@/assets/img/black_1x/玉蘭貞潔_四方連續_線稿_black.png";

//tilesCyan
import 堅持_cyan from "@/assets/img/cyan_1x/堅持_四方連續_線稿_cyan.png";
import 財富_cyan from "@/assets/img/cyan_1x/財富_四方連續_線稿_cyan.png";

//tilesColor
import 百事合意_color from "@/assets/img/colorful_1x/百事合意_四方連續_彩稿.png";
import 秋菊高潔_color from "@/assets/img/colorful_1x/秋菊高潔_四方連續_彩稿.png";
import 黃金萬兩_color from "@/assets/img/colorful_1x/黃金萬兩_四方連續_彩稿.png";
import 財富_color from "@/assets/img/colorful_1x/財富_四方連續_彩稿.png";
import 黃槿謙德_color from "@/assets/img/colorful_1x/黃槿謙德_四方連續_彩稿.png";
import 健康_color from "@/assets/img/colorful_1x/健康_四方連續_彩稿.png";
import 堅持_color from "@/assets/img/colorful_1x/堅持_四方連續_彩稿.png";
import 幸運_color from "@/assets/img/colorful_1x/幸運_四方連續_彩稿.png";
import 海棠春好_color from "@/assets/img/colorful_1x/海棠春好_四方連續_彩稿.png";
import 玉蘭貞潔_color from "@/assets/img/colorful_1x/玉蘭貞潔_四方連續_彩稿.png";

export default {
  props: {
    title: String,
    entitle: String,
    isShop: Boolean,
  },
  data() {
    return {
      tilesBk: {
        百事合意: 百事合意_bk,
        秋菊高潔: 秋菊高潔_bk,
        黃金萬兩: 黃金萬兩_bk,
        財富: 財富_bk,
        黃槿謙德: 黃槿謙德_bk,
        健康: 健康_bk,
        堅持: 堅持_bk,
        幸運: 幸運_bk,
        海棠春好: 海棠春好_bk,
        玉蘭貞潔: 玉蘭貞潔_bk
      },
      tilesCyan: {
        堅持: 堅持_cyan,
        財富: 財富_cyan
      },
      tilesColor: {
        百事合意: 百事合意_color,
        秋菊高潔: 秋菊高潔_color,
        黃金萬兩: 黃金萬兩_color,
        財富: 財富_color,
        黃槿謙德: 黃槿謙德_color,
        健康: 健康_color,
        堅持: 堅持_color,
        幸運: 幸運_color,
        海棠春好: 海棠春好_color,
        玉蘭貞潔: 玉蘭貞潔_color
      },
      test: 0
    };
  },
  methods: {
    mouseenter(tile, selecte) {
      let selector = ".";
      if (selecte === "id") {
        selector = "#";
      }
      const el = document.querySelector(`${selector}${tile}`);
      el.classList.remove("fadeout");
      el.setAttribute("src", this.tilesColor[tile]);
      el.classList.add("fadein");
    },
    mouseleave(tile, selecte, color) {
      let selector = ".";
      if (selecte === "id") {
        selector = "#";
      }
      const el = document.querySelector(`${selector}${tile}`);
      el.classList.add("fadeout");
      if (color === "cyan") {
        document
          .querySelector(`${selector}${tile}`)
          .setAttribute("src", this.tilesCyan[tile]);
      } else {
        document
          .querySelector(`${selector}${tile}`)
          .setAttribute("src", this.tilesBk[tile]);
      }
      el.classList.remove("fadein");
    }
  },
  created() {
    console.log(Math.floor(Math.random() * 9))
    this.test = Math.floor(Math.random() * 9);
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/color.sass"

// animation
.fadein
  animation: fadein .7s both

.fadeout
  animation: fadeout .3s

@keyframes fadein
  0%
    opacity: .5
    transform: translateY(0)
    box-shadow: 0 1px 1px rgba($black, .1)
  100%
    opacity: 1
    transform: translateY(-1px)
    box-shadow: 0 2px 1px rgba($black, .3)

@keyframes fadeout
  0%
    transform: translateY(-1px)
    box-shadow: 0 2px 1px rgba($black, .3)
  100%
    transform: translateY(0)
    box-shadow: 0 1px 1px rgba($black, .1)

  
@mixin fz($p)
  font-size: 1rem * $p

@mixin lh($f, $p)
  line-height: 1rem * $f * $p

.__flex
  display: flex

.header
  margin-top: 12vh
  padding: 0 3vw
  @media all and (min-width: 992px) and (max-width: 1199.98px)
    margin-bottom: 24vh
  @media all and (max-width: 768px)
    margin-bottom: 28vh

.about
  z-index: 1
  pointer-events: none

.about--nav
  margin: 50px 20px 0

.about--title
  text-shadow: -3px -3px 0 $white, 3px -3px 0 $white, -4px 4px 0 $white, 4px 4px 0 $white
  padding-left: 9vw
  +fz(7.5)
  letter-spacing: 10px
  +lh(7.5, 1.5)
  @media all and (min-width: 1441px)
    +fz(9)
    +lh(9, 1.7)
  @media all and (max-width: 575.98px)
    +fz(5.8)
    +lh(5.8, 1.5)
    padding-left: 0
  @media all and (max-width: 320.98px)
    +fz(5)
    +lh(5, 1.5)

.about--entitle
  width: 22%
  margin-top: 1.5vh
  +fz(1.2)
  letter-spacing: 1px
  @media all and (min-width: 1441px)
    width: 45%
    +fz(2)
  @media all and (min-width: 992px) and (max-width: 1199.98px)
    padding-right: 4rem
  @media all and (max-width: 768px)
    width: 40%
    padding-right: 1rem
  @media all and (max-width: 575.98px)
    padding: 0

.about--imgs
  width: 56vw
  position: absolute
  right: 13.5vw
  margin-top: -5vh
  @media all and (min-width: 1441px)
    margin-top: -2vh
  @media all and (min-width: 992px) and (max-width: 1199.98px)
    width: 90%
  @media all and (min-width: 577px) and (max-width: 1199.98px)
    margin-top: -7vh
    right: 0
  @media all and (min-width: 577px) and (max-width: 991.98px)
    width: 85%
  @media all and (min-width: 577px) and (max-width: 768px)
    margin-top: 5vh
    right: 0
  @media all and (max-width: 576px)
    width: 50vw
    margin-top: -7vh
    right: 8vw

  img
    width: (100% / 5)
    transition: .5s
    @media all and (max-width: 1199.98px)
      width: (100% / 4)
      opacity: .7
    @media all and (max-width: 576.98px)
      width: (100% / 2)

  .line
    width: 78%
    height: 1px
    margin-top: 30px
    background-color: $black
    opacity: .5
    @media all and (min-width: 992px) and (max-width: 1199.98px)
      margin-top: 4.5vh
    @media all and (max-width: 767.98px)
      width: 100%
    @media all and (max-width: 575.98px)
      display: none
    @media all and (max-width: 320.98px)
      margin-top: 1vh

@media all and (min-width: 769px) and (max-width: 1199.98px)
  .__r_flex
    display: flex
    flex-wrap: wrap
    justify-content: flex-end

@media all and (min-width: 575.98px) and (max-width: 768px)
  .__r_flex
    display: flex
    flex-wrap: wrap-reverse
    justify-content: flex-end

@media all and (max-width: 575.98px)
  .__hide
    display: none

  .__justify
    text-align: justify

  .__r_mt
    margin-top: 60px
</style>