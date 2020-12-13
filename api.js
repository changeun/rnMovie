import axios from "axios";

const TMDB_KEY = "1aebb5901585d4c33f2beaad51d65bed";

const makeRequest = (path, params) => 
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
});

const getAnything = async(path, params = {}) => {
    try {
        const {
            data: { results },
            data
        } =  await makeRequest(path, params);
        
        return [results || data, null];
    } catch (e) {
        return [null, e];
    }
}

export const movieApi ={
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcomming: () => getAnything("/movie/upcoming", { region: "kr" }),
    search: query => getAnything("/search/movie", { query }),
    movie: movie_id => getAnything(`/movie/${movie_id}`),
    discover: () => getAnything("/discover/movie")
}

export const tvApi ={
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", { query }),
    show: tv_id => getAnything(`/tv/${tv_id}`)
}

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;