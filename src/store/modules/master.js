import {apiListMaterial, apiListColor, apiListTypeProduct} from  '@/api/apiMaster';

const state = {
    dataTypeProducts: [],
    dataMaterials: [],
    dataColors: []
}

const getters = {
    dataTypeProducts: state => state.dataTypeProducts,
    dataMaterials: state => state.dataMaterials,
    dataColors: state => state.dataColors
}

const actions = {
    async getDataTypeProducts({commit}, valueTypeProduct) {
        const response = await apiListColor(valueTypeProduct);
        console.log(response);
        
        if (response.error) {
            console.error(response.error);
            return false;
        }

        commit('setDataTypeProduct', response);
        return true;
    },
    async getDataMaterials({commit}, valueMaterial) {
        const response = await apiListMaterial(valueMaterial);
        
        if (response.error) {
            console.error(response.error);
            return false;
        }

        commit('setDataMateiral', response);
        return true;
    },
    async getDataColors({commit}, valueColor) {
        const response = await apiListColor(valueColor);

        if (response.error) {
            console.error(response.error);
            return false;            
        }

        commit('setDataColor', response);
    }
}


const mutations = {
    setDataTypeProduct(state, dataTypeProducts) {
        state.dataTypeProducts = dataTypeProducts;
    },
    setDataMaterial(state, dataMaterials) {
        state.dataMaterials = dataMaterials;
    },
    setDataColor(state, dataColors) {
        state.dataColors = dataColors;
    }
}