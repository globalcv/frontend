<template>
  <div>
    <router-link to="/">
      <h2>
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
  margin: {
    left: calc(12px + 0.6em);
    right: auto;
  }
}

h2 > span {
  font-size: 1.8em;
}
.green {
  color: green;
}

.yellow {
  color: yellowgreen;
}
</style>