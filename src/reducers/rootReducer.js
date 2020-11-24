import {combineReducers} from 'redux'
import dialisysReportReducer from './dialisysReportReducer'
import filterReducer from './filterReducer'
import settingReducer from './settingReducer'
import genryReducer from './genryReducer'
import movieReducer from './movieReducer'
import movieByGenreReducer from './movieByGenreReducer'
import castReducer from './castReducer'
import dialisysServiceProvidersReducer from "./dialisysServiceProvidersReducer";

const rootReducer = combineReducers({
    dialisysReportReducer,
    filterReducer,
    settingReducer,
    genryReducer,
    movieReducer,
    movieByGenreReducer,
    dialisysServiceProvidersReducer,
    castReducer
})
export default rootReducer