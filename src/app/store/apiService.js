import { createApi } from '@reduxjs/toolkit/query/react';
import Axios from 'axios';

const axiosBaseQuery = () => async ({ url, method, data, params }) => {
	Axios.defaults.baseURL = '/api';
    console.log(url)
    try {
        const result = await Axios({
            url,
            method,
            data,
            params,
            headers: {
                'x-api-key': 'WMEyVRFmNegvwuB1YT4rkKW5Yjh1'
            }
        });
        console.log(result.data, url)
        return { data: result.data };
    } catch (axiosError) {
        const error = axiosError;
        return { error };
    }
};


export const apiService = createApi({
	baseQuery: axiosBaseQuery(),
	endpoints: () => ({}),
	reducerPath: 'apiService'
});
export default apiService;
