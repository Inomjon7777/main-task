import { createRouter, createWebHistory } from "vue-router";
import Hero from "../components/hero/hero.vue";
import Login from "../components/login/login.vue";
import Registration from "../components/registration/registration.vue";
import Confirmation from "../components/registration/confirmationCode/confirmationCode.vue";
import Congratulation from "../components/registration/congratulationCode/congratulationCode.vue";

const routes = [
  {
    path: "/",
    component: Hero,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/registration",
    component: Registration,
  },
  {
    path: "/confirmation",
    component: Confirmation,
  },
  {
    path: "/congratulation",
    component: Congratulation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
