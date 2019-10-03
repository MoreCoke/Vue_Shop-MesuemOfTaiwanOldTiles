<template>
  <div>
    <footer class="container-fluid bg-primary text-light footer">
      <div class="container">
        <div class="row">
          <h3 class="col-12 footer--title">台灣花磚博物館</h3>
        </div>
        <div class="row">
          <div class="col-7">
            <p class="footer--content">
              百年來，台灣富貴家族，在這片土地建造數千棟珍貴的花磚古厝，法國的大學更為它申請【世界非物質遺產】。
              <br />我們用二十年的青春與積蓄，保存數千片百年花磚的美麗，更讓台灣工藝回到世界花磚美學的舞台，您的收藏會是一道新的力量，讓我們繼續守護台灣的花磚文化。
            </p>
          </div>
          <div class="col-5">
            <ul class="footer--info">
              <li class="text-right footer--info--li">嘉義市林森西路282號</li>
              <li class="text-right footer--info--li">TEL：0905-012-390</li>
              <li class="text-right footer--info--li">BH：10:00-17:00</li>
              <li class="text-right footer--info--li">Email：282.mott@gmail.com</li>
              <li class="text-right footer--info--li">Line：@tey3536g</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-center footer--declaration">
              個人練習作品，非商業用途 資訊來源：
              <a class="text-light" href="https://www.1920t.com/">台灣花磚博物館</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang='sass'>
@import '@/assets/color.sass'

h3,p,li
  &::selection
    background-color: white

.footer
  margin-top: 100px
  padding: 100px 0 20px
  .footer--title
    margin-bottom: 40px
    font-weight: 700
    letter-spacing: 7px
  .footer--content
    letter-spacing: 2.5px
    line-height: 32px
    list-style-type: none
  .footer--info
    letter-spacing: 2.5px
    line-height: 32px
    .footer--info--li
      list-style-type: none
  .footer--declaration
    margin-top: 80px
    font-size: .9em
    letter-spacing: 2.5px
</style>