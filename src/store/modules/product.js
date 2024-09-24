import {apiProduct} from '@/api/apiProduct';

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
  }
};

const getters = {
  dataProduct: state => state.dataProduct
};

const actions = {
  async getDataProduct({commit}) {
    // const dataProduct = [
    //   { 
    //     isActive: true,
    //     product_id: 40, 
    //     product_name: 'SOFA-SPNSK', 
    //     type_name: 'Sợi tổng hợp', 
    //     quantity: 5, 
    //     price: '15.000.000', 
    //     discount: '10', 
    //     status: 1
    //   },
    //   { 
    //     isActive: false, 
    //     product_id: 21, 
    //     product_name: 'SOFA-SPNSK', 
    //     type_name: 'Sợi tổng hợp', 
    //     quantity: 5, 
    //     price: '15.000.000', 
    //     discount: '10', 
    //     status: 1
    //   },
    // ];
    try {

      const response = await apiProduct.get('http://localhost:8080/admin/product-design');
      console.log(response); //error
      
      const data = response.data;
      commit('setDataProduct', data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },

  editProduct({commit}, product) {
    console.log(product);
    commit('setProduct', product);    
  },

  deleteProduct({commit}, product) {
    console.log('Product ID: '+product.product_id);
    commit('setProduct', product);
  }
};

const mutations = {
  setDataProduct(state, dataProduct) {
    state.dataProduct = dataProduct;
  },
  setProduct(state, product) {
    state.product = product;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}