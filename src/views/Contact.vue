<template>
  <div id="wrapper" class="has-text-centered-mobile">
    <div class="container has-text-centered contact-form-box">
      <contact-form></contact-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContactForm from "@/components/Contact/ContactForm.vue";

export default Vue.extend({
  name: "Contact",
  components: { ContactForm }
});
</script>

<style lang="scss" scoped>
.contact-form-box {
  margin: {
    top: 50px;
    bottom: 90px;
  }
}
</style>