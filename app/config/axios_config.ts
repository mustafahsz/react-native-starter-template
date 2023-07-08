import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://back.kharaji.net/api',
});
