<template>
  <div class="container">
    <nav class="row mt-5">
      <div class="col-12">
        <router-link to="/" class="home--nav" exact>台灣花磚博物館</router-link>
        <router-link to="/about" class="home--nav">參觀資訊</router-link>
        <router-link to="/shop" class="home--nav">花磚商店</router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="sass">
.home--nav
  display: inline-block
  margin: 0 20px
  color: $tealAA
  transition: .5s
  &:hover
    color: $tealAAA
    +transf(0, -2px)

.router-link-active, .router-link-exact-active
  font-weight: 700
  text-decoration: underline

@media all and (max-width: 575.98px)
  .col-12
    display: flex
    justify-content: space-evenly
  .home--nav
    margin: 0

@media all and (max-width: 320.98px)
  .col-12
    font-size: .9rem
</style>
