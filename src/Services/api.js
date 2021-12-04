import axios from "axios";


const api = axios.create({
<<<<<<< HEAD
  baseURL: "https://ddd-conhecimento.herokuapp.com/",
  
});
=======
  baseURL: "https://sw-cannabis-back-orvnl.ondigitalocean.app/",
});
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("Token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

>>>>>>> carrinho

export default api;