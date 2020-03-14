<template>
  <section id="features" class="section has-mustard-bg">
    <div class="container">
      <div class="columns">
        <div class="column">
          <img class="feature-img" src="@/assets/img/feature2.png" alt="feature" />
        </div>
        <div class="column">
          <h3 class="is-size-3">One resume. available Everywhere</h3>
          <p class="has-text-green paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns reverse-row-order">
        <div class="column">
          <h3 class="is-size-3">Privacy focused</h3>
          <p class="has-text-green paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum.
          </p>
        </div>
        <div class="column">
          <img class="feature-img" src="@/assets/img/feature3.png" alt="feature" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <h3 class="is-size-3">Open Source, all the way</h3>
          <p class="has-text-green paragraph">
            The world runs on open source and so do we here at globalcv. We
            release all of the code
          </p>
        </div>
        <div class="column">
          <img class="feature-img" src="@/assets/img/feature1.png" alt="feature" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Features"
});
</script>