<template>
  <form>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left">
        <input class="input" type="email" placeholder="Email" v-model="form.email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="form.password" />
        <span class="icon is-small is-left">
          <i class="fas fa-key"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Password confirmation</label>
      <div class="control has-icons-left">
        <input
          class="input"
          type="password"
          placeholder="Password confirmation"
          v-model="form.passwordConfirmation"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-key"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "RegisterForm",
  data: () => {
    return {
      form: {
        email: "",
        password: "",
        passwordConfirmation: ""
      }
    };
  }
});
</script>