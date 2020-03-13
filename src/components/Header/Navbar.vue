<template>
  <nav class="navbar">
    <div class="container">
      <navbar-brand></navbar-brand>
      <navbar-menu></navbar-menu>
      <navbar-burger></navbar-burger>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import NavbarBrand from "./NavbarBrand.vue";
import NavbarMenu from "./NavbarMenu.vue";
import NavbarBurger from "./NavbarBurger.vue";

export default Vue.extend({
  name: "PageNavbar",
  components: {
    NavbarBrand,
    NavbarMenu,
    NavbarBurger
  }
});
</script>
