import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=3b2237079f93a644423365fd6a7bdcac&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;