<template>
  <form action class="box login-form">
    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="Login" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label for="remember-me-checkbox">
        <input type="checkbox" id="remember-me-checkbox" />
        Remember me
      </label>
    </div>
    <div class="field">
      <button class="btn has-mustard-bg is-size-7 a-menu">Login</button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginForm"
});
</script>

<style lang="scss" scoped>
.login-form {
  padding: calc(20px + 1em);
}
</style>