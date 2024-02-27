import { createSlice } from '@reduxjs/toolkit';
import { postRegister } from './thunks/post-register';
import { postLogin } from './thunks/post-login';
import { history } from './configure-store';

interface AuthSliceState {
    isAuth: boolean;
    loading: boolean;
}

const initialState: AuthSliceState = {
    isAuth: false,
    loading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state) {
            localStorage.removeItem('accessToken');
            state.isAuth = false;
            // history.push('/auth');
        },
    },
    selectors: {
        selectAuth: (state) => state.isAuth,
        selectLoading: (state) => state.loading,
    },
    extraReducers: (builder) => {
        builder.addCase(postRegister.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postRegister.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.loading = false;
        });
        builder.addCase(postRegister.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(postLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postLogin.fulfilled, (state, { payload }) => {
            console.log(payload);
            localStorage.setItem('accessToken', payload.accessToken);
            state.isAuth = true;
            state.loading = false;
        });
        builder.addCase(postLogin.rejected, (state) => {
            state.loading = false;

        });
    },
});

export const { logOut } = authSlice.actions;

export const { selectAuth, selectLoading } = authSlice.selectors;
