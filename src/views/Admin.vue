<template>
  <div class="sans_serif">
    <Navbar class="sticky-top"></Navbar>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-10 col-lg-10 ml-sm-auto pt-3 px-4">
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


<style scoped lang='sass'>
@import '@/assets/text.sass'

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
