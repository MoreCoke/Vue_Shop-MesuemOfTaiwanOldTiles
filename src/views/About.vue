<template>
  <div>
    <Navbar></Navbar>
    <HeaderTiles :is-shop="status.iShop"></HeaderTiles>
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
        <div class="col-md-4 mb-5">
          <i class="fas fa-parking text-primary"></i>
          <h5 class="font-weight-bold about--subtitle">停車資訊</h5>
          <p class="about--content">
            本館右方20公尺處，捷安特巷內有收費停車場
            <br />※本館前方為重點拖吊區，請注意違停
          </p>
        </div>
        <div class="col-md-4 order-first order-md-0 mb-5">
          <i class="fas fa-money-bill text-primary"></i>
          <h5 class="font-weight-bold about--subtitle">門票50元</h5>
          <p class="about--content">
            可全額折抵館內商品消費，
            <br />參觀當日於博物館櫃檯現場購票
            <br />
            <span class="text-visible">
              ※持「花磚博物館磚友卡」之會員，
              <br />可免最低消費限制
            </span>
          </p>
        </div>
        <div class="col-md-4 mb-5">
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
import Navbar from '@/components/Navbar.vue';
import HeaderTiles from '@/components/shop/HeaderTiles.vue';
import Footer from '@/components/shop/Footer.vue';

export default {
  data() {
    return {
      status: {
        isShop: false,
      },
    };
  },
  components: {
    Navbar,
    HeaderTiles,
    Footer,
  },
};
</script>

<style scoped lang="sass">
@import "@/assets/_color.sass"

@mixin fz($p)
  font-size: 1rem * $p

p,h5
  margin: 0

article
  margin-top: 10vh

.__flex
  display: flex
  justify-content: space-between

.__margin_top
  margin-top: 80px

.about--visite
  letter-spacing: 2px
  line-height: 1rem * 3
  @media all and (max-width: 767.98px)
    +fz(1.3)

.about--subtitle
  margin-bottom: 15px
  letter-spacing: 2px
  line-height: 1rem * 3
  @media all and (max-width: 767.98px)
    +fz(1.3)

.fas
  font-size: 1rem * 3
  margin-bottom: 20px

.about--content
  line-height: 1rem * 2
</style>
