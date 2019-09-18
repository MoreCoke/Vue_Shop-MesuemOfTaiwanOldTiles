<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>管理</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
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
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scpoed lang="sass">
.sidebar
  position: fixed
  top: 0
  bottom: 0
  left: 0
  z-index: 100
  /* Behind the navbar
  padding: 0
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1)

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

.sidebar .nav-link
  font-weight: 500
  color: #333
  .feather
    margin-right: 4px
    color: #999
  &.active
    color: #007bff
  &:hover .feather, &.active .feather
    color: inherit

.sidebar-heading
  font-size: .75rem
  text-transform: uppercase
</style>