import {DIALISYS_REPORT_LOAD_BEGIN,DIALISYS_REPORT_LOAD_SUCCESS,DIALISYS_REPORT_LOAD_ERROR} from '../actions/actionTypes'

const initialState = {
    dialisysReport: [],
    totalItems:null,
    loading: false,
    errors: null
}

const dialisysReportReducer = (state = initialState, action) => {
    const {type, payload} = action;
    console.log('payload 888',type)
    switch (type) {
        case DIALISYS_REPORT_LOAD_BEGIN:
            return {loading: true, errors: null}
        case DIALISYS_REPORT_LOAD_SUCCESS:
            return {
                dialisysReport: payload.data,
                totalItems: payload.totalItems,
                loading: false
            }
        case DIALISYS_REPORT_LOAD_ERROR:
            return {
                loading: false,
                errors: payload.result
            }
        default:
            return state
    }
}

export default dialisysReportReducer