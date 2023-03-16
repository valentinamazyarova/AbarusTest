import { createReducer, createAction } from '@reduxjs/toolkit';
import { IValueSearchBarState } from '../types/types';
const valueSearchBarState = {
    valueSearchBar: ""
}

export const setValueAction:any = createAction('SET_VALUE');

export default createReducer(valueSearchBarState, {
    [setValueAction]: function (state: IValueSearchBarState, action: any) {
        state.valueSearchBar = action.payload;
    }
})

