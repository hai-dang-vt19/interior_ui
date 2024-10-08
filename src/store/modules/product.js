import {apiListProduct, apiCreateProduct, apiDeleteProduct, apiSortProduct} from '@/api/apiProduct';

const state = {
  dataProduct: [],
  product: {},
  valueFilter: null
};

const getters = {
  dataProduct: state => state.dataProduct,
  valueFilter: state => state.valueFilter
};

const mutations = {
  setDataProduct(state, dataProduct) {
    state.dataProduct = dataProduct;
  },
  setProduct(state, product) {
    state.product = product;
  },
  setFilterProduct(state, valueFilter) {
    state.valueFilter = valueFilter;
  }
};

const actions = {
  async getDataProduct({commit}, valueFilter) {
    const response = await apiListProduct(valueFilter);

    if (response.error) {
      console.log(response.error);
      return false;
    }

    commit('setDataProduct', response);
    return true;
  },

  async createProduct({commit}, params) {
    const response = await apiCreateProduct(params);

    if (response.error) {
      console.log(response.error);
      return false;
    }

    const newDataProducts = await apiListProduct(null);
    
    commit('setDataProduct', newDataProducts)
    return true;
  },

  editProduct({commit}, product) {
    console.log(product);
    commit('setProduct', product);    
  },

  async deleteProduct({commit}, product) {
    console.log(product);
    
    const response = await apiDeleteProduct(product.id);
    if (response.error) {
      console.log(response.error);
      return false;
    }

    const newDataProducts = await apiListProduct(null);
    console.log(newDataProducts);
    
    commit('setDataProduct', newDataProducts);
    return true;
  },

  async sortProduct({commit}, sort) {
    const {response} = await apiSortProduct(sort);
    
    // if (response.error) {
    //   console.log(response.error);
    //   return false;
    // }

    commit('setDataProduct', response);

    return true;    
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}