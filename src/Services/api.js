import axios from "axios";


const api = axios.create({
  baseURL: "https://sw-cannabis-master.herokuapp.com/",
  
});

export default api;