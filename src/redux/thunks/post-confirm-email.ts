import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseURL } from '../api/api';
import { history } from '@redux/configure-store';

export const postConfirmEmail = createAsyncThunk(
    'auth/postConfirmEmail',
    async (data: { email: string; code: string }) => {
        return await axios
            .post(`${baseURL}/auth/confirm-email`, data)
            .then((res) => {
                history.push('/auth/change-password');

                return res.data;
            })
            .catch((error) => {
                history.push('/auth/confirm-email');

                throw new Error(error.response.data.error);
            });
    },
);
