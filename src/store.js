import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './reducers/rootReducer';

// Need to pass the reducer/s inside createStore()
const store = createStore(rootReducer, composeWithDevTools());

export default store;

/* Single Reducer.. but we need multiple reducers, where we're going to use 
 combineReducers to combile them all */
// const reducer = {
//     activities: [
//         {
//             id: 1,
//             name: "gym",
//             duration: "2 hours"
//         }
//     ],
//     people: [
//         {
//             id: 1,
//             name: "John Doe"
//         }
//     ]
// }