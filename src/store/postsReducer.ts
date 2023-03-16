import { createReducer, createAction } from '@reduxjs/toolkit';
import { IPostsState } from '../types/types';

const postsState: IPostsState = {
    posts: [],
    isSortID: false,
    isSortBody: false,
    isSortTitle: false,
}



export const getPostsAction: any = createAction('GET_POSTS');
export const sortDecreasePostsAction: any  = createAction('SORTD_DECREASE_POSTS');
export const sortIncreasePostsAction: any  = createAction('SORTD_INCREASE_POSTS');

export default createReducer(postsState, {
    [getPostsAction]: function (state: IPostsState, action: any) {
        state.posts = action.payload;
    },
    [sortDecreasePostsAction]: function (state: IPostsState, action: any) {
        
        if (action.payload === 'id') {
            state.isSortID = true;
            state.posts = (state.posts).sort((a, b) => b.id - a.id);
        }
        if (action.payload === 'body') {
            state.isSortBody = true;
            state.posts = (state.posts).sort((a, b) => sortStrDecrease(b.body, a.body));
        }
        if (action.payload === 'title') {
            state.isSortTitle = true;
            state.posts = (state.posts).sort((a, b) => sortStrDecrease(b.title, a.title));
        }
    },
    [sortIncreasePostsAction]: function (state: IPostsState, action: any) {
        if (action.payload === 'id') {
            state.isSortID = false;
            state.posts = (state.posts).sort((a, b) => a.id - b.id);
        }
        if (action.payload === 'body') {
            state.isSortBody = false;
            state.posts = (state.posts).sort((a, b) => sortStrIncrease(b.body, a.body));
        }
        if (action.payload === 'title') {
            state.isSortTitle = false;
            state.posts = (state.posts).sort((a, b) => sortStrIncrease(b.title, a.title));
        }
    },
})

const sortStrDecrease = (sortItemPrev: string, sortItemCurr: string) => {
    if (sortItemCurr > sortItemPrev) return 1;
    if (sortItemCurr == sortItemPrev) return 0;
    if (sortItemCurr < sortItemPrev) return -1;
    return -1;
}

const sortStrIncrease = (sortItemPrev: string, sortItemCurr: string) => {
    if (sortItemCurr < sortItemPrev) return 1;
    if (sortItemCurr == sortItemPrev) return 0;
    if (sortItemCurr > sortItemPrev) return -1;
    return -1;
}