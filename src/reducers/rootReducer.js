import {combineReducers} from "redux";
import activitiesReducer from './activitiesReducer';

// We need to provide all the reducers (activities, people, etc.) inside combineReducers()
const rootReducer = combineReducers({
    activities: activitiesReducer
})

export default rootReducer;