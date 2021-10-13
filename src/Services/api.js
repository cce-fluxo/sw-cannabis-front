import axios from "axios";


const api = axios.create({
  baseURL: "https://sw-cannabis-back-orvnl.ondigitalocean.app/",
  
});

export default api;