import axios from "axios";
import enumApi from "@/enums/enumApi";
const domain = enumApi.domain + '/product';


export async function apiListProduct(params) {
  try {
    const conditions = params ? `?product_id=${params}` : '';
    const {data} = await axios.get(`${domain}${conditions}`);
    
    return data;
  } catch (error) {
    return {error};
  }
}

export async function apiCreateProduct(params) {
  try {
    const {data} = params;
    
    return data;
  } catch (error) {
    return {error};
  }
}

export async function apiDeleteProduct(params) {
  try {
    const {data} = await axios.delete(`${domain}/${params}`);

    return data;
  } catch (error) {
    return {error};
  }
}

export async function apiFilterProduct(params = null) {
  try {
    const {data} = await axios.get(`${domain}?product_id=${params}`);

    return data;
  } catch (error) {
    return {error};
  }
}

export async function apiDetailProduct(params) {
  try {
    return params;
  } catch (error) {
    return {error};
  }
}
export async function apiSortProduct(params) {
  // try {
    console.log(params['column'], params['sort']);
    
    return params;
  // } catch (error) {
  //   return {error};
  // }
}
