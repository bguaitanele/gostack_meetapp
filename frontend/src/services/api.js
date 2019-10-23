import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL_PROTOCOL || 'https'}://${
    process.env.REACT_APP_BASE_URL
  }:${process.env.REACT_APP_BASE_URL_PORT || 80}`,
});

export default api;
