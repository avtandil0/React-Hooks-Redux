import {GENRES_LOAD_SUCCESS, CANGE_ITEMS_PER_PAGE,FILTER_CHANGE} from '../actions/actionTypes'

const genres = {
    genres : [],
}

const genryReducer = (state = genres, action) => {
    const {type, payload} = action
    console.log('genryReducer - ------------------',type,typeof(payload))
    switch (type) {
        case GENRES_LOAD_SUCCESS:
            return {...state, genres: payload }
        default:
            return state
    }
}

export default genryReducer