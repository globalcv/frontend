<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <a class="a-menu is-size-7 navbar-item">
        <router-link to="/">
          home
        </router-link>
      </a>
      <a class="a-menu is-size-7 navbar-item">
        <router-link to="/contact">
          contact
        </router-link>
      </a>
      <a class="a-menu is-size-7 navbar-item">
        <router-link to="/login">
          log in
        </router-link>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavbarMenu"
});
</script>
