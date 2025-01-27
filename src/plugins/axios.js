import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://football-back.devgustavo.com',
});

export default axiosInstance;