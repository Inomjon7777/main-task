import { createRouter, createWebHistory } from "vue-router";
import header from "../components/header/header.vue";
import login from "../components/login/login.vue";
import secretCode from "../components/secret-code/secret-code.vue";
import main from "../components/main/main.vue";
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
    path: "/secret-code",
    component: secretCode,
  },
  {
    path: "/main",
    component: main,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
