<template>
  <div>
    <center>
      <h2 class="page-title title is-2">Signup</h2>
    </center>
    <div class="columns is-centered form-container">
      <div class="form-box">
        <register-form></register-form>
      </div>
    </div>
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

<style lang="scss" scoped>
.form-box {
  margin: {
    top: 150px;
    bottom: 200px;
  }
  padding: 30px;
  border-radius: 8px;
  background-color: lighten(chocolate, 30%);
}

.form-container {
  min-height: 75vh;
  margin-top: 50px;
  background-color: chocolate;
  background-image: url("../../assets/img/hero.png");
  background-size: 30%;
  background-position: 80% 50%;
  background-repeat: no-repeat;
}
</style>
