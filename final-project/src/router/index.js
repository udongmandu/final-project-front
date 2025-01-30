import { createRouter, createWebHistory } from "vue-router";

import Signup from "../components/Signup.vue";
import Home from "../components/Home.vue";

const routes = [
  { path: "/", component: Signup },
  { path: "/account", component: Home },
  { path: "/signup", component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
