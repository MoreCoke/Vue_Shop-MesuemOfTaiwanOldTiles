<template>
  <div>
    <Navbar></Navbar>
    <header class="container-fluid">
      <div class="row header">
        <div class="col-12 text-primary home">
          <h1 class="font-weight-bold home--title fadeinII">
            台灣
            <br />花磚
            <br />博物館
          </h1>
        </div>

        <div class="home--imgs fadeinIII">
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
              class="fadein"
              :src="tilesColor.黃槿謙德"
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
              id="幸運"
              :src="tilesBk.幸運"
              alt="幸運"
              @mouseenter="mouseenter('幸運','id')"
              @mouseleave="mouseleave('幸運','id')"
            />
            <img
              id="堅持"
              :src="tilesBk.堅持"
              alt="堅持"
              @mouseenter="mouseenter('堅持','id')"
              @mouseleave="mouseleave('堅持','id')"
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
          <div class="home--imgs--">
            <div class="__flex">
              <div class="line"></div>
              <h3 class="text-right home--entitle">Museum of Old Taiwan Tiles</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="container">
      <article class="container-fluid" id="history">
        <section class="row">
          <div class="col-12 col-md-3">
            <p class="font-weight-bold time">
              <i class="years">1915</i>問世
            </p>
            <p class="font-weight-bold time">
              <i class="years">1935</i>停產。
            </p>
          </div>
          <div class="col-12 col-md-9">
            <h5 class="text-right intro">「台灣花磚，僅在這塊土地出現二十年。」</h5>
          </div>
        </section>
        <section class="row __mt">
          <div class="col-12 col-md-5 imgs __flex">
            <div class="--img">
              <img src="@/assets/img/home-history.jpg" alt="花磚的歷史" />
            </div>
            <div class="m-0 --tiles __flex">
              <img
                class="百事合意"
                :src="tilesBk.百事合意"
                alt="百事合意"
                @mouseenter="mouseenter('百事合意')"
                @mouseleave="mouseleave('百事合意')"
                @click="toProduct('-Lo48olnrBWv4Ln9ZaMH')"
              />
              <img
                class="秋菊高潔"
                :src="tilesBk.秋菊高潔"
                alt="秋菊高潔"
                @mouseenter="mouseenter('秋菊高潔')"
                @mouseleave="mouseleave('秋菊高潔')"
                @click="toProduct('-Lmx7M5onozib4GioUJd')"
              />
              <img
                class="黃金萬兩"
                :src="tilesBk.黃金萬兩"
                alt="黃金萬兩"
                @mouseenter="mouseenter('黃金萬兩')"
                @mouseleave="mouseleave('黃金萬兩')"
                @click="toProduct('-LpReL5sQovLFraGfv9P')"
              />
            </div>
          </div>
          <div class="col-12 col-md-7">
            <p class="__justify __r_mt info">
              當時顯赫一時的富貴人家屋宅上，就會看到這些從日本進口而來的「馬約利卡磁磚」(Majolica Tiles)，
              匠師手工製作相當精緻費工，每片花磚圖騰代表著一種祝福，如蘋果代表平安、石榴代表多子多孫、蝙蝠代表福氣、桃子代表長壽。
              <br />
              <br />一片花磚比相同土地面積的售價還高，隨著二次世界大戰爆發後停產，從此這些美麗花磚便凝結在老厝屋脊上，漸漸地蒙塵，被世人遺忘。
            </p>
          </div>
        </section>
      </article>
      <article class="container-fluid" id="info">
        <section class="row">
          <h5 class="col-12 col-md-10 text-sm-right intro">「夢很美，現實卻有點困難，熱情一定會有熄的時候，但信念不會。」</h5>
          <div class="col-12 order-first order-md-last col-md-2">
            <p class="text-right font-weight-bold time">
              <i class="years">20</i>年前
            </p>
          </div>
        </section>
        <section class="row __mt">
          <div class="col-12 col-md-6">
            <p class="text-md-right __justify info">
              約莫20年前，有一群人因緣際會認識了花磚，
              <br class="__hide" />默默開始投入搶救、保存與修復，
              <br class="__hide" />到如今已能復刻、再生花磚，下一步將繼續設法復興花磚文藝。
              <br />
              <br />綜觀全世界，幾乎找不到專門的花磚修復師，
              <br class="__hide" />目前為科技業主管的徐嘉彬，運用理工相關背景與知識，
              <br class="__hide" />研發修復花磚的除黴藥劑，讓老花磚宛若新生。
              <br />
              <br />
              <span class="font-weight-bold text-primary">
                他認為台灣花磚的復興之路上，只努力搶救、蒐藏、保存還不夠，
                <br class="__hide" />必須老幹新生。
              </span>
              <br />
              <br />「台灣花磚博物館」現址原為1921年創立的德豐材木商行，
              <br class="__hide" />仿總統府建築設計的二樓檜木老宅。
              <br class="__hide" />二十年來蒐藏4000片，走進古厝，現場展示部分1500片被救回的台灣百年老花磚，蒐藏數量已是全球相關館藏量中數一數二。
            </p>
          </div>
          <div class="col-12 col-md-6 imgs __r_mt __flex">
            <div class="m-0 --tiles __flex">
              <img
                class="幸運"
                :src="tilesBk.幸運"
                alt="幸運"
                @mouseenter="mouseenter('幸運')"
                @mouseleave="mouseleave('幸運')"
                @click="toProduct('-Lp2sxn0zCjwdjQL9kqZ')"
              />
              <img
                class="健康"
                :src="tilesBk.健康"
                alt="健康"
                @mouseenter="mouseenter('健康')"
                @mouseleave="mouseleave('健康')"
                @click="toProduct('-LpReG7jiZEnOcdtRDRW')"
              />
              <img
                class="黃槿謙德"
                :src="tilesBk.黃槿謙德"
                alt="黃槿謙德"
                @mouseenter="mouseenter('黃槿謙德')"
                @mouseleave="mouseleave('黃槿謙德')"
                @click="toProduct('-Lo49KBAvSnjh6_JLI2I')"
              />
              <img
                class="海棠春好"
                :src="tilesBk.海棠春好"
                alt="海棠春好"
                @mouseenter="mouseenter('海棠春好')"
                @mouseleave="mouseleave('海棠春好')"
                @click="toProduct('-LoKDeNjloemDKDjdOCc')"
              />
            </div>
            <div class="--img">
              <img src="@/assets/img/home-info.jpg" alt="台灣花磚博物館簡介" />
            </div>
          </div>
        </section>
      </article>
      <article class="container-fluid" id="protect">
        <section class="row">
          <div class="col-12">
            <div class="line"></div>
            <h5 class="text-center __vertical intro">「能救一片，就是多一片。」</h5>
          </div>

          <div class="col-12">
            <img class="img" src="@/assets/img/home-protect.jpg" alt="搶救花磚" />
          </div>
          <div class="col-12 __mt">
            <p class="text-center info">
              隨著都市化的腳步，全台花磚老屋從上萬棟，拆毀至今已剩不到數百棟，怪手無情地大力一挖，百年技藝也應聲碎裂一地。
              <br />徐嘉彬和一群志同道合的夥伴，展開長達二十年的搶救行動，全台探勘現場、拜訪屋主，奔波穿梭在拆屋現場，
              <br />
              <br />
              <span
                class="font-weight-bold text-primary"
              >「總要為台灣花磚文化留下它美麗的身影，拆掉一片就少一片，我們在與拆屋更新的速度賽跑，能救一片是一片。」</span>
              <br />徐嘉彬道出支持他繼續走下去的信念。
              <br />
              <br />搶救過程並非如想像中的簡單，先爬上頹圮屋樑，進行專業鑽孔、切割、打牆、吊運與運送，
              <br class="__hide" />到後端刨除水泥塊、反覆刷洗與浸泡藥劑，將滲入百年的頑固黴菌予以清除，一片花磚耗時數月，才能重現往日鮮豔奪目的釉彩。
            </p>
          </div>
        </section>
      </article>
      <article class="container-fluid" id="further">
        <section class="row">
          <div class="col-12 text-center">
            <div class="line"></div>
            <p class="font-weight-bold time">
              <i class="years">2016</i>
            </p>
            <h5 class="text-left __vertical intro">
              「對我來說，
              <br />&nbsp;&nbsp; 花磚就是我這一生追求的大富大貴。」
            </h5>
          </div>
        </section>
        <section class="row __mt">
          <p class="text-center info">
            2016年透過法國艾克斯‧馬賽大學 (Aix Marseille University) 將台灣花磚文化與世界多國花磚併同，
            向聯合國教科文組織申請「世界非物質文化遺產」後美、英、法、日等國也陸續有學者專家前來交流，並表達合作意願。
            <br />隔年受邀到日本最大的百年INAX生活博物館 (INAX Museum) 展出，也遠赴美國華盛頓哥倫比亞特區的國立建築博物館展覽花磚工藝。
            <br />此外，台灣花磚博物館也受邀到台北故事館、台南林百貨展示，述說台灣老花磚的故事。
            <br />
            <br />目前，已有飯店、民宿及咖啡館採用徐嘉彬團隊研發的花磚飾品，臉書台灣分公司成立時，也指定600片花磚用於其辦公室裝潢上。
            <br />2018年，台灣花磚博物館與博客來書店共同打造3款花磚紅包袋，2019年再與天仁茗茶合作推出花磚茶禮盒，並設計10套精美花磚卡套。
            <br />
            <br />
            <span class="font-weight-bold text-primary">「我們真正想做的是，讓花磚在台灣重生，重新走入民眾生活中。」</span>
            徐嘉彬語氣堅定地述說成立博物館的理念，
            <br />也期待花磚能打入建材市場，有朝一日重回真正屬於它的地方。
          </p>
        </section>
      </article>
      <article class="container-fluid" id="future">
        <section class="row">
          <div class="col-12 text-center">
            <div class="line"></div>
            <p class="font-weight-bold text-primary time">
              <i class="years">Future.</i>
            </p>
          </div>
        </section>
        <section class="row">
          <div class="col-12">
            <div class="m-0 text-center --tiles">
              <img
                class="堅持"
                :src="tilesCyan.堅持"
                alt="堅持"
                @mouseenter="mouseenter('堅持', '', 'cyan')"
                @mouseleave="mouseleave('堅持', '', 'cyan')"
                @click="toProduct('-Lo4ZRdyocMqRIwBE0Vp')"
              />
              <img
                class="財富"
                :src="tilesCyan.財富"
                alt="財富"
                @mouseenter="mouseenter('財富', '', 'cyan')"
                @mouseleave="mouseleave('財富', '', 'cyan')"
                @click="toProduct('-Lp2sPeRIS0cLFumpFzi')"
              />
            </div>
            <div class="--img">
              <img src="@/assets/img/home-future.jpg" title="台灣花磚博物館館長-徐嘉彬" alt="台灣花磚博物館館長-徐嘉彬" />
            </div>
          </div>
        </section>
      </article>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import $ from 'jquery';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/shop/Footer.vue';

// tilesBk
import 百事合意Bk from '@/assets/img/black_1x/百事合意_四方連續_線稿_black.png';
import 秋菊高潔Bk from '@/assets/img/black_1x/秋菊高潔_四方連續_線稿_black.png';
import 黃金萬兩Bk from '@/assets/img/black_1x/黃金萬兩_四方連續_線稿_black.png';
import 財富Bk from '@/assets/img/black_1x/財富_四方連續_線稿_black.png';
import 黃槿謙德Bk from '@/assets/img/black_1x/黃槿謙德_四方連續_線稿_black.png';
import 健康Bk from '@/assets/img/black_1x/健康_四方連續_線稿_black.png';
import 堅持Bk from '@/assets/img/black_1x/堅持_四方連續_線稿_black.png';
import 幸運Bk from '@/assets/img/black_1x/幸運_四方連續_線稿_black.png';
import 海棠春好Bk from '@/assets/img/black_1x/海棠春好_四方連續_線稿_black.png';
import 玉蘭貞潔Bk from '@/assets/img/black_1x/玉蘭貞潔_四方連續_線稿_black.png';

// tilesCyan
import 堅持Cyan from '@/assets/img/cyan_1x/堅持_四方連續_線稿_cyan.png';
import 財富Cyan from '@/assets/img/cyan_1x/財富_四方連續_線稿_cyan.png';

// tilesColor
import 百事合意Color from '@/assets/img/colorful_1x/百事合意_四方連續_彩稿.png';
import 秋菊高潔Color from '@/assets/img/colorful_1x/秋菊高潔_四方連續_彩稿.png';
import 黃金萬兩Color from '@/assets/img/colorful_1x/黃金萬兩_四方連續_彩稿.png';
import 財富Color from '@/assets/img/colorful_1x/財富_四方連續_彩稿.png';
import 黃槿謙德Color from '@/assets/img/colorful_1x/黃槿謙德_四方連續_彩稿.png';
import 健康Color from '@/assets/img/colorful_1x/健康_四方連續_彩稿.png';
import 堅持Color from '@/assets/img/colorful_1x/堅持_四方連續_彩稿.png';
import 幸運Color from '@/assets/img/colorful_1x/幸運_四方連續_彩稿.png';
import 海棠春好Color from '@/assets/img/colorful_1x/海棠春好_四方連續_彩稿.png';
import 玉蘭貞潔Color from '@/assets/img/colorful_1x/玉蘭貞潔_四方連續_彩稿.png';

export default {
  data() {
    return {
      tilesBk: {
        百事合意: 百事合意Bk,
        秋菊高潔: 秋菊高潔Bk,
        黃金萬兩: 黃金萬兩Bk,
        財富: 財富Bk,
        黃槿謙德: 黃槿謙德Bk,
        健康: 健康Bk,
        堅持: 堅持Bk,
        幸運: 幸運Bk,
        海棠春好: 海棠春好Bk,
        玉蘭貞潔: 玉蘭貞潔Bk,
      },
      tilesCyan: {
        堅持: 堅持Cyan,
        財富: 財富Cyan,
      },
      tilesColor: {
        百事合意: 百事合意Color,
        秋菊高潔: 秋菊高潔Color,
        黃金萬兩: 黃金萬兩Color,
        財富: 財富Color,
        黃槿謙德: 黃槿謙德Color,
        健康: 健康Color,
        堅持: 堅持Color,
        幸運: 幸運Color,
        海棠春好: 海棠春好Color,
        玉蘭貞潔: 玉蘭貞潔Color,
      },
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    mouseenter(tile, selecte) {
      let selector = '.';
      if (selecte === 'id') {
        selector = '#';
      }
      const el = document.querySelector(`${selector}${tile}`);
      el.classList.remove('fadeout');
      el.setAttribute('src', this.tilesColor[tile]);
      el.classList.add('fadein');
    },
    mouseleave(tile, selecte, color) {
      let selector = '.';
      if (selecte === 'id') {
        selector = '#';
      }
      const el = document.querySelector(`${selector}${tile}`);
      el.classList.add('fadeout');
      if (color === 'cyan') {
        document
          .querySelector(`${selector}${tile}`)
          .setAttribute('src', this.tilesCyan[tile]);
      } else {
        document
          .querySelector(`${selector}${tile}`)
          .setAttribute('src', this.tilesBk[tile]);
      }
      el.classList.remove('fadein');
    },
    toProduct(product) {
      this.$router.push(`/shop/product_id=${product}`);
    },
  },
  mounted() {
    $(window).scroll(() => {
      if ($(window).scrollTop() > 180) {
        $('#history .intro').removeClass('ttx5 opacity');
        $('#history .time').removeClass('ttx-10 opacity');
      } else {
        $('#history .time').addClass('ttx-10 opacity');
        $('#history .intro').addClass('ttx5 opacity');
      }
      if ($(window).scrollTop() > 940) {
        $('#info .intro').removeClass('ttx-5 opacity');
        $('#info .time').removeClass('ttx10 opacity');
      } else {
        $('#info .intro').addClass('ttx-5 opacity');
        $('#info .time').addClass('ttx10 opacity');
      }
      if ($(window).scrollTop() > 2000) {
        $('#protect .line').removeClass('tty-5 opacity');
        $('#protect .intro').removeClass('opacity');
      } else {
        $('#protect .line').addClass('tty-5 opacity');
        $('#protect .intro').addClass('opacity');
      }
      if ($(window).scrollTop() > 3350) {
        $('#further .line').removeClass('tty-5 opacity');
        $('#further .time').removeClass('tty5 opacity');
        $('#further .intro').removeClass('opacity');
      } else {
        $('#further .line').addClass('tty-5 opacity');
        $('#further .time').addClass('tty5 opacity');
        $('#further .intro').addClass('opacity');
      }
      if ($(window).scrollTop() > 4725) {
        $('#future .line').removeClass('tty-5 opacity');
        $('#future .time').removeClass('tty5 opacity');
        $('#future .intro').removeClass('opacity');
      } else {
        $('#future .line').addClass('tty-5 opacity');
        $('#future .time').addClass('tty5 opacity');
        $('#future .intro').addClass('opacity');
      }
      if ($(window).scrollTop() > 4825) {
        $('#future .--tiles').removeClass('opacity');
      } else {
        $('#future .--tiles').addClass('opacity');
      }
      if ($(window).scrollTop() > 5000) {
        $('#future .--img').removeClass('opacity');
      } else {
        $('#future .--img').addClass('opacity');
      }
    });
  },
};
</script>

<style scoped lang="sass">
@import "@/assets/_color.sass"

// animation
.ttx-10
  transform: translateX(-10vw)

.ttx-5
  transform: translateX(-5vw)

.ttx10
  transform: translateX(10vw)

.ttx5
  transform: translateX(5vw)

.tty-10
  transform: translateY(-10vw)

.tty-5
  transform: translateY(-5vw)

.tty10
  transform: translateY(10vw)

.tty5
  transform: translateY(5vw)

.opacity
  opacity: 0

.fadein
  animation: fadein .7s both

.fadeinII
  animation: fadeinII .7s both

.fadeinIII
  animation: fadeinII 1.5s both

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

@keyframes fadeinII
  0%
    opacity: .5
  100%
    opacity: 1

@keyframes fadeout
  0%
    opacity: 1
    transform: translateY(-1px)
    box-shadow: 0 2px 1px rgba($black, .3)
  100%
    opacity: .7
    transform: translateY(0)
    box-shadow: 0 1px 1px rgba($black, .1)


// init
p,h5
  margin: 0

article
  margin-top: 15vh


// status
.__vertical
  writing-mode: vertical-rl

.__flex
  display: flex

.__mt
  margin-top: 60px

%__transition
  transition: 1s


// mixin
@mixin fz($p)
  font-size: 1rem * $p

@mixin lh($f, $p)
  line-height: 1rem * $f * $p

@mixin line
  width: 1px
  height: 6rem
  background-color: $black

@mixin h_center
  position: relative
  right: -50%

@mixin intro
  +fz(1.3)
  font-weight: 700
  letter-spacing: 1px


// common
.body
  position: relative
  padding-top: 9rem

.header
  margin-top: 12vh
  padding: 0 3vw

.home
  z-index: 1
  pointer-events: none

.home--nav
  margin: 50px 20px 0

.home--title
  padding-left: 9vw
  +fz(7.5)
  +lh(7.5, 1.5)
  letter-spacing: 10px
  text-shadow: -3px -3px 0 $white, 3px -3px 0 $white, -4px 4px 0 $white, 4px 4px 0 $white
  @media all and (min-width: 1441px)
    padding-left: 18vw
    +fz(9)
    +lh(9, 1.7)
  @media all and (max-width: 575.98px)
    padding-left: 0
    +fz(5.8)
    +lh(5.8, 1.5)
  @media all and (max-width: 320.98px)
    +fz(5)
    +lh(5, 1.5)

.home--imgs
  width: 95%
  position: absolute
  right: 0
  margin-top: -7vh
  @media all and (min-width: 1441px)
    width: 90%
    margin-top: -2vh
  @media all and (min-width: 992px) and (max-width: 1199.98px)
    width: 90%
  @media all and (min-width: 577px) and (max-width: 991.98px)
    width: 85%
  @media all and (min-width: 577px) and (max-width: 768px)
    margin-top: 5vh
  @media all and (max-width: 576px)
    width: 50vw
    right: 8vw

  img
    width: (100% / 5)
    opacity: .7
    transition: .5s
    @media all and (max-width: 1199.98px)
      width: (100% / 4)
    @media all and (max-width: 575.98px)
      width: (100% / 2)

  .line
    width: 100%
    height: 1px
    margin-top: 4vh
    opacity: .5
    background-color: $black
    @media all and (min-width: 992px) and (max-width: 1199.98px)
      margin-top: 4.5vh
    @media all and (max-width: 768.98px)
      margin-top: 3vh
    @media all and (max-width: 575.98px)
      display: none
    @media all and (max-width: 320.98px)
      margin-top: 1vh

.home--entitle
  width: 35%
  margin-top: 1.5vh
  padding-right: 4rem
  +fz(1.2)
  letter-spacing: 1px
  @media all and (min-width: 1441px)
    width: 45%
    +fz(2)
  @media all and (max-width: 768.98px)
    width: 100%
    padding-right: 1rem

.time
  @extend %__transition
  +fz(1.3)

  .years
    padding-right: .5rem
    +fz(5)
    font-weight: 400
    +lh(1, 5.5)

.__flex
  .--tiles
    cursor: pointer

.intro
  @extend %__transition

.info
  +lh(1, 2.5)

#history
  @media all and (max-width: 575.98px)
    margin-top: 30vh

  .intro
    +intro
    margin-top: 2rem
    padding-bottom: 4px
    border-bottom: 1px solid rgba($black, .5)
    @media all and (max-width: 575.98px)
      +lh(1.3, 2)

  .imgs
    height: 450px

  .--img
    overflow: hidden

    img
      width: auto
      height: 100%

  .__flex
    .__flex
      flex-direction: column
      flex-wrap: wrap

    .--tiles
      img
        height: (450px / 3)

#info
  .intro
    +intro
    margin-top: 2rem
    margin-bottom: 1rem
    padding-bottom: 4px
    border-bottom: 1px solid rgba($black, .5)
    @media all and (max-width: 575.98px)
      +lh(1.3, 2)

  .imgs
    height: 600px

  .--img
    overflow: hidden

    img
      height: 100%

  .__flex
    .__flex
      flex-direction: column
      flex-wrap: wrap

    .--tiles
      img
        height: (600px / 4)

#protect
  .line
    +line
    +h_center
    margin-bottom: .5rem
    @extend %__transition

  .intro
    +intro
    +h_center
    transform: translateX(-4px)
    margin-bottom: 1rem
    +fz(1.5)
    letter-spacing: 3px
    +lh(0, 0)

  .img
    +h_center
    transform: translateX(-50%)
    width: 100%

#further
  .line
    +line
    +h_center
    margin-bottom: 1.5rem
    @extend %__transition

  .intro
    +intro
    +h_center
    transform: translateX(-50%)
    margin-top: 1rem
    +fz(1.5)
    letter-spacing: 3px
    +lh(1, 3)

#future
  .line
    +line
    +h_center
    margin-bottom: 1.5rem
    @extend %__transition

  .--tiles
    padding-top: 2rem
    @extend %__transition

    img
      height: (300px / 2)
      transition: 1s
      cursor: pointer

  .--img
    +h_center
    transform: translate(-50%)
    width: 300px
    overflow: hidden
    @extend %__transition

    img
      width: 100%
      border: 5px solid $teal


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

@media all and (max-width: 320.98px)
  .info
    +fz(.9)
    +lh(.9, 2.5)

  #future
    .--tiles
      width: 100vw
      left: -10vw

      img
        height: (290px / 2)
</style>
