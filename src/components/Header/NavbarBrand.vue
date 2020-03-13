<template>
  <div class="navbar-brand">
    <a class="navbar-item">
      <router-link to="/">
        <h2>
          <span class="green">global</span>
          <span class="yellow">cv</span>
        </h2>
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

<style lang="scss" scoped>
h2 > span {
  font-size: 1.5em;
}
.green {
  color: green;
}

.yellow {
  color: yellowgreen;
}
</style>