import axios from "axios";

const api = axios.create({
    baseURL: "https://vinicius-consultas.herokuapp.com",
});

export default api;
