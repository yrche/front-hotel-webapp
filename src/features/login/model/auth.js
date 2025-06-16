import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../api/loginService.js";

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    user: undefined,
    error: undefined
}

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
    }
})

export const { clearError } = authSlice.actions;
export default authSlice.reducer;