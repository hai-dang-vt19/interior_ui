import axios from "axios";

const apiListProduct = axios.get({
  baseURL: 'https://retoolapi.dev/GiRga5/data',
  timeout: 5000
});

export default {apiListProduct};