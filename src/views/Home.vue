<template>
  <div class="container-fluid home--body">
    <header class="container" style="margin-bottom: 400px">
      <nav class="row">
        <router-link to="/login" class="text-warning home--nav">後台管理</router-link>
        <router-link to="/shop" class="text-warning home--nav">商品購買</router-link>
      </nav>
      <div class="row">
        <p class="m-0 p-0 text-warning majolica">
          Majolica Tiles
          <span class="majolica_"></span>
          A Taiwanese Architectural Dialogue
        </p>
        <div class="col-12">
          <h1 class="font-weight-bold home--title">台灣花磚博物館</h1>
        </div>
        <p class="museumofoldtaiwantiles text-warning">
          <span class="museumofoldtaiwantiles_"></span> Museum of Old Taiwan Tiles
        </p>
        <a class="scrolldown" href="#history">
          <span>
            Scroll down
            <i class="fas fa-chevron-down"></i>
          </span>
        </a>
      </div>
    </header>
    <article class="container relative">
      <section class="row home--history" id="history">
        <div class="col-12">
          <img class="home--main--img" src="@/assets/img/home-history.png" alt />
        </div>
        <h5 class="col-12 col-lg-7 text-right font-weight-bold home--subtitle">
          「台灣花磚從1915年問世，到1935年停產，
          <br />僅在這塊土地出現二十年。」
        </h5>
        <div
          class="text-right"
          style="opacity:.3;z-index:-1;position:absolute;right:100px;top:500px;margin-top: 100px;border-bottom:1px solid white;border-right:1px solid white;font-size:5em;transform: rotate(-35deg)"
        >
          <p style="margin-right: 10px">
            1915
            <br />
          </p>
          <!-- <span style="margin-right: 300px;">2016</span> -->
          <p style="margin-right: 10px;margin-bottom: 0;margin-top: 200px">1935</p>
        </div>
        <p class="col-12 col-lg-7 text-right home--content">
          當時顯赫一時的富貴人家屋宅上，就會看到這些從日本進口而來的「馬約利卡磁磚」(Majolica Tiles)，匠師手工製作相當精緻費工，每片花磚圖騰代表著一種祝福，如蘋果代表平安、石榴代表多子多孫、蝙蝠代表福氣、桃子代表長壽。
          <br />一片花磚比相同土地面積的售價還高，隨著二次世界大戰後停產，從此這些美麗花磚便凝結在老厝屋脊上，漸漸被世人遺忘。
        </p>
      </section>
    </article>
    <article class="container-fluid relative">
      <section class="row home--intro" id="intro">
        <div class="col-12 col-lg-4 offset-lg-7 home--main__img">
          <img
            class="home--main--img"
            src="https://images.vocus.cc/124ea15a-5e09-4b67-aea8-60d7e39f43fd.jpg"
            alt
          />
        </div>
        <div class="col-12 col-lg-6 offset-lg-1">
          <h5 class="text-right font-weight-bold home--subtitle">
            「夢很美，現實卻有點困難，
            <br />熱情一定會有熄的時候，但信念不會。」
          </h5>
        </div>
        <div class="row bg-light" style="width: 120%">
          <div class="col-12 col-lg-5 offset-lg-2" style="height: 600px;">
            <p class="home--content">
              <br />約莫20年前，有一群人因緣際會認識了花磚，默默開始投入搶救、保存與修復，到如今已能復刻、再生花磚，下一步將繼續設法復興花磚文藝。
              <br />彷彿水泥工匠般的台灣花磚古厝創辦人徐嘉彬，其實本職是名科技業主管，20年前為尋求與心儀對象的共同話題，將對方老家上的花磚當成引子，沒想到除了牽起兩人一世情緣，也同時找到一生志業。
              <br />綜觀全世界，幾乎找不到專門的花磚修復師，目前為科技業主管的徐嘉彬，運用理工相關背景與知識，研發修復花磚的除黴藥劑，讓老花磚宛若新生，他認為台灣花磚的復興之路上，光是努力搶救、蒐藏、保存還不夠，必須老幹新生。
              <br />「台灣花磚博物館」現址原為1921年創立的德豐材木商行，仿總統府建築設計的二樓檜木老宅。二十年來蒐藏4000片，走進古厝，現場展示部分1500片被救回的台灣百年老花磚，蒐藏數量已是全球相關館藏量中數一數二。
            </p>
          </div>
        </div>
      </section>
      <section class="row home--protect" id="protect">
        <div class="img-fluid text-center home--main--img__clip">
          <img
            class="img-fluid home--main--img"
            src="https://images.vocus.cc/46cb7c4b-6c99-43fc-8c75-177db9a3625d.jpg"
            alt
          />
        </div>
        <div class="col-12">
          <h5
            class="text-center text-dark font-weight-bold"
            style="word-break: break-word;width: 16px;position:absolute;left:50%;transform:translateX(-50%);top:-1000px"
          >﹁能救一片，就是多一片。﹂</h5>
        </div>
        <div class="col-12 col-lg-8 offset-lg-2">
          <p class="text-center home--content">
            隨著都市化的腳步，全台花磚老屋從上萬棟，到現在拆毀已剩不到數百棟，怪手機具無情地大力一挖，百年技藝也應聲碎裂一地。徐嘉彬和一群志同道合的夥伴，展開長達二十年的搶救行動，全台探勘現場、拜訪屋主，奔波穿梭在拆屋現場，
            <br />
            <br />「總要為台灣花磚文化留下它美麗的身影，拆掉一片就少一片，我們在與拆屋更新的速度賽跑，能救一片是一片。」
            <br />徐嘉彬堅定地道出支持他繼續走下去的信念。
            <br />
            <br />搶救過程並非如想像中的簡單，先爬上頹圮屋樑，進行專業鑽孔、切割、打牆、吊運與運送，到後端刨除水泥塊、反覆刷洗與浸泡藥劑，將滲入百年的頑固黴菌予以清除，耗時數月，才能重現往日鮮豔奪目的釉彩。
          </p>
        </div>
      </section>
      <div class="home--protect__bgc"></div>

      <section class="row home--futher" id="futher">
        <div class="col-lg-6 offset-lg-1 bg-light">
          <h5 class="col-12 text-center text-primary font-weight-bold home--futher--subtitle">
            對我來說，
            <br />「花磚就是我這一生追求的大富大貴。」
          </h5>
          <p class="col-12 text-dark home--futher--content">
            目前，已有飯店、民宿及咖啡館採用徐嘉彬團隊研發的花磚飾品，臉書台灣分公司成立時，也指定600片花磚用於其辦公室裝潢上。2018年，台灣花磚博物館與博客來書店共同打造3款花磚紅包袋，2019年再與天仁茗茶合作推出花磚茶禮盒，並設計10套精美花磚卡套。
            <br />
            <br />「我們主要採取產品銷售與授權並進的模式。」徐嘉彬說，授權給博客來書店、天仁茗茶等知名品牌，除了互蒙其利，也希望提升台灣花磚的能見度。
            <br />此外，台灣花磚博物館也受邀到台北故事館、台南林百貨展示，述說台灣老花磚的故事。
            <br />繼2016年透過法國艾克斯‧馬賽大學（Aix Marseille University）將台灣花磚文化與世界多國花磚併同，向聯合國教科文組織申請「世界非物質文化遺產」後，美、英、法、日等國也陸續有學者專家前來交流，並表達合作意願。 隔年受邀到日本最大的百年INAX生活博物館（INAX Museum）展出，也遠赴美國華盛頓哥倫比亞特區的國立建築博物館展覽花磚工藝。
            <br />
            <br />「我們真正想做的是，讓花磚在台灣重生，重新走入民眾生活中。」徐嘉彬語氣堅定地述說成立博物館的理念，也期待花磚能打入建材市場，有朝一日重回真正屬於它的地方。
          </p>
        </div>
        <div class="col-12 home--futher--imgII__hidden">
          <img
            class="img-fluid home--futher--imgII"
            src="https://storage.googleapis.com/smiletaiwan-cms-cwg-tw/ckeditor/201812/ckeditor-5c1ccadd39463.jpg"
            alt
          />
        </div>
      </section>
    </article>
    <div class="container-fluid home--bg">
      <div class="home__bd home--bgI">
        <div class="wrap">
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/堅持_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/幸運_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/健康_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/百事合意_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/海棠春好_四方連續_彩稿.png" alt />
        </div>
        <div class="wrap">
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/財富_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/百事合意_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/堅持_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/秋菊高潔_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/財富_四方連續_彩稿.png" alt />
        </div>
        <div class="wrap">
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/健康_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/堅持_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/幸運_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/海棠春好_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/黃金萬兩_四方連續_彩稿.png" alt />
        </div>
        <div class="wrap">
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/秋菊高潔_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/黃槿謙德_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/黃金萬兩_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/健康_四方連續_彩稿.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/colorful_1x/玉蘭貞潔_四方連續_彩稿.png" alt />
        </div>
      </div>
      <div class="home__bd home--bgII"></div>
      <div class="home__bd home--bgIII">
        <div class="wrap">
          <img src="@/assets/img/white_1x/堅持_四方連續_線稿_white.png" alt class="m-0 p-0 home--img" />
          <img src="@/assets/img/white_1x/幸運_四方連續_線稿_white.png" alt class="m-0 p-0 home--img" />
          <img src="@/assets/img/white_1x/健康_四方連續_線稿_white.png" alt class="m-0 p-0 home--img" />
          <img src="@/assets/img/white_1x/財富_四方連續_線稿_white.png" alt class="m-0 p-0 home--img" />
          <img src="@/assets/img/white_1x/海棠春好_四方連續_線稿_white.png" alt class="m-0 p-0 home--img" />
        </div>
        <div class="wrap">
          <img class="m-0 p-0 home--img" src="@/assets/img/white_1x/財富_四方連續_線稿_white.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/white_1x/百事合意_四方連續_線稿_white.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/white_1x/堅持_四方連續_線稿_white.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/white_1x/秋菊高潔_四方連續_線稿_white.png" alt />
          <img class="m-0 p-0 home--img" src="@/assets/img/white_1x/財富_四方連續_線稿_white.png" alt />
        </div>
      </div>
    </div>
    <Footer class="row home--footer"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/shop/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style scoped lang="sass">
@import '@/assets/color.sass'


.wrap
  display: grid
  grid-template-columns: 150px 150px 150px 150px 150px
.home--body
  color: $white
  .home--nav
    margin: 50px 20px 0 20px
  .home--title
    margin-top: 47vh
    padding-left: 10px
    font-size: 4em
    letter-spacing: 7px
  .majolica
    position: absolute
    left: -160px
    bottom: 300px
    letter-spacing: 1.5px
    transform: rotate(90deg)
    .majolica_
      width: 60px
      display: inline-block
      margin: 0 7px
      border-bottom: 1px solid $yellow
  .museumofoldtaiwantiles
    position: fixed
    right: -50px
    bottom: 25vh
    transform: rotate(90deg)
    z-index: 999
    .museumofoldtaiwantiles_
      width: 50px
      display: inline-block
      border-bottom: 1px solid $yellow
  .scrolldown
    position: absolute
    top: 85vh
    right: 50vw
    color: $white
    opacity: .5
    transform: translateX(55%)
    transition: .5s
    cursor: pointer
    .fas
      display: inline-block
      position: relative
      top: 1.5em
      left: -50%
      opacity: .5
    &:hover
      opacity: 1

.relative
  position: relative
  .home--main--img
    width: 75%
    @media all and (max-width: 992px)
      width: 100%

  .home--history
    margin: auto 0
    padding-top: 50px
    margin-bottom: 200px
    .home--subtitle
      margin: 10vh 0 20px
      font-size: 1.5em
      letter-spacing: 2px
      line-height: 2.5em
    .home--content
      line-height: 2em

  .home--intro
    padding-top: 200px
    .home--subtitle
      padding-top: -50px
      font-size: 1.5em
      letter-spacing: 2px
      line-height: 2.5em
    .home--main__img
      position: absolute
      top: -10px
      @media all and (max-width: 992px)
        width: 80%
      .home--main--img
        width: 95%
    .home--content
      color: $black
      line-height: 2em

  .home--protect
    padding-top: 200px
    .home--content
      padding-top: 5em
      line-height: 2em

  .home--protect__bgc
    background-color: $black
    width: 100vw
    height: 1500px
    position: relative
    right: 30px
    top: -600px
    z-index: -99
    
  .home--futher
    margin-top: -1300px
    margin-bottom: -550px
    .home--futher--subtitle
      padding: 1.5em
      background-color: $white
      letter-spacing: 2px
      line-height: 2em
    .home--futher--content
      background-color: $white
      line-height: 2em
      padding: 0 2em 2em
    .home--futher--imgII__hidden
      position: relative
      overflow: hidden
      top: -680px
      z-index: -1
    .home--futher--imgII
      position: relative
      left: 40vw
      width: 60vw      

.home--bg
  width: 100%
  top: 0
  right: 0
  position: absolute
  overflow: hidden
  background-color: $black
  z-index: -999
  .home__bd
    width: 60%
    position: relative
    border: 1px solid rgba($white,.3)
    transform: rotate(-35deg)
    @media all and (min-width: 1441px)
      width: 70%
  .home--bgI
    top: -320px
    right: -700px
    padding: 15px
  .home--bgII
    height: 1000px
    bottom: 450px
    right: -1180px
  .home--bgIII
    width: 650px
    height: 1000px
    left: 120px
    top: -990px
    border: none
  .home--img
    width: 100%
    &:hover
      opacity: .3
</style>
