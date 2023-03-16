export interface Post  {
    id: number;
    body: string;
    title: string;
}

export interface IRootReducer {
    currentPage: ICurrentPageState;
    valueSearchBar: IValueSearchBarState;
    posts: IPostsState;
}

export interface IPostsState {
    posts: Post[];
    isSortID: boolean;
    isSortBody: boolean;
    isSortTitle: boolean;
}

export interface IValueSearchBarState {
    valueSearchBar: string;
}

export interface ICurrentPageState {
    currentPage: number
}