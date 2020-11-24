import {MOVIES_LOAD_SUCCESS, MOVIE_LOAD_SUCCESS, SIMILAR_MOVIES_LOAD_SUCCESS} from '../actions/actionTypes'

const moviesState = {
    movies: {},
    movie: {},
    similarMovies: {}
}

const movieReducer = (state = moviesState, action) => {
    const {type, payload} = action
    console.log('movieReducer - ------------------',type,(payload))
    switch (type) {
        case MOVIES_LOAD_SUCCESS:
            return {...state, movies: payload }
        case MOVIE_LOAD_SUCCESS:
                return {...state, movie: payload }
        case SIMILAR_MOVIES_LOAD_SUCCESS:
            return {...state, similarMovies: payload }
        default:
            return state
    }
}

export default movieReducer