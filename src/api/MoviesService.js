import axios from "axios";

const API_KEY = '4e03d69d37114ba4b7cd1b0572f819f3'
const BASE_URL = 'https://api.themoviedb.org/3/'
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {

    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }
}