import { apiListUser } from "@/api/apiUser";

const state = {
    dataUser: [],
};

const getters = {
    dataUser: state => state.dataUser
};

const actions = {
    async getDataUser({ commit }, valueFilter) {
        const response = await apiListUser(valueFilter);
        console.log(response);
        
        if (response.error) {
            console.log(response.error);
            return false;
        }

        commit('setDataUser', response);
        return true;
    },
};

const mutations = {
    setDataUser(state, dataUser) {
        state.dataUser = dataUser;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}