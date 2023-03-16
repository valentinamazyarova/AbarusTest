import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import Table from "../Table";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux'
import { paginateAction, nextPageAction, prevPageAction } from "../../store/currentPageReducer";
import { setValueAction } from "../../store/valueSearchBarReducer";
import { getPostsAction, sortDecreasePostsAction, sortIncreasePostsAction } from "../../store/postsReducer";
import { Post, IRootReducer } from "../../types/types.js";




function App() {
    const currentPage: number = useSelector((state: IRootReducer) => state.currentPage.currentPage);
    const valueSearchBar: string = useSelector((state: IRootReducer) => state.valueSearchBar.valueSearchBar);
    const posts: Post[] = useSelector((state: IRootReducer) => state.posts.posts);
    const isSortID: boolean = useSelector((state: IRootReducer) => state.posts.isSortID);
    const isSortBody: boolean = useSelector((state: IRootReducer) => state.posts.isSortBody);
    const isSortTitle: boolean = useSelector((state: IRootReducer) => state.posts.isSortTitle);
    const countPostOnPage: number = 10;

    const [isClick, setIsClick] = useState<boolean[]>([]);

    const dispatch = useDispatch()

    const getPosts = (): any => {
        return function (dispatch: any) {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => dispatch(getPostsAction(data)))
        }
    };

    const setCurrentBtn = (pageNum: number) => {
        let leftPart: boolean[] = Array(pageNum).fill(false)
        let rightPart: boolean[] = Array(pageNum + 1).fill(false)
        setIsClick([...leftPart, true, ...rightPart])
    }

    useEffect(() => {
        dispatch(getPosts());

        let a: boolean[] = Array(10).fill(false)
        a[1] = true;
        setIsClick(a)


    }, [])

    const paginate = (pageNum: number) => {
        dispatch(paginateAction(pageNum));
        setCurrentBtn(pageNum);
    };
    const nextPage = (pageNum:number) => {
        dispatch(nextPageAction(pageNum));
        setCurrentBtn(currentPage);
    };
    const prevPage = (pageNum:number) => {
        dispatch(prevPageAction(pageNum));
        setCurrentBtn(currentPage);
    };
    const setValueSearchBar = (str: any) => {
        dispatch(setValueAction(str));
        dispatch(paginateAction(1));
        setCurrentBtn(1);
    };
    const sortDecrease = (sortName: any) => {
        dispatch(sortDecreasePostsAction(sortName));
    };
    const sortIncrease = (sortName: any) => {
        dispatch(sortIncreasePostsAction(sortName));
    };

    const searchData = posts.filter(post =>
        post.body.toLowerCase().includes(valueSearchBar.toLowerCase()) ||
        post.title.toLowerCase().includes(valueSearchBar.toLowerCase()) ||
        String(post.id).includes(valueSearchBar)
    )

    let lastPostIndex = currentPage * countPostOnPage;
    let firstPostIndex = lastPostIndex - countPostOnPage;
    let currentPosts: Post[] = searchData.slice(firstPostIndex, lastPostIndex);

    return (
        <Router>
            <div className="mainContainer">
                <div className="container">
                    <SearchBar setValueSearchBar={setValueSearchBar} />
                    {currentPosts && <Table isSortID={isSortID} isSortBody={isSortBody} isSortTitle={isSortTitle}
                        currentPosts={currentPosts} sortDecrease={sortDecrease} sortIncrease={sortIncrease} />}
                    <Routes>
                        <Route path="/page/:id"
                            element={posts && posts.length && <Pagination isClick={isClick}
                                currentPage={currentPage}
                                countPostOnPage={countPostOnPage}
                                posts={posts} paginate={paginate}
                                nextPage={nextPage} prevPage={prevPage} />} />
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;
