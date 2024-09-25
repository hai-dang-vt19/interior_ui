import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth"; // Import module auth
import product from "./modules/product";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth, // Kết hợp module auth
    product,
    user
  }
})
