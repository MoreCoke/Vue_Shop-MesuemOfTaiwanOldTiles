<template>
  <div>
    <p class="text-info decoration_text">
      <span class="decoration_text_"></span> Museum of Old Taiwan Tiles
    </p>
    <div class="decoration_tiles"></div>
    <img class="decoration_tiles" src="@/assets/img/black_1x/堅持_四方連續_線稿_black.png" alt />
    <img class="decoration_tiles two" src="@/assets/img/black_1x/秋菊高潔_四方連續_線稿_black.png" alt />
    <img class="decoration_tiles three" src="@/assets/img/black_1x/幸運_四方連續_線稿_black.png" alt />
  </div>
</template>

<style scpoed lang="sass">
@import '@/assets/color.sass'

.decoration_text
  display: inline-block
  position: fixed
  top: 70vh
  right: -50px
  transform: rotate(90deg)
  z-index: 100
  .decoration_text_
    width: 50px
    display: inline-block
    border-bottom: 1px solid $cyan

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