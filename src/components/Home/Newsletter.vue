<template>
  <section id="newsletter" class="section">
    <div class="container">
      <h3 class="is-size-3">Stay in touch</h3>
      <p class="has-text-green">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum.
      </p>
      <div class="field newsletter-field">
        <div class="control">
          <input class="input newsletter-input" type="text" placeholder="mail@example.com" />
        </div>
      </div>
      <button class="btn has-mustard-bg is-size-7 a-menu">sign up now</button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Newsletter"
});
</script>