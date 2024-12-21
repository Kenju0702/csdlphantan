import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://66b41ade9f9169621ea1c6f2.mockapi.io/crud/ap1',
  headers: {
    'Content-Type': 'application/json',
    // Thêm các header khác nếu cần
  },
});

export default axiosInstance;