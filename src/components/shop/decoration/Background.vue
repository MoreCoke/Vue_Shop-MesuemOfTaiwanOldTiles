<template>
  <div>
    <p class="text-info decoration_text">
      <span style="vertical-align: text-bottom">_____</span> Museum of Old Taiwan Tiles
    </p>
    <div class="decoration_tiles"></div>
    <img class="decoration_tiles" src="@/assets/img/black_1x/堅持_四方連續_線稿_black.png" alt />
    <img class="decoration_tiles two" src="@/assets/img/black_1x/秋菊高潔_四方連續_線稿_black.png" alt />
    <img class="decoration_tiles three" src="@/assets/img/black_1x/幸運_四方連續_線稿_black.png" alt />
  </div>
</template>

<style scpoed lang="sass">
.decoration_text
  position: fixed
  bottom: 150px
  right: -40px
  transform: rotate(90deg)
  z-index: 100

.decoration_tiles
  width: 300px
  height: auto
  position: absolute
  left: -200px
  top: 0
  opacity: .3
  // background: url('@/assets/img/black_1x/堅持_四方連續_線稿_black.png')
  z-index: -100
  &.two
    top: 300px
  &.three
    top: 600px
</style>