import { createSlice } from '@reduxjs/toolkit';
import { postRegister } from './thunks/post-register';
import { postLogin } from './thunks/post-login';
import { history } from './configure-store';
import { postCheckEmail } from './thunks/post-check-email';
import { postConfirmEmail } from './thunks/post-confirm-email';
import { postChangePassword } from './thunks/post-change-password';

interface AuthSliceState {
    isAuth: boolean;
    loading: boolean;
    email: string;
}

const initialState: AuthSliceState = {
    isAuth: false,
    loading: false,
    email: '',

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
        selectEmail: (state) => state.email,
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
        builder.addCase(postCheckEmail.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postCheckEmail.fulfilled, (state, { payload }) => {
            console.log(payload);
                  state.loading = false;
                  state.email = payload.email
        });
        builder.addCase(postCheckEmail.rejected, (state) => {
            state.loading = false;

        });
        builder.addCase(postConfirmEmail.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postConfirmEmail.fulfilled, (state, { payload }) => {
            console.log(payload);
                  state.loading = false;
        });
        builder.addCase(postConfirmEmail.rejected, (state) => {
            state.loading = false;

        });
        builder.addCase(postChangePassword.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postChangePassword.fulfilled, (state, { payload }) => {
            console.log(payload);
                  state.loading = false;
        });
        builder.addCase(postChangePassword.rejected, (state) => {
            state.loading = false;

        });
    },
});

export const { logOut } = authSlice.actions;

export const { selectAuth, selectLoading, selectEmail } = authSlice.selectors;
