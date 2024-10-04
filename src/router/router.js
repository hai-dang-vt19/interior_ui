import Vue from "vue";
import Router from "vue-router";

import AuthLayout from "@/layouts/AuthLayout.vue";
import RegistrationPage from "@/views/admin/RegistrationPage.vue";
import LoginPage from "@/views/admin/LoginPage.vue";

import AdminLayout from "@/layouts/AdminLayout.vue";
import DashBoard from "@/views/admin/DashBoard.vue";
import OrderPage from "@/views/admin/OrderPage.vue";
import ProductDesignPage from "@/views/admin/ProductDesignPage.vue";
import WarehoursePage from "@/views/admin/WarehoursePage.vue";
import CustomerPage from "@/views/admin/CustomerPage.vue";
import StaffPage from "@/views/admin/StaffPage.vue";
import AgencyPage from "@/views/admin/AgencyPage.vue";
import DiscountPage from "@/views/admin/DiscountPage.vue";
import RolePage from "@/views/admin/RolePage.vue";
import HistorySystemPage from "@/views/admin/HistorySystemPage.vue";
import TypeProductPage from "@/views/admin/TypeProductPage.vue";
import MaterialPage from "@/views/admin/MaterialPage.vue";
import ColorPage from "@/views/admin/ColorPage.vue";

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
      },
      {
        path: 'order',
        name: 'OrderPage',
        component: OrderPage
      },
      {
        path: 'product-design',
        name: 'ProductDesignPage',
        component: ProductDesignPage
      },
      {
        path: 'warehourse',
        name: 'WarehoursePage',
        component: WarehoursePage
      },
      {
        path: 'customer',
        name: 'CustomerPage',
        component: CustomerPage
      },
      {
        path: 'staff',
        name: 'StaffPage',
        component: StaffPage
      },
      {
        path: 'agency',
        name: 'AgencyPage',
        component: AgencyPage
      },
      {
        path: 'discount',
        name: 'DiscountPage',
        component: DiscountPage
      },
      {
        path: 'role',
        name: 'RolePage',
        component: RolePage
      },
      {
        path: 'history-system',
        name: 'HistorySystemPage',
        component: HistorySystemPage
      },
      {
        path: 'type-product',
        name: 'TypeProductPage',
        component: TypeProductPage
      },
      {
        path: 'material',
        name: 'MaterialPage',
        component: MaterialPage
      },
      {
        path: 'color',
        name: 'ColorPage',
        component: ColorPage
      },
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