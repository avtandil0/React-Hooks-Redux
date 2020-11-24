import {OPEN_DRAWER, LOADING, FILTER_CHANGE} from '../actions/actionTypes'

const settings = {
    openDrawer : true,
    loading: false
}

const settingReducer = (state = settings, action) => {
    const {type, payload} = action
    // console.log('settingReducer -- type - payload',type,payload)
    switch (type) {
        case OPEN_DRAWER:
            return {...state, openDrawer: payload.openDrawer}
        // case LOADING:
        //     return {...state, openDrawer: payload.loading}
        default:
            return state
    }
}

export default settingReducer