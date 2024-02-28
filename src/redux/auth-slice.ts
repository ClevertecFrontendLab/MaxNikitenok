import { createSlice } from '@reduxjs/toolkit';
import { postRegister } from './thunks/post-register';
import { postLogin } from './thunks/post-login';
import { postCheckEmail } from './thunks/post-check-email';
import { postConfirmEmail } from './thunks/post-confirm-email';
import { postChangePassword } from './thunks/post-change-password';
import { history } from './configure-store';

interface AuthSliceState {
    isAuth: boolean;
    loading: boolean;
    registerData: { email: string; password: string };
    changePassData: { password: string, confirmPassword: string };
    email: string;
}

const initialState: AuthSliceState = {
    isAuth: false,
    loading: false,
    registerData: { email: '', password: '' },
    changePassData: { password: '', confirmPassword: '' },

    email: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state) {
            localStorage.removeItem('accessToken');
            state.isAuth = false;
            history.push('/auth');
        },
        setRegisterData(state, { payload }) {
            state.registerData = payload;
        },
        setChangePassData(state, { payload }) {
            state.changePassData = payload;
        },
    },
    selectors: {
        selectAuth: (state) => state.isAuth,
        selectLoading: (state) => state.loading,
        selectEmail: (state) => state.email,
        selectRegisterData: (state) => state.registerData,
        selectChangePassData: (state) => state.changePassData,
    },
    extraReducers: (builder) => {
        builder.addCase(postRegister.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postRegister.fulfilled, (state) => {
              state.loading = false;
        });
        builder.addCase(postRegister.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(postLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postLogin.fulfilled, (state, { payload }) => {
            state.isAuth = true;
            localStorage.setItem('accessToken', payload.accessToken);
            state.loading = false
            });
        builder.addCase(postLogin.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(postCheckEmail.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postCheckEmail.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.email = payload.email;
        });
        builder.addCase(postCheckEmail.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(postConfirmEmail.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postConfirmEmail.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(postConfirmEmail.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(postChangePassword.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postChangePassword.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(postChangePassword.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { logOut, setRegisterData, setChangePassData } = authSlice.actions;

export const { selectAuth, selectLoading, selectEmail, selectRegisterData, selectChangePassData } = authSlice.selectors;
