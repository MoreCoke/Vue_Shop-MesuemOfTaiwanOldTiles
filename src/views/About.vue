<template>
  <div>
    <Navbar></Navbar>
    <header class="container-fluid">
      <div class="row header">
        <div class="col-12 text-primary" style="z-index: 1;pointer-events:none">
          <h1 class="font-weight-bold home--title">
            參觀
            <br />資訊
          </h1>
        </div>

        <div class="home--imgs">
          <div class="home--imgI">
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
          </div>
          <div class="home--imgII">
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
          <div class="home--imgIII">
            <div class="__flex">
              <div class="line"></div>
              <h3 class="text-right home--entitle">Visit Information</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article class="container text-center">
      <section class="row">
        <h5 class="col-12 mb-5 font-weight-bold __margin_top about--visite">
          每週三 ~ 週日
          <br />10：00-12：00
          <br />14：00-17：00
          <br />農曆過年期間，除夕與初一休館
          <br />
          <br />
          <span class="font-weight-bold text-primary">※如遇週一與週二為國定假日，則當日正常時間開放。</span>
        </h5>
      </section>
      <section class="row __margin_top">
        <div class="col-4 mb-5">
          <i class="fas fa-money-bill text-primary"></i>
          <h5 class="font-weight-bold about--subtitle">門票50元</h5>
          <p class="about--content">
            可全額折抵館內商品消費，
            <br />參觀當日於博物館櫃檯現場購票
            <br />
            <span class="text-primary">
              ※持「花磚博物館磚友卡」之會員，
              <br />可免最低消費限制
            </span>
          </p>
        </div>
        <div class="col-4 mb-5">
          <i class="fas fa-parking text-primary"></i>
          <h5 class="font-weight-bold about--subtitle">停車資訊</h5>
          <p class="about--content">
            本館右方20公尺處，捷安特巷內有收費停車場
            <br />※本館前方為重點拖吊區，請注意違停
          </p>
        </div>
        <div class="col-4 mb-5">
          <i class="fas fa-exclamation-triangle text-primary"></i>
          <h5 class="font-weight-bold about--subtitle">注意事項</h5>
          <p class="about--content">除導盲犬外，寵物禁止入內，請見諒。</p>
        </div>
      </section>
      <section class="row __margin_top">
        <iframe
          class="col-12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117133.45992892011!2d120.37500868528389!3d23.445287523223477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e942d990e4e25%3A0x1c01fd9fa34f3582!2z6Ie654Gj6Iqx56Oa5Y2a54mp6aSo!5e0!3m2!1szh-TW!2stw!4v1571071573393!5m2!1szh-TW!2stw"
          width="100%"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </section>
    </article>
    <Footer></Footer>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/shop/Header.vue";
import Footer from "@/components/shop/Footer.vue";

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
      }
    };
  },
  components: {
    Navbar,
    Header,
    Footer
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
    opacity: 1
    transform: translateY(-1px)
    box-shadow: 0 2px 1px rgba($black, .3)
  100%
    opacity: .9
    transform: translateY(0)
    box-shadow: 0 1px 1px rgba($black, .1)
  

// init
p,h5
  margin: 0

article
  margin-top: 15vh


.__flex
  display: flex
  justify-content: space-between

// status
.__margin_top
  margin-top: 80px

// mixin
@mixin line
  width: 1px
  height: 6em
  background-color: $black

@mixin h_center
  position: relative
  right: -50%

@mixin intro
  font-size: calc(1rem * 1.3)
  font-weight: 700
  letter-spacing: 1px


// common
.body
  position: relative
  padding-top: 9em

.header
  margin-top: 12vh
  padding: 0 3vw

.home--nav
  margin: 50px 20px 0

.home--title
  padding-left: 9vw
  font-size: calc(1rem * 7.5)
  line-height: calc(1rem * 7.5 * 1.5)
  letter-spacing: 10px

.home--entitle
  width: 22%
  margin-top: 1.5vh
  font-size: calc(1rem * 1.2)
  letter-spacing: 1px

.home--imgs
  width: 56vw
  position: absolute
  right: 13.5vw
  margin-top: -5vh
  img
    width: calc(100% / 5)
    transition: .5s
    @media all and (max-width: 992px)
      width: calc(100% / 3)
  .home--imgIII
    .line
      +line
      width: 78%
      height: 1px
      margin-top: 30px

.about--visite
  letter-spacing: 2px
  line-height: 1rem * 3

.about--subtitle
  margin-bottom: 15px
  letter-spacing: 2px
  line-height: 1rem * 3

.col-4
  .fas
    font-size: 1rem * 3
    margin-bottom: 20px

.about--content
  line-height: 1rem * 2
</style>