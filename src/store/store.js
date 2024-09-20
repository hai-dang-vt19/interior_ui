import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth"; // Import module auth

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth, // Kết hợp module auth
    // Có thể thêm các module khác tại đây
  }
})
