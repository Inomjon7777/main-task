import { createRouter, createWebHistory } from "vue-router";
import Hero from "../components/hero/hero.vue";
import Login from "../components/login/login.vue";
import Registration from "../components/registration/registration.vue";
import Confirmation from "../components/registration/confirmationCode/confirmationCode.vue";
import Congratulation from "../components/registration/congratulationCode/congratulationCode.vue";

const routes = [
  {
    path: "/hero",
    name: "Hero",
    component: Hero,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    component: Confirmation,
  },
  {
    path: "/congratulation",
    name: "Congratulation",
    component: Congratulation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
