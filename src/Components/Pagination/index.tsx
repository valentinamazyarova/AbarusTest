import { Link } from "react-router-dom";
import { FC, useState, useEffect } from 'react';
import { Post } from "../../types/types";


interface PaginationProps {
    isClick: boolean[];
    countPostOnPage: number;
    posts: Post[];
    paginate: (num: number) => void;
    prevPage: (num: number) => void;
    nextPage: (num: number) => void;
    currentPage: number;
}

const Pagination: FC<PaginationProps> = ({ isClick, paginate, prevPage, nextPage, currentPage, posts, countPostOnPage }) => {

    const [pageNumbers, setPageNumbers] = useState<number[]>([])


    useEffect(() => {
        let btnsNumbers: number[] = [];
        if (posts && posts.length) {
            for (let i: number = 1; i <= Math.ceil(posts.length / countPostOnPage); i++) {
                btnsNumbers.push(i);
            }
            btnsNumbers && btnsNumbers.length && setPageNumbers(btnsNumbers)
        }
    }, [])

    return (
        <div className="btnGroup">
            <Link to={`/page/${currentPage}`}>
                <button className="btnsTex" onClick={() => { prevPage(currentPage - 1) }}>Назад</button>
            </Link>
            <div className="btnNums">
                {
                    pageNumbers && pageNumbers.length && pageNumbers.map(number => (
                        <Link to={`/page/${number}`}>
                            <button className={isClick[number] ? "buttonsNums currentBtn" : "buttonsNums"}
                                key={number} onClick={() => { paginate(number) }}>{number}</button>
                        </Link>
                    ))
                }
            </div>
            <Link to={`/page/${currentPage}`}>
                <button className="btnsTex" onClick={() => { nextPage(currentPage + 1) }}>Вперед</button>
            </Link>

        </div>
    );
}

export default Pagination;