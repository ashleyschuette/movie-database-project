import axios from 'axios';
import API_KEY from '../API-key';

export default function get(movieName) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
        .then(response => response.data.results)
}

export function getPopular() {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.data.results)
}