<template>
  <div id="wrapper" class="has-text-centered-mobile">
    <!-- Header -->
    <section id="hero" class="hero is-medium">
      <gcv_header></gcv_header>
    </section>

    <!-- Contact -->
    <div class="container has-text-centered">
      <form class="form-horizontal">
        <fieldset>
          <br /><br />

          <h3 class="has-text-green is-size-1 is-size-3-mobile">
            Contact us
          </h3>

          <!-- First Name -->
          <div class="field">
            <label class="label" for="first_name">First Name:</label>
            <div class="control">
              <input
                id="first_name"
                type="text"
                placeholder="Solomon"
                class="input"
                required
              />
            </div>
          </div>

          <!-- Last Name -->
          <div class="field">
            <label class="label" for="last_name">Last Name:</label>
            <div class="control">
              <input
                id="last_name"
                type="text"
                placeholder="Vandy"
                class="input"
                required
              />
            </div>
          </div>

          <!-- Email -->
          <div class="field">
            <label class="label" for="email">Email</label>
            <div class="control">
              <input
                id="email"
                type="email"
                placeholder="svandy@hotmail.com"
                class="input"
                required
              />
            </div>
          </div>

          <!-- Message -->
          <div class="field">
            <label class="label" for="message">Message:</label>
            <div class="control">
              <textarea class="textarea" id="message"></textarea>
            </div>
          </div>

          <!-- Submit -->
          <div class="field">
            <label class="label" for="submit"></label>
            <div class="control">
              <button id="submit" class="btn has-mustard-bg is-size-7 a-menu">
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

    <br /><br />

    <!-- Footer -->
    <gcv_footer></gcv_footer>
  </div>
</template>

<script>
import gcv_header from "@/components/Header";
import gcv_footer from "@/components/Footer";

export default {
  name: "Contact",
  components: {
    gcv_header,
    gcv_footer
  }
};
</script>

<style scoped></style>
