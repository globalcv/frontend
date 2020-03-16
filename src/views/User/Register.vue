<template>
  <div>
    <center>
      <h2 class="page-title title is-2">Signup</h2>
    </center>
    <div class="text-sm rounded w-full max-w-md mx-auto"></div>
    <register-form></register-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RegisterForm from "@/components/Forms/RegisterForm.vue";

export default Vue.extend({
  name: "Register",
  components: { RegisterForm }
});
</script>
