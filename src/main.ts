import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

const API_URL = "http://localhost:8000";

Vue.mixin({
  data() {
    return {
      get apiUrl() {
        return API_URL;
      }
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
