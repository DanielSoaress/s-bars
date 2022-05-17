import axios from 'axios';
import env from '../../env';

const api = axios.create({
  baseURL: env.domain,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// Interceptador de respostas
api.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);

export default api;
