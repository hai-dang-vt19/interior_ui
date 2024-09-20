import Vue from "vue";
import Router from "vue-router";
import RegistrationPage from "@/components/RegistrationPage.vue";
import LoginPage from "@/components/LoginPage.vue";

Vue.use(Router);

const routes = [
  {
    path: '/register',
    name: 'RegistrationPage',
    component: RegistrationPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;