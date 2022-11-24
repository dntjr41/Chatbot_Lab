import axios from 'axios';

const axiosInstance = axios.create({
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Content-Type': 'application/json',

		// 등등의 header
	},
	baseURL: process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT + "/api", // baseUrl
});

export default axiosInstance;