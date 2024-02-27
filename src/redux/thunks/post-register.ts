import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseURL } from '../api/api';
import { history } from '@redux/configure-store';

export const postRegister = createAsyncThunk(
    'auth/postRegister',
    async (data: { email: string; password: string }) => {
        return await axios
            .post(`${baseURL}/auth/registration`, data)
            .then((res) => {
                if (res.status === 201) {
                    history.push('/result/success');
                }
                return res.data;
            })
            .catch((error) => {
                if (error.response.data.statusCode === 409) {
                    history.push('/result/error-user-exist');
                } else {
                    history.push('/result/error');
                }

                console.log(error.response.data);
                throw new Error(error.response.data.error);
            });
    },
);
