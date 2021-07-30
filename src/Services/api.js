import axios from "axios";


const api = axios.create({
  baseURL: "https://sw-cannabis-fluxo.herokuapp.com/",
  
});

export default api;