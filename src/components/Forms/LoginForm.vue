<template>
  <form action class="box login-form" @submit.prevent="handleSubmit()">
    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left">
        <input class="input" type="email" placeholder="Email" v-model.trim="form.email" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="form.password" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label for="remember-me-checkbox">
        <input type="checkbox" id="remember-me-checkbox" v-model="form.rememberMe" />
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
  name: "LoginForm",
  data: () => {
    return {
      form: {
        email: "",
        password: "",
        rememberMe: false
      }
    };
  },
  methods: {
    handleSubmit() {
      // todo: validate form if needed
      this.$store
        .dispatch("user/login", this.form)
        .then(() => {
          this.$router.push("/");
        })
        .catch(_e => {
          // todo: handle errors
        });
    }
  }
});
</script>

<style lang="scss" scoped>
.login-form {
  padding: calc(20px + 1em);
}
</style>