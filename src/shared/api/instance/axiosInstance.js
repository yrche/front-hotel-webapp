import axios from "axios";

export const API_URL = 'http://localhost:3000/api';
export const AUTH_URL = '/auth';

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export const $apiAuth = axios.create({
    withCredentials: true,
    baseURL: API_URL + AUTH_URL
})