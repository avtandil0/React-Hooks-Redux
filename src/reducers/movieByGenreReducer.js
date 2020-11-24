import {MOVIES_BY_GENRE_LOAD_SUCCESS, CANGE_ITEMS_PER_PAGE,FILTER_CHANGE} from '../actions/actionTypes'

const moviesState = {
    movies: {}
}

const movieByGenreReducer = (state = moviesState, action) => {
    const {type, payload} = action
    console.log('movieByGenreReducer - ------------------',type,(payload))
    switch (type) {
        case MOVIES_BY_GENRE_LOAD_SUCCESS:
            return {...state, movies: payload }
        // case MOVIES_BY_GENRE_LOAD_SUCCESS:
        //     return {...state, movies: payload }
        default:
            return state
    }
}

export default movieByGenreReducer