<template>
  <footer class="section has-green-bg">
    <div class="container has-text-centered">
      <twitter-button></twitter-button>
      <github-button></github-button>
      <p class="has-text-white is-size-7">
        © 2020
        <router-link to="/">globalcv</router-link>| Built with
        <i class="fas fa-heart"></i> by
        <a href="https://github.com/ciehanski">@ciehanski</a>
        and
        <a href="https://github.com/kuskoman">@kuskoman</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import GithubButton from "@/components/SocialButtons/GithubButton.vue";
import TwitterButton from "@/components/SocialButtons/TwitterButton.vue";

export default Vue.extend({
  name: "Footer",
  components: { GithubButton, TwitterButton }
});
</script>
