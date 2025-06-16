import {$apiAuth} from "../index.js";

$apiAuth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})