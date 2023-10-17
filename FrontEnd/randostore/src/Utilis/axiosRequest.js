import axios from 'axios';
import { backEndbaseURL } from './baseUrl';



const axiosRequest = axios.create({
  baseURL:backEndbaseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  
  },
});

export default axiosRequest;