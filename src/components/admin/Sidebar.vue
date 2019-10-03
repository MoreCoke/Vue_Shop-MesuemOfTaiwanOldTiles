<template>
  <div class="col-2 p-0">
    <nav class="navbar navbar-expand-md navbar-light col-sm-12 bg-light sidebar">
      <div class="sidebar-sticky">
        <div class id="sidebarNav">
          <ul class="nav mb-2 flex-column">
            <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted nav-item"
            >
              <span>管理</span>
            </h6>
            <li class="nav-item">
              <router-link to="/admin/product" class="nav-link">
                <span data-feather="file-text"></span>
                產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/order" class="nav-link">
                <span data-feather="file-text"></span>
                訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/offer" class="nav-link">
                <span data-feather="file-text"></span>
                優惠券管理
              </router-link>
            </li>
            <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted nav-item"
            >
              <span>返回</span>
            </h6>
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <span data-feather="file-text"></span>
                官網首頁
              </router-link>
              <router-link to="shop" class="nav-link">
                <span data-feather="file-text"></span>
                商店頁
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scpoed lang="sass">
.sidebar
  position: sitcky
  top: 0
  bottom: 0
  left: 0
  z-index: 100
  /* Behind the navbar
  padding: 0
  padding-top: .5rem
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1)
  @media all and (max-width: 768px)
    position: relative !important
    

.sidebar-sticky
  position: -webkit-sticky
  position: sticky
  top: 48px
  /* Height of navbar
  height: calc(100vh - 48px)
  padding-top: .5rem
  overflow-x: hidden
  overflow-y: auto
  /* Scrollable contents if viewport is shorter than content.
  @media all and (max-width: 768px)
    height: auto
    flex-direction: row

.sidebar .nav-link
  font-weight: 500
  color: #333
  &.active
    color: #007bff
  &:hover .feather, &.active .feather
    color: inherit

.sidebar-heading
  font-size: .75rem
  text-transform: uppercase
</style>
