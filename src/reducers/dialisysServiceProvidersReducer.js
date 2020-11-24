import {DIALISYS_SERVICE_PROVIDERS_LOAD_BEGIN,
    DIALISYS_SERVICE_PROVIDERS_LOAD_SUCCESS,
    DIALISYS_SERVICE_PROVIDERS_LOAD_ERROR,} from '../actions/actionTypes'

const initialState = {
    dialisysServiceProviders: [],
    loading: false,
    errors: null
}

const dialisysServiceProvidersReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case DIALISYS_SERVICE_PROVIDERS_LOAD_BEGIN:
            return {loading: true, errors: null}
        case DIALISYS_SERVICE_PROVIDERS_LOAD_SUCCESS:
            return {
                dialisysServiceProviders: payload.result,
                loading: false
            }
        case DIALISYS_SERVICE_PROVIDERS_LOAD_ERROR:
            return {
                loading: false,
                errors: payload.result
            }
        default:
            return state
    }
}

export default dialisysServiceProvidersReducer