import axios from "axios";
import enumApi from "@/enums/enumApi";

const domain = enumApi.domain;

export async function apiListTypeProduct(params) {
    try {
        const {data} = await axios.get(`${domain}/master/type-product`);
        
        return data;
    } catch (error) {
        return {error};
    }
}

export async function apiListMaterial(params) {
    try {
        const {data} = await axios.get(`${domain}/master/material`);
        
        return data;
    } catch (error) {
        return {error};
    }
}

export async function apiListColor(params) {
    try {
        const {data} = await axios.get(`${domain}/master/color`);
        
        return data;
    } catch (error) {
        return {error};
    }
}