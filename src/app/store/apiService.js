import { createApi } from '@reduxjs/toolkit/query/react';
import Axios from 'axios';


const axiosBaseQuery =
	() =>
	async ({ url, method, data, params }) => {
		let apiKey = import.meta.env.VITE_X_API_KEY
		console.log(apiKey)
		try {
			Axios.defaults.baseURL = '/api';
			const result = await Axios({
				url,
				method,
				data,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				params,
				headers: {
					'x-api-key': apiKey
				},
			});
			console.log(url,result)
			return { data: result.data };
		} catch (axiosError) {
			const error = axiosError;
			return {
				error
			};
		}
	};


export const apiService = createApi({
	baseQuery: axiosBaseQuery(),
	endpoints: () => ({}),
	reducerPath: 'apiService'
});
export default apiService;
