<template>
  <div>
    <nav class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0">
      <router-link to="/admin"
      class="navbar-brand col-sm-3 col-md-2 mr-1 font-weight-bold">台灣花磚博物館</router-link>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link text-white" href="#" @click.prevent="signOut">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scroped lang="sass">
.navbar-brand
  padding-top: .75rem
  padding-bottom: .75rem
  font-size: 1rem
  font-family: 'Noto Serif TC', serif
  letter-spacing: 0.2em
  background-color: rgba(0, 0, 0, 0.25)
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25)

.navbar .form-control
  padding: .75rem 1rem
  border-width: 0
  border-radius: 0
</style>

<script>
export default {
  methods: {
    signOut() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      this.$http.post(api).then((response) => {
        console.log(response);
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>
