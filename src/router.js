import { createRouter, createWebHashHistory } from "vue-router";
import Hero from "./components/hero/hero.vue";
import Registration from "./components/registration/registration.vue";
import Login from "./components/login/login.vue";
import Confirmation from "./components/registration/confirmationCode/confirmationCode.vue";
import Congratulation from "./components/registration/congratulationCode/congratulationCode.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Hero },
    { path: "/registration", component: Registration, alias: "/" },
    { path: "/login", component: Login },
    { path: "/confirmation", component: Confirmation },
    { path: "/congratulation", component: Congratulation },
  ],
});
