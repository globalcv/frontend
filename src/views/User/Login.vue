<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="form-box">
            <login-form></login-form>
            <a class="forgot-password-link">Forgot password?</a>
            <router-link to="/register" class="register-link">Register</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import LoginForm from "@/components/Forms/LoginForm.vue";

export default Vue.extend({
  name: "Login",
  components: { LoginForm }
});
</script>

<style lang="scss" scoped>
a {
  display: block;
}

.register-link {
  color: black;
}

.forgot-password-link {
  color: black;
}
</style>