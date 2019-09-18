<template>
  <div>
    <div class="container">
      <div class="col-xs-12 col-md-6 mx-auto text-center">
        <form class="form-signin" @submit.prevent="signin">
          <h1 class="h3 mt-5 mb-3 text-center font-weight-normal">後台管理系統</h1>
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
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <div>
            <p class="text-danger" v-if="!signStatus.status">＊請檢查帳號或密碼是否有誤</p>
          </div>
          <button class="btn btn-lg btn-primary btn-block"
                  type="submit"
                  @click.prevent="sign_in">Sign in</button>
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
      },
    };
  },
  methods: {
    sign_in() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        console.log(response);
        if (response.data.success) {
          console.log('success');
          vm.signStatus.status = true;
          vm.$router.push('/admin');
        } else {
          console.log('fail');
          vm.signStatus.status = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
