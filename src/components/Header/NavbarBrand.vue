<template>
  <div class="navbar-brand">
    <a class="navbar-item">
      <router-link to="/">
        <h3 class="logo has-text-green is-size-4">globalcv</h3>
      </router-link>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavbarBrand"
});
</script>
