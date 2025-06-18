import { createSlice } from "@reduxjs/toolkit";
import {login, logout, registration, refresh} from '../index.js';

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    user: undefined,
    error: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.user = action.payload;
                state.error = undefined
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.user = undefined;
                state.error = action.payload;
            })
            .addCase(registration.pending, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = true;
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.user = action.payload;
                state.error = undefined
            })
            .addCase(registration.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.user = undefined;
                state.error = action.payload;
            })
            .addCase(logout.pending, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.user = undefined;
                state.error = undefined;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.user = undefined;
                state.error = undefined;
            })
            .addCase(refresh.pending, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = true;
                state.user = false;
                state.error = undefined;
            })
            .addCase(refresh.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.user = action.payload;
                state.error = undefined;
            })
            .addCase(refresh.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.user = undefined;
                state.error = action.payload;
            })
    }
})

export const { clearError } = authSlice.actions;
export default authSlice.reducer;