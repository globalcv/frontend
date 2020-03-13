<template>
  <menu>
    <router-link to="/" class="a-menu navbar-item">home</router-link>
    <router-link to="/contact" class="a-menu navbar-item">contact</router-link>
    <router-link to="/login" class="a-menu navbar-item">log in</router-link>
  </menu>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavbarMenu"
});
</script>

<style lang="scss" scoped>
menu {
  justify-content: flex-end;
  align-items: stretch;
  display: flex;
  box-sizing: inherit;
  margin-right: 12px;
}

menu > a {
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: opacity 1s ease;
  opacity: 0.8;
  color: blueviolet;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 0.9em;
  text-decoration: none;
  box-sizing: inherit;
}

@media only screen and (max-width: 678px) {
  .mobileHidden {
    display: none;
  }

  menu {
    display: flex;
  }

  menu > a {
    width: 100%;
    display: block;
  }
}
</style>