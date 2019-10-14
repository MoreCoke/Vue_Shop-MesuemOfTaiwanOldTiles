<template>
  <div>
    <Navbar></Navbar>
    <header class="container-fluid">
      <div class="row header">
        <div class="col-12 text-primary" style="z-index: 1;pointer-events:none">
          <h1 class="font-weight-bold home--title">
            台灣
            <br />花磚
            <br />博物館
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
              :src="tilesBk.堅持"
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
              <h3 class="text-right home--entitle">Museum of Old Taiwan Tiles</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="container">
      <article class="container-fluid" id="history">
        <section class="row">
          <div class="col-6 col-md-3">
            <p class="font-weight-bold time">
              <i class="years">1915</i>問世
            </p>
            <p class="font-weight-bold time">
              <i class="years">1935</i>停產。
            </p>
          </div>
          <div class="col-6 col-md-9">
            <h5 class="text-right intro">「台灣花磚，僅在這塊土地出現二十年。」</h5>
          </div>
        </section>
        <section class="row __margin_top">
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
              />
              <img
                class="秋菊高潔"
                :src="tilesBk.秋菊高潔"
                alt="秋菊高潔"
                @mouseenter="mouseenter('秋菊高潔')"
                @mouseleave="mouseleave('秋菊高潔')"
              />
              <img
                class="黃金萬兩"
                :src="tilesBk.黃金萬兩"
                alt="黃金萬兩"
                @mouseenter="mouseenter('黃金萬兩')"
                @mouseleave="mouseleave('黃金萬兩')"
              />
            </div>
          </div>
          <div class="col-12 col-md-7">
            <p class="info">
              當時顯赫一時的富貴人家屋宅上，就會看到這些從日本進口而來的「馬約利卡磁磚」(Majolica Tiles)，匠師手工製作相當精緻費工，每片花磚圖騰代表著一種祝福，如蘋果代表平安、石榴代表多子多孫、蝙蝠代表福氣、桃子代表長壽。
              <br />
              <br />一片花磚比相同土地面積的售價還高，隨著二次世界大戰後停產，從此這些美麗花磚便凝結在老厝屋脊上，漸漸被世人遺忘。
            </p>
          </div>
        </section>
      </article>
      <article class="container-fluid" id="info">
        <section class="row">
          <h5 class="col-10 intro">「夢很美，現實卻有點困難，熱情一定會有熄的時候，但信念不會。」</h5>
          <div class="col-2">
            <p class="text-right font-weight-bold time">
              <i class="years">20</i>年前
            </p>
          </div>
        </section>
        <section class="row __margin_top">
          <div class="col-12 col-md-6">
            <p class="text-right info">
              約莫20年前，有一群人因緣際會認識了花磚，
              <br />默默開始投入搶救、保存與修復，
              <br />到如今已能復刻、再生花磚，下一步將繼續設法復興花磚文藝。
              <br />
              <br />綜觀全世界，幾乎找不到專門的花磚修復師，
              <br />目前為科技業主管的徐嘉彬，運用理工相關背景與知識，
              <br />研發修復花磚的除黴藥劑，讓老花磚宛若新生。
              <br />
              <br />
              <span class="font-weight-bold text-primary">
                他認為台灣花磚的復興之路上，光是努力搶救、蒐藏、保存還不夠，
                <br />必須老幹新生。
              </span>
              <br />
              <br />「台灣花磚博物館」現址原為1921年創立的德豐材木商行，
              <br />仿總統府建築設計的二樓檜木老宅。
              <br />二十年來蒐藏4000片，走進古厝，現場展示部分1500片被救回的台灣百年老花磚，蒐藏數量已是全球相關館藏量中數一數二。
            </p>
          </div>
          <div class="col-12 col-md-6 imgs __flex">
            <div class="m-0 --tiles __flex">
              <img
                class="幸運"
                :src="tilesBk.幸運"
                alt="幸運"
                @mouseenter="mouseenter('幸運')"
                @mouseleave="mouseleave('幸運')"
              />
              <img
                class="健康"
                :src="tilesBk.健康"
                alt="健康"
                @mouseenter="mouseenter('健康')"
                @mouseleave="mouseleave('健康')"
              />
              <img
                class="黃槿謙德"
                :src="tilesBk.黃槿謙德"
                alt="黃槿謙德"
                @mouseenter="mouseenter('黃槿謙德')"
                @mouseleave="mouseleave('黃槿謙德')"
              />
              <img
                class="海棠春好"
                :src="tilesBk.海棠春好"
                alt="海棠春好"
                @mouseenter="mouseenter('海棠春好')"
                @mouseleave="mouseleave('海棠春好')"
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
          <div class="col-12 __margin_top">
            <p class="text-center info">
              隨著都市化的腳步，全台花磚老屋從上萬棟，到現在拆毀已剩不到數百棟，怪手機具無情地大力一挖，百年技藝也應聲碎裂一地。
              <br />徐嘉彬和一群志同道合的夥伴，展開長達二十年的搶救行動，全台探勘現場、拜訪屋主，奔波穿梭在拆屋現場，
              <br />
              <br />
              <span
                class="font-weight-bold text-primary"
              >「總要為台灣花磚文化留下它美麗的身影，拆掉一片就少一片，我們在與拆屋更新的速度賽跑，能救一片是一片。」</span>
              <br />徐嘉彬道出支持他繼續走下去的信念。
              <br />
              <br />搶救過程並非如想像中的簡單，先爬上頹圮屋樑，進行專業鑽孔、切割、打牆、吊運與運送，
              <br />到後端刨除水泥塊、反覆刷洗與浸泡藥劑，將滲入百年的頑固黴菌予以清除，耗時數月，才能重現往日鮮豔奪目的釉彩。
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
        <section class="row __margin_top">
          <p class="text-center info">
            2016年透過法國艾克斯‧馬賽大學（Aix Marseille University）將台灣花磚文化與世界多國花磚併同，向聯合國教科文組織申請「世界非物質文化遺產」後，美、英、法、日等國也陸續有學者專家前來交流，並表達合作意願。
            <br />隔年受邀到日本最大的百年INAX生活博物館（INAX Museum）展出，也遠赴美國華盛頓哥倫比亞特區的國立建築博物館展覽花磚工藝。
            <br />此外，台灣花磚博物館也受邀到台北故事館、台南林百貨展示，述說台灣老花磚的故事。
            <br />
            <br />目前，已有飯店、民宿及咖啡館採用徐嘉彬團隊研發的花磚飾品，臉書台灣分公司成立時，也指定600片花磚用於其辦公室裝潢上。
            <br />2018年，台灣花磚博物館與博客來書店共同打造3款花磚紅包袋，2019年再與天仁茗茶合作推出花磚茶禮盒，並設計10套精美花磚卡套。
            <br />
            <br />
            <span class="font-weight-bold text-primary">「我們真正想做的是，讓花磚在台灣重生，重新走入民眾生活中。」</span>徐嘉彬語氣堅定地述說成立博物館的理念，
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
              />
              <img
                class="財富"
                :src="tilesCyan.財富"
                alt="財富"
                @mouseenter="mouseenter('財富', '', 'cyan')"
                @mouseleave="mouseleave('財富', '', 'cyan')"
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
import Navbar from '@/components/Navbar.vue';
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


// status
.__vertical
  writing-mode: vertical-rl

.__flex
  display: flex

.__margin_top
  margin-top: 60px


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
  width: 35%
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
      width: 65%
      height: 1px
      margin-top: 30px

.time
  font-size: calc(1rem * 1.3)
  .years
    padding-right: .5rem
    font-size: calc(1rem * 5)
    line-height: calc(1rem * 5.5)
    font-weight: 400

.info
  line-height: calc(1rem * 2.5)

#history
  .intro
    +intro
    margin-top: 2em
    padding-bottom: 4px
    border-bottom: 1px solid rgba($black,.5)
  .imgs
    height: 450px
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
        height: calc(450px / 3)

#info
  .intro
    +intro
    margin-top: 2em
    margin-bottom: 1em
    padding-bottom: 4px
    border-bottom: 1px solid rgba($black,.5)
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
        height: calc(600px / 4)

#protect
  .line
    +line
    +h_center
    margin-bottom: .5em
  .intro
    +intro
    +h_center
    transform: translateX(-4px)
    margin-bottom: 1em
    font-size: calc(1rem * 1.5)
    letter-spacing: 3px
    line-height: 0
  .img
    +h_center
    transform: translateX(-50%)
    width: 100%
      
#further
  .line
    +line
    +h_center
    margin-bottom: 1.5em
  .intro
    +intro
    +h_center
    transform: translateX(-50%)
    margin-top: 1em
    font-size: calc(1rem * 1.5)
    letter-spacing: 3px
    line-height: calc(1rem * 3)

#future
  .line
    +line
    +h_center
    margin-bottom: 1.5em
  .--tiles
    padding-top: 2em
    img
      height: calc(300px / 2)
      transition: 1s
  .--img
    +h_center
    transform: translate(-50%)
    width: 300px
    overflow: hidden
    img
      width: 100%
      border: 5px solid $teal
</style>