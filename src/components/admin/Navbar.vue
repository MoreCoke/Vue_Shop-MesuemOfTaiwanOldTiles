<template>
  <div>
    <nav class="navbar navbar-dark sticky-top bg-primary">
      <h1 class="navbar-brand font-weight-bold col-md-2 col-sm-12 m-0">
      台灣花磚博物館</h1>
      <ul
        class="navbar-nav col-md-1 offset-md-9 col-sm-1 offset-sm-10 col-xs-1 offset-xs-10 px-lg-3"
      >
        <li class="nav-item text-nowrap">
          <a class="nav-link text-white" href="#" @click.prevent="signOut">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    // 登出
    signOut() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>

<style scoped lang="sass">
.navbar-brand
  padding-top: .2rem
  padding-bottom: .2rem
  font-size: 1.3em
  font-family: 'Noto Serif TC', serif
  letter-spacing: 0.2em

.navbar .form-control
  padding: .75rem 1rem
  border-width: 0
  border-radius: 0
</style>
