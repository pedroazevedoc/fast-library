import axios from 'axios';

// Base da URL da API
export const API_BASE_URL = '/api'; // Usando proxy para evitar problemas de CORS

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;