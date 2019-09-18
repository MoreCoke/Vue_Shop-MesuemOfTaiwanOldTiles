<template>
  <div>
    <p>123</p>
    <div class="container">
      <div class="col-5 mx-auto">
        <form class="form-signin" @submit.prevent="signin">
          <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            v-model="user.username"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            v-model="user.password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2019</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
