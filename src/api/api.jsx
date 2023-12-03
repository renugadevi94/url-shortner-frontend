import axios from "axios";

console.log(import.meta.env.VITE_BEURL)

const api = axios.create({
    baseURL: import.meta.env.VITE_BEURL,
  });
  
  
  export default api;
  
  
  
  
  
  
  
  
  