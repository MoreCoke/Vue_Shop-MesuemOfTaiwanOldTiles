<template>
  <div>
    <Navbar></Navbar>

    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import Navbar from '@/components/admin/Navbar.vue';

export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style scroped lang='sass'>
body
  font-size: .875rem
  font-family: font-family-sans-serif

.feather
  width: 16px
  height: 16px
  vertical-align: text-bottom

/*
 * Utilities

.border-top
  border-top: 1px solid #e5e5e5

.border-bottom
  border-bottom: 1px solid #e5e5e5

.admin--title
  display: inline
  letter-spacing: 1px

.admin--btn
  float: right

.table-responsive
  clear: both
</style>
