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
                    history.push('/auth/change-password');
                }
                return res.data;
            })
            .catch((error) => {

                    history.push('/result/error-change-password');


                console.log(error.response.data);
                throw new Error(error.response.data.error);
            });
    },
);
