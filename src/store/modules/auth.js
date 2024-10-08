const state = {
  user: {
    username: '',
    email: '',
    password: '',
  },
};

const getters = {
  user: state => state.user, // Cần là một hàm
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  register({ commit }, user) {
    // Gọi API đăng ký user, sau đó commit mutation
    commit('setUser', user);
  },
  login({commit}, user) {
    
    commit('setUser', user);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
