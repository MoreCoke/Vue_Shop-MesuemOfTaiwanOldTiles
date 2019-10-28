<template>
  <div class="col-md-2 order-md-last">
    <nav class="navbar navbar-expand-md shop--sidebar">
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav flex-column">
          <li class="nav-item shop--sidebar--li">
            <router-link to="/shop/all" class="nav-link shop--sidebar--a">所有商品</router-link>
          </li>
          <li class="nav-item shop--sidebar--li">
            <router-link
              to="/shop/taiwan_old_tiles"
              class="nav-link shop--sidebar--a"
            >台灣花磚</router-link>
          </li>
          <li class="nav-item shop--sidebar--li">
            <router-link to="/shop/mirrors" class="nav-link shop--sidebar--a">花磚小鏡子</router-link>
          </li>
          <li class="nav-item shop--sidebar--li">
            <router-link to="/shop/magnets" class="nav-link shop--sidebar--a">花磚磁鐵</router-link>
          </li>
          <li class="nav-item shop--sidebar--li">
            <router-link to="/shop/coasters" class="nav-link shop--sidebar--a">花磚竹杯墊</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="sass">
.router-link-active, .router-link-exact-active
  transition: .5s
  text-decoration: underline

.shop--sidebar
  padding: 0
  position: sticky
  top: 0
  @media all and (max-width: 768px)
    padding-top: 5vh

  #navbarContent
    position: relative
    left: 3.5vw
    transition: .5s
    @media all and (min-width: 1441px)
      left: 2.5vw
    @media all and (max-width: 768px)
      left: 0

    .shop--sidebar--li
      word-break: keep-all
      &:after
        content: ''
        position: relative
        right: -80px
        +fz(2)
        border-right: 1px solid $teal
      &:hover:after
        content: ''
        color: $teal
      &:last-child:after
        border: none
      &:first-child:before
        border: none

      .shop--sidebar--a
        text-align: right
        color: $tealAA
        padding: 1vh 0
        transition: .5s
        &:hover
          color: $tealAAA
          +transf(0, -2px)
        &:active
          font-weight: 700
          color: black

@media all and (max-width: 767.98px)
  .shop--sidebar
    position: static
    padding-top: 5vh

    #navbarContent
      margin: 0 auto

      .shop--sidebar--li
        margin-bottom: 20px
        &:after
          border: none

        .shop--sidebar--a
          text-align: center
</style>
