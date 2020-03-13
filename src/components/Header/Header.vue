<template>
  <div class="hero-head">
    <page-navbar></page-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PageNavbar from "./Navbar.vue";

export default Vue.extend({
  name: "Header",
  components: { PageNavbar }
});
</script>

<style scoped></style>
