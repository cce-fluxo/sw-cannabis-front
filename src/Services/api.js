import axios from "axios";


const api = axios.create({
  baseURL: "https://ddd-conhecimento.herokuapp.com/",
  
});

export default api;