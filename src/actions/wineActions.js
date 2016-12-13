import * as types from './actionTypes';

export function createWine(wine) {
    return { type: types.CREATE_WINE, wine };
}