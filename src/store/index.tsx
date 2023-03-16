import  currentPageReducer  from "./currentPageReducer";
import  valueSearchBarReducer  from "./valueSearchBarReducer";
import  postsReducer  from "./postsReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    valueSearchBar: valueSearchBarReducer,
    posts: postsReducer
})

export const store = configureStore({
    reducer: rootReducer,
})