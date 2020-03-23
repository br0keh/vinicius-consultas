import axios from "axios";

const api = axios.create({
    baseURL: process.env.BACKEND,
});

export default api;
