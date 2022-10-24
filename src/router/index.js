import { createRouter, createWebHistory } from "vue-router";
import header from "../components/header/header.vue";
import login from "../components/login/login.vue";
import verification from "../components/verification/verification.vue";
import sidebar from "../components/sidebar/sidebar.vue";
const routes = [
  {
    path: "/",
    component: header,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/verification",
    component: verification,
  },
  {
    path: "/sidebar",
    component: sidebar,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
