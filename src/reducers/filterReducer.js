import {PAGE_CHANGE,CANGE_ITEMS_PER_PAGE,FILTER_CHANGE} from '../actions/actionTypes'

const filter = {
    serviceProviderId : "",
    seanceStartDate:'2019-01-01',
    seanceEndDate:'2019-02-01',
    currentPage: 1,
    itemsPerPage : 10,
    totalItems:0
}

const filterReducer = (state = filter, action) => {
    const {type, payload} = action
    // console.log('type - payload',type,payload)
    switch (type) {
        case PAGE_CHANGE:
            return {...state, currentPage: payload}
        case CANGE_ITEMS_PER_PAGE:
            return {...state, currentPage:1, itemsPerPage: payload}
        case FILTER_CHANGE:
            return {...state, ...payload}
        default:
            return state
    }
}

export default filterReducer