import {$apiAuth} from "../../../shared/api/index.js";

export const loginService = async (email, password) => {
    return await $apiAuth.post('/signin', {email, password});
}

export const registrationService = async (user_name, email, password) => {
    return await $apiAuth.post('/signup', {user_name, email, password});
}

export const logoutService = async () => {
    return await $apiAuth.post('/logout');
}

export const refreshService = async () => {
    return await $apiAuth.get('/refresh', {withCredentials: true});
}