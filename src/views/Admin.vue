<template>
  <div class="sans_serif">
    <Navbar class="sticky-top"></Navbar>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-12 col-md-10 col-lg-10 ml-sm-auto pt-3 px-4">
          <router-view />
        </main>
      </div>
    </div>
    <Alert></Alert>
  </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import Navbar from '@/components/admin/Navbar.vue';
import Alert from '@/components/admin/AlertMsg.vue';

export default {
  components: {
    Sidebar,
    Navbar,
    Alert,
  },
};
</script>
