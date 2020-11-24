import callApi from './callApi.js'
import axios from 'axios'
// import qs from 'qs'

const apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';

// const getGenresFromApi = () => callApi({
//     url: `https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK`,
//     method: 'get',
//     params:{
//         'api_key': apikey
//     }

// })

export const getGenresFromApi = async () => {
    let url = 'https://api.themoviedb.org/3/genre/movie/list'
    try {
        var params = {
            'api_key': apikey,
            'language': 'en-US'
        }
        let response = await axios.get(url,{
            params,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res)
        return response.data
    } catch (err) {
        throw err
    }
}

export const getMoviesFromApi = async () => {
    let url = 'https://api.themoviedb.org/3/movie/top_rated'
    try {
        var params = {
            'api_key': apikey,
            'language': 'en-US'
        }
        let response = await axios.get(url,{
            params,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res)
        return response.data
    } catch (err) {
        throw err
    }
}

export const getMoviesByGenreFromApi = async (id) => {
    let url = 'https://api.themoviedb.org/3/genre/'+ id +'/movies';
    try {
        var params = {
            'api_key': apikey,
            'language': 'en-US'
        }
        let response = await axios.get(url,{
            params,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res)
        return response.data
    } catch (err) {
        throw err
    }
}

export const getMovieFromApi = async (id) => {
    let url = 'https://api.themoviedb.org/3/movie/'+ id ;
    try {
        var params = {
            'api_key': apikey,
            'language': 'en-US'
        }
        let response = await axios.get(url,{
            params,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res)
        return response.data
    } catch (err) {
        throw err
    }
}

export const getCastsFromApi = async (id) => {
    let url = 'https://api.themoviedb.org/3/movie/'+ id +'/credits' ;
    try {
        var params = {
            'api_key': apikey,
            'language': 'en-US'
        }
        let response = await axios.get(url,{
            params,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res)
        return response.data
    } catch (err) {
        throw err
    }
}

export const getSimilarMoviesFromApi = async (id) => {
    let url = 'https://api.themoviedb.org/3/movie/'+ id +'/similar' ;
    try {
        var params = {
            'api_key': apikey,
            'language': 'en-US'
        }
        let response = await axios.get(url,{
            params,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res)
        return response.data
    } catch (err) {
        throw err
    }
}
// export default {
//     getGenresFromApi,
// }