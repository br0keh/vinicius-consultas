import axios from "axios";

const api = axios.create({
    baseURL: "http://vinicius-consultas.herokuapp.com",
});

export default api;
