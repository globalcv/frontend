<template>
  <div class="navbar-end">
    <a class="a-menu is-size-7 navbar-item">
      <router-link to="/">home</router-link>
    </a>
    <a class="a-menu is-size-7 navbar-item">
      <router-link to="/contact">contact</router-link>
    </a>
    <a class="a-menu is-size-7 navbar-item">
      <router-link to="/login">log in</router-link>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavbarMenu"
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 678px) {
  .mobileHidden {
    display: none;
  }

  .navbar-end {
    background-color: $navbarColor;
    text-align: center;
  }

  .navbar-end > a {
    transform: none;
  }
}
</style>
