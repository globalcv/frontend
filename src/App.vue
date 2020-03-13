<template>
  <div>
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import PageHeader from "@/components/Header.vue";
import PageFooter from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
