import axios from "axios";

export const API_URL = 'http://localhost:3000/api';
export const AUTH_URL = '/auth';

export const $apiAuth = axios.create({
    withCredentials: true,
    baseURL: API_URL + AUTH_URL
})