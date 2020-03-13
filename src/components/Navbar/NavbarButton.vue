<template>
  <span @click="handleDrawerStateChange()" class="navbar-burger burger">
    <span></span>
    <span></span>
    <span></span>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavbarButton",
  props: ["isClosed"],
  methods: {
    handleDrawerStateChange() {
      this.$emit("stateChange", !this.isClosed);
    }
  }
});
</script>
