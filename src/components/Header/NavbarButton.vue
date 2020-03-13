<template>
  <button @click="handleDrawerStateChange()">
    <span v-if="isClosed">☰</span>
    <span v-else>🞬</span>
  </button>
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

<style lang="scss" scoped>
button {
  display: none;
}

@media only screen and (max-width: 678px) {
  button {
    display: block;
    cursor: pointer;
    outline: none;
    align-self: end;
    text-decoration: none;
    background-color: darken(white, 7%);
    border: 1px solid darken(white, 30%);
    border-radius: 10%;
    font-size: 1.8em;
    margin: {
      right: calc(15px + 0.3em);
    }
  }
}
</style>