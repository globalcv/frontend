<template>
  <nav>
    <navbar-brand></navbar-brand>
    <navbar-button @stateChange="changeDrawerState()" :isClosed="!drawer"></navbar-button>
    <navbar-menu :class="{ mobileHidden: !drawer}"></navbar-menu>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import NavbarBrand from "./NavbarBrand.vue";
import NavbarButton from "./NavbarButton.vue";
import NavbarMenu from "./NavbarMenu.vue";

export default Vue.extend({
  name: "PageNavbar",
  components: {
    NavbarBrand,
    NavbarButton,
    NavbarMenu
  },
  data: () => {
    return {
      drawer: false
    };
  },
  methods: {
    changeDrawerState() {
      this.drawer = !this.drawer;
    }
  }
});
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
</style>