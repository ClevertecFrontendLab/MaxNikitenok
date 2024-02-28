import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseURL } from '../api/api';
import { history } from '@redux/configure-store';

export const postCheckEmail = createAsyncThunk(
    'auth/postCheckEmail',
    async (data: { email: string }) => {
        return await axios
            .post(`${baseURL}/auth/check-email`, data)
            .then((res) => {
                if (res.status === 200) {
                    history.push('/auth/confirm-email');
                }
                return res.data;
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    if (error.response.data.message === 'Email не найден') {
                        history.push('/result/error-check-email-no-exist');
                    } else {
                        history.push('/result/error-check-email');
                    }
                } else {
                    history.push('/result/error-check-email');
                }
                throw new Error(error.response.data.error);
            });
    },
);
