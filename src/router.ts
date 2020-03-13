import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Contact from "./views/Contact";
import User from "./views/User/User";
import Register from "./views/User/Register";
import Login from "./views/User/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "*", redirect: "/" },
    { name: "home", path: "/", component: Home },
    { name: "contact", path: "/contact", component: Contact },
    { name: "register", path: "/register", component: Register },
    { name: "login", path: "/login", component: Login },
    { name: "user", path: "/user", component: User }
  ]
});
