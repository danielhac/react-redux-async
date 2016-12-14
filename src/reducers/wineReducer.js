import * as types from '../actions/actionTypes';

export default function wineReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_WINES_SUCCESS:
            return action.wines;

        default:
            return state;
    }
}