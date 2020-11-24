import {CASTS_LOAD_SUCCESS, MOVIE_LOAD_SUCCESS, FILTER_CHANGE} from '../actions/actionTypes'

const castState = {
    casts: {},
}

const castReducer = (state = castState, action) => {
    const {type, payload} = action
    console.log('castReducer - ------------------',type,(payload))
    switch (type) {
        case CASTS_LOAD_SUCCESS:
            return {...state, casts: payload }
        default:
            return state
    }
}

export default castReducer