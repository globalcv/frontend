<template>
  <form class="form-horizontal">
    <fieldset>
      <h3 class="has-text-green is-size-1 is-size-3-mobile">Contact us</h3>

      <div class="field">
        <label class="label" for="first_name">First Name:</label>
        <div class="control">
          <input id="first_name" type="text" placeholder="Your first name" class="input" required />
        </div>
      </div>

      <div class="field">
        <label class="label" for="last_name">Last Name:</label>
        <div class="control">
          <input id="last_name" type="text" placeholder="Your last name" class="input" required />
        </div>
      </div>

      <div class="field">
        <label class="label" for="email">Email</label>
        <div class="control">
          <input id="email" type="email" placeholder="Your email address" class="input" required />
        </div>
      </div>

      <div class="field">
        <label class="label" for="message">Message:</label>
        <div class="control">
          <textarea class="textarea" id="message"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control submit-button-box">
          <button id="submit" class="btn has-mustard-bg is-size-10 a-menu">Submit</button>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ContactForm"
});
</script>

<style lang="scss" scoped>
form {
  max-width: 786px;
  padding: calc(20px + 2em);
  margin: auto;
  background-color: darken($backgroundColor, 2%);
  border-radius: 2.5%;
  @include box-shadow(0px, 0px, 10px, rgba(0, 0, 0, 0.2));
}

.submit-button-box {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
}

.submit-button-box > button {
  height: 50px;
}
</style>