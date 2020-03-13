<template>
  <div>
    <br />
    <center><h2 class="page-title title is-2">Signup</h2></center>
    <hr />
    <div class="text-sm rounded w-full max-w-md mx-auto"></div>
    <form
      id="signup"
      class="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8"
      @submit.prevent="signup"
    >
      <div class="field">
        <label class="label no-select">Email</label>
        <div class="control has-icons-left">
          <input class="input is-rounded" v-on:keyup.enter="signup" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label no-select">Password</label>
        <div class="control has-icons-left">
          <input
            class="input is-rounded"
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            v-on:keyup.enter="signup"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="checkbox no-select">
            <input type="checkbox" name="Terms of Service" />
            I agree to the <router-link to="">terms and conditions</router-link>
          </label>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button id="signup-btn" class="button" type="submit">Sign Up</button>
      </div>
    </form>

    <br /><br /><br />

    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "@/components/Footer";

export default {
  name: "Signup",
  components: {
    PageFooter
  },
  data: () => {
    return {
      user: {
        email: null,
        password: null
      },
      error: null,
      success: null
    };
  }
};
</script>

<style scoped></style>
