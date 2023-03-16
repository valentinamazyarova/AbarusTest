import { createReducer, createAction, ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { ICurrentPageState } from '../types/types';

const currentPageState = {
    currentPage: 1
}

export const paginateAction: any = createAction('PAGINATE');
export const nextPageAction: any = createAction('NEXT_PAGE');
export const prevPageAction: any = createAction('PREV_PAGE');

export default createReducer(currentPageState, {
    [paginateAction]: function (state: ICurrentPageState, action: any) {
        state.currentPage = action.payload;
    },
    [nextPageAction]: function (state: ICurrentPageState, action: any) {
        state.currentPage !== 10 ? state.currentPage = action.payload : state.currentPage = 10;
    },
    [prevPageAction]: function (state: ICurrentPageState, action: any) {
        state.currentPage !== 1 ? state.currentPage = action.payload : state.currentPage = 1;
    },
})