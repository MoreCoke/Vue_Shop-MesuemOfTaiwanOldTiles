<template>
  <div>
    <div class="container sans_serif">
      <div class="col-xs-12 col-md-6 mx-auto text-center">
        <form class="form-signin" @submit.prevent="signin">
          <h1 class="h3 mb-3 text-center font-weight-normal">後台管理</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            v-model="user.username"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            v-model="user.password"
            required
          />
          <div>
            <p class="text-danger" v-if="!signStatus.status">＊請檢查帳號或密碼是否有誤</p>
          </div>
          <button class="btn btn-lg btn-primary btn-block"
                  type="submit"
                  @click.prevent="sign_in"
                  @keyup.enter="sign_in">
                  <i class="fas fa-spinner fa-spin" v-if="signStatus.isLoading"></i>
                  Sign in</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2019 <router-link to="/">台灣花磚博物館</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script scoped>
// @ is an alias to /src

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      signStatus: {
        status: true,
        isLoading: false,
      },
    };
  },
  methods: {
    // 登入
    sign_in() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      vm.signStatus.isLoading = true;
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.signStatus.status = true;
          vm.signStatus.isLoading = false;
          vm.$router.push('/admin');
        } else {
          vm.signStatus.status = false;
          vm.signStatus.isLoading = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="sass">
.form-signin
  width: 100%
  max-width: 330px
  padding: 15px
  margin: auto
  position: relative
  top: 50vh
  +transf(0, -50%)

  .checkbox
    font-weight: 400

  .form-control
    position: relative
    box-sizing: border-box
    height: auto
    padding: 10px
    font-size: 16px
    &:focus
      z-index: 2

  input
    &[type="email"]
      margin-bottom: -1px
      border-bottom-right-radius: 0
      border-bottom-left-radius: 0
    &[type="password"]
      margin-bottom: 10px
      border-top-left-radius: 0
      border-top-right-radius: 0
</style>
