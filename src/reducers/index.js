// Root Reducer
import {combineReducers} from 'redux';
import wines from './wineReducer';

const rootReducer = combineReducers({
    // Define all reducers needed to combine
    wines
});

export default rootReducer;