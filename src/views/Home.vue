<template>
  <div id="wrapper" class="has-text-centered-mobile">
    <hero></hero>
    <twitter-feed></twitter-feed>
    <features></features>
    <newsletter></newsletter>
  </div>
  <!-- END Wrapper -->
</template>

<script>
import Vue from "vue";
import Hero from "@/components/Home/Hero.vue";
import TwitterFeed from "@/components/Home/TwitterFeed.vue";
import Features from "@/components/Home/Features.vue";
import Newsletter from "@/components/Home/Newsletter.vue";

export default Vue.extend({
  name: "Home",
  components: { Hero, TwitterFeed, Features, Newsletter }
});
</script>
<style scoped></style>
