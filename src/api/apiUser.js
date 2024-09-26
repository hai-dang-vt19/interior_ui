import axios from "axios";

const domain = 'http://interior/api';


export async function apiListUser(params) {
  try {
    const conditions = params ? `?user_id=${params}` : '';
    const {data} = await axios.get(`${domain}/user${conditions}`);
    
    return data;
  } catch (error) {
    return {error};
  }
}
