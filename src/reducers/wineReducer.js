import * as types from '../actions/actionTypes';

export default function wineReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_WINE:
            return [...state,
                Object.assign({}, action.wine)
            ];

        default:
            return state;
    }
}