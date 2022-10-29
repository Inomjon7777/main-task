import { createRouter, createWebHistory } from "vue-router";
import header from "../components/header/header.vue";
import login from "../components/login/login.vue";
import verification from "../components/verification/verification.vue";
import mainPage from "../components/sidebar/main/main.vue";
import transfersPage from "../components/sidebar/transfers/transfers.vue";
import paymentsPage from "../components/sidebar/payments/payments.vue";
import myCardsPage from "../components/sidebar/my-cards/my-cards.vue"
import monitoringPage from "../components/sidebar/monitoring/monitoring.vue";
import dashboard from "../components/dashboard/dashboard.vue";
import sidebar from "../components/sidebar/sidebar.vue";
const routes = [
  {
    path: "/dashboard",
    component: dashboard,
    children: [
      {
        path: "/main-page",
        component: mainPage,
      },
      {
        path: "/transfers-page",
        component: transfersPage,
      },
      {
        path: "/payments-page",
        component: paymentsPage,
      },
      {
        path: "/my-cards-page",
        component: myCardsPage,
      },
      {
        path: "/monitoring-page",
        component: monitoringPage,
      },
    ],
  },
  {
    path: "/sidebar",
    component: sidebar,
  },
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
