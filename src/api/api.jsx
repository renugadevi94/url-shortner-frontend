// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:3300/",
// });


import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BEURL,
  });
  
  
  export default api;
  
  
  
  
  
  
  
  
  