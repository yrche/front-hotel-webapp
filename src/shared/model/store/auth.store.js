import { createAsyncThunk } from "@reduxjs/toolkit";
import {refreshService, registrationService} from "../../api/index.js";
import { loginService } from "../../api/index.js";
import { logoutService } from "../../api/index.js";

export const registration = createAsyncThunk(
    'auth/registration',
    async ({ user_name, email, password }, thunkAPI) => {
        try {
            const userData = await registrationService(user_name, email, password);
            return userData.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const userData = await loginService(email, password);
            return userData.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (arg, thunkAPI) => {
        try {
            const userData = await logoutService();
            return userData.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
)

export const refresh = createAsyncThunk(
    'auth/refresh',
    async () => {
        try {
            const userData = await refreshService();
            return userData.data
        } catch (err) {
        }
    }
)