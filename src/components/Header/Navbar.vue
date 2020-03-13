<template>
  <nav>
    <div class="menu-header">
      <navbar-brand></navbar-brand>
      <navbar-button @stateChange="changeDrawerState()" :isClosed="!drawer"></navbar-button>
    </div>
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

.menu-header {
  margin: {
    left: calc(12px + 0.6em);
    right: auto;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}

@media only screen and (max-width: 678px) {
  nav {
    flex-direction: column;
  }
}
</style>