import {apiListProduct, apiDeleteProduct} from '@/api/apiProduct';

const state = {
  dataProduct: [],
  product: { 
    isActive: '',
    product_id: '', 
    product_name: '', 
    type_name: '', 
    quantity: '', 
    price: '', 
    discount: '', 
    status: ''
  },
  valueFilter: null
};

const getters = {
  dataProduct: state => state.dataProduct,
  valueFilter: state => state.valueFilter
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

  sortProduct({commit}, sort) {
    console.log(sort);
    commit('setDataProduct', state.dataProduct);    
  },
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

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}