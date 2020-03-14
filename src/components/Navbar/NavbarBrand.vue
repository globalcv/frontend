<template>
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item">
      <h2 class="logo is-size-4">
        <span class="green">global</span>
        <span class="yellow">cv</span>
      </h2>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavbarBrand"
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-shrink: 0;
  align-items: stretch;
  min-height: 3.25rem;
}

a {
  text-decoration: none;
}

.green {
  color: green;
}

.yellow {
  color: yellowgreen;
}
</style>
