import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseURL } from '../api/api';
import { history } from '@redux/configure-store';

export const postLogin = createAsyncThunk(
    'auth/postLogin',
    async (data: { email: string; password: string }) => {
        return await axios
            .post(`${baseURL}/auth/login`, data)
            .then((res) => {
                if (res.status === 200) {
                    history.push('/main');
                }
                return res.data;
            })
            .catch((error) => {
                if (error.response.status !== 200) {
                    history.push('/result/error-login');
                }

                throw new Error(error.response.data.error);
            });
    },
);
