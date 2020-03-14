<template>
  <header class="hero-head">
    <page-navbar></page-navbar>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import PageNavbar from "./Navbar/Navbar.vue";

export default Vue.extend({
  name: "Header",
  components: { PageNavbar }
});
</script>

<style lang="scss" scoped>
header {
  min-height: 80px;
}
</style>
