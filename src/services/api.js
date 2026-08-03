import axios from 'axios';

// Base da URL da API
export const API_BASE_URL = 'https://openlibrary.org/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;