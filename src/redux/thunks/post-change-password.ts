import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseURL } from '../api/api';
import { history } from '@redux/configure-store';

export const postChangePassword = createAsyncThunk(
    'auth/postChangePassword',
    async (data: { password: string; confirmPassword: string }) => {
        return await axios
            .post(`${baseURL}/auth/change-password`, data)
            .then((res) => {
                if (res.status === 201) {
                    history.push('/result/success-change-password');
                }
                return res.data;
            })
            .catch((error) => {
                history.push('/result/error-change-password');

                throw new Error(error.response.data.error);
            });
    },
);
