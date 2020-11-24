import {
    DIALISYS_REPORT_LOAD_BEGIN,
    DIALISYS_REPORT_LOAD_SUCCESS,
    DIALISYS_REPORT_LOAD_ERROR,
    DIALISYS_SERVICE_PROVIDERS_LOAD_BEGIN,
    DIALISYS_SERVICE_PROVIDERS_LOAD_SUCCESS,
    DIALISYS_SERVICE_PROVIDERS_LOAD_ERROR,
    PAGE_CHANGE,
    CANGE_ITEMS_PER_PAGE,
    FILTER_CHANGE,
    OPEN_DRAWER,
    LOADING,
    GENRES_LOAD_SUCCESS,
    MOVIES_LOAD_SUCCESS,
    MOVIES_BY_GENRE_LOAD_SUCCESS,
    MOVIE_LOAD_SUCCESS,
    CASTS_LOAD_SUCCESS,
    SIMILAR_MOVIES_LOAD_SUCCESS
} from './actionTypes'
import { getGenresFromApi, getMoviesFromApi,
    getMoviesByGenreFromApi,getMovieFromApi,
     getCastsFromApi, getSimilarMoviesFromApi } from '../api/index'

export const getDialisysReport = (filter) => async dispatch => {
    dispatch({type: DIALISYS_REPORT_LOAD_BEGIN})
    try {
        const result = []
        dispatch({
            type: DIALISYS_REPORT_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: DIALISYS_REPORT_LOAD_ERROR,
            payload: error
        })
    }
}

export const getDialisysServiceProviders = () => async dispatch => {
    dispatch({type: DIALISYS_SERVICE_PROVIDERS_LOAD_BEGIN})
    try {
        const result = []
        dispatch({
            type: DIALISYS_SERVICE_PROVIDERS_LOAD_SUCCESS,
            payload: {result}
        })
    } catch (error) {
        dispatch({
            type: DIALISYS_SERVICE_PROVIDERS_LOAD_ERROR,
            payload: error
        })
    }
}

export const pageChange = (newPage) => (
    {
        type: PAGE_CHANGE,
        payload: newPage
    })

export const filterChange = (filter) => (
    {
        type: FILTER_CHANGE,
        payload: filter
    })


export const changeItemsPerPage = (itemsPerPage) =>  {
    return {
        type: CANGE_ITEMS_PER_PAGE,
        payload: itemsPerPage
    }
}

export const settingChange = (setting) => (
    {
        type: OPEN_DRAWER,
        payload: setting
    })

export const getGenres = () => async dispatch => {
    // dispatch({type: LOADING, payload: true})
    try {

        const result = await getGenresFromApi()
        dispatch({
            type: GENRES_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',error)
    }
}

export const getMovies = () => async dispatch => {
    try {

        const result = await getMoviesFromApi()
        console.log('000000000000000',result)
        dispatch({
            type: MOVIES_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',error)
    }
}

export const getMoviesByGenre = (id) => async dispatch => {
    try {

        const result = await getMoviesByGenreFromApi(id)
        dispatch({
            type: MOVIES_BY_GENRE_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',error)
    }
}

export const getMovie = (id) => async dispatch => {
    try {

        const result = await getMovieFromApi(id)
        dispatch({
            type: MOVIE_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',error)
    }
}

export const getCasts = (id) => async dispatch => {
    try {

        const result = await getCastsFromApi(id)
        dispatch({
            type: CASTS_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',error)
    }
}

export const getSimilarMovies = (id) => async dispatch => {
    try {

        const result = await getSimilarMoviesFromApi(id)
        dispatch({
            type: SIMILAR_MOVIES_LOAD_SUCCESS,
            payload: result
        })
    } catch (error) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',error)
    }
}