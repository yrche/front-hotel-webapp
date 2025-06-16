import {$apiAuth} from "../../../shared/api/axiosInstance/index.js";

export const loginService = async (email, password) => {
    return await $apiAuth.post('/signin', {email, password});
}