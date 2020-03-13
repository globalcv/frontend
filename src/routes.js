import Home from "./views/Home";
import Contact from "./views/Contact";
import User from "./views/User/User";
import Register from "./views/User/Register";
import Login from "./views/User/Login";

export const routes = [
  { path: "*", redirect: "/" },
  { name: "home", path: "/", component: Home },
  { name: "contact", path: "/contact", component: Contact },
  { name: "register", path: "/register", component: Register },
  { name: "login", path: "/login", component: Login },
  { name: "user", path: "/user", component: User }
];
