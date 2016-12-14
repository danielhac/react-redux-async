import * as types from './actionTypes';
import wineApi from '../api/mockWineApi';

export function loadWinesSuccess(wines) {
    return { type: types.LOAD_WINES_SUCCESS, wines };
}

// Thunk
export function loadWines() {
    return function(dispatch) {
        return wineApi.getAllWines().then(wines => {
            dispatch(loadWinesSuccess(wines));
        }).catch(error => {
           throw(error);
        });
    };
}