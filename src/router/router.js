import Vue from "vue";
import Router from "vue-router";

import AuthLayout from "@/layouts/AuthLayout.vue";
import RegistrationPage from "@/views/admin/RegistrationPage.vue";
import LoginPage from "@/views/admin/LoginPage.vue";

import AdminLayout from "@/layouts/AdminLayout.vue";
import DashBoard from "@/views/admin/DashBoard.vue";

import ClientLayout from "@/layouts/ClientLayout.vue";
import HomePage from "@/views/client/HomePage.vue";

Vue.use(Router);

const routes = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'register',
        name: 'RegistrationPage',
        component: RegistrationPage
      },
      {
        path: 'login',
        name: 'LoginPage',
        component: LoginPage
      },
    ],
  },
  
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        name: 'DashboardPage',
        component: DashBoard
      }
    ],
  },

  {
    path: '',
    component: ClientLayout,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: HomePage
      }
    ],
  }
]

const router = new Router({
  mode: 'history',
  routes
});

export default router;