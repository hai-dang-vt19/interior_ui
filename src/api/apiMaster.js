import axios from "axios";
import enumApi from "@/enums/enumApi";

const domain = enumApi.domain + '/master';

export async function apiListTypeProduct(params) {
    try {
        const {data} = await axios.get(`${domain}/type-product`);
        console.log(params);
        
        return data;
    } catch (error) {
        return {error};
    }
}

export async function apiListMaterial(params) {
    try {
        const {data} = await axios.get(`${domain}/material`);
        console.log(params);

        return data;
    } catch (error) {
        return {error};
    }
}

export async function apiListColor(params) {
    try {
        const {data} = await axios.get(`${domain}/color`);
        console.log(params);

        return data;
    } catch (error) {
        return {error};
    }
}