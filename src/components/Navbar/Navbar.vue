<template>
  <nav class="navbar">
    <div class="container">
      <navbar-brand></navbar-brand>
      <navbar-menu :class="{ mobileHidden: !drawer }"></navbar-menu>
      <div class="nav-end">
        <navbar-button
          @stateChange="changeDrawerState()"
          :isClosed="!drawer"
        ></navbar-button>
      </div>
    </div>
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
  },
  watch: {
    $route() {
      this.drawer = false;
    }
  }
});
</script>
