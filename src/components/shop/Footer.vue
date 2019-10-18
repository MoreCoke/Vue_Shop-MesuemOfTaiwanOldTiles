<template>
  <footer class="container-fluid bg-primary text-light footer">
    <div class="container">
      <div class="row">
        <h3 class="col-10 offset-1 offset-md-0 col-md-12 font-weight-bold footer--title">台灣花磚博物館</h3>
      </div>
      <div class="row">
        <div class="col-10 offset-1 offset-md-0 col-md-7">
          <p class="footer--content">
            百年來，台灣富貴家族，在這片土地建造數千棟珍貴的花磚古厝，法國的大學更為它申請【世界非物質遺產】。
            <br />我們用二十年的青春與積蓄，保存數千片百年花磚的美麗，更讓台灣工藝回到世界花磚美學的舞台，您的收藏會是一道新的力量，讓我們繼續守護台灣的花磚文化。
          </p>
        </div>
        <div class="col-10 offset-1 offset-md-0 col-md-5">
          <ul class="footer--info">
            <li class="footer--info--li">嘉義市林森西路282號</li>
            <li class="footer--info--li">TEL：0905-012-390</li>
            <li class="footer--info--li">BH：10:00-17:00</li>
            <li class="footer--info--li">Email：282.mott@gmail.com</li>
            <li class="footer--info--li">Line：@tey3536g</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="text-center footer--icon">
            <a href="https://github.com/a-howw/Vue-shop_TW-Old-Tiles" target="_blank">
              <svg
                class="mb-1 mr-3 text-white"
                height="28"
                viewBox="0 0 16 16"
                version="1.1"
                width="28"
                aria-hidden="true"
              >
                <path
                  class="--github"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
            <a href="mailto:upgjcj865000@hotmail.com.tw">
              <i class="fas fa-envelope pl-2 --email"></i>
            </a>
          </p>
          <p class="text-center footer--declaration">
            個人練習作品，非商業用途 ｜ 資訊來源：網路文章報導、
            <a class="text-light" href="https://www.1920t.com/">台灣花磚博物館</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang='sass'>
@import '@/assets/_color.sass'

@mixin fz($p)
  font-size: 1rem * $p

@mixin lh($f, $p)
  line-height: 1rem * $f * $p

h3,p,li
  &::selection
    background-color: white

.footer
  margin-top: 100px
  padding: 100px 0 20px

  .footer--title
    margin-bottom: 40px
    letter-spacing: 7px

  .footer--content
    letter-spacing: 2.5px
    +lh(1, 2.5)
    list-style-type: none

  .footer--info
    padding: 0
    letter-spacing: 2.5px
    +lh(1, 2.5)
    @media all and (max-width: 575.98px)
      margin-top: 2rem

    .footer--info--li
      text-align: right
      list-style-type: none
      @media all and (max-width: 575.98px)
        text-align: left

  .footer--declaration
    +fz(.9)
    letter-spacing: 2.5px
    +lh(.9, 2)

  .footer--icon
    margin-top: 80px

    .--email
      position: relative
      top: 6px
      color: rgba($white, .6)
      &:hover
        color: $white

    .--github
      fill: rgba($white, .6)
      &:hover
        fill: $white

.fa-envelope
  position: relative
  top: 5px
  +fz(1.8)
</style>