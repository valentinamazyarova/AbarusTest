import { FC } from "react";
import Row from "./Row";
import { Post } from "../../types/types";
import sortIcon from './sortIcon.svg'

interface TableProps {
    isSortID: boolean;
    isSortBody: boolean;
    isSortTitle: boolean;
    currentPosts: Post[];
    sortIncrease: (sortName: string) => void;
    sortDecrease: (sortName: string) => void;
}

const Table: FC<TableProps> = ({ isSortID, isSortBody, isSortTitle, currentPosts, sortIncrease, sortDecrease }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="id">ID
                        <img className={isSortID ? `icon rotate` : `icon`} src={sortIcon} alt=""
                            onClick={() => { isSortID ? sortIncrease("id") : sortDecrease("id") }} />
                    </th>
                    <th>Заголовок
                        <img className={isSortTitle ? `icon rotate` : `icon`} src={sortIcon} alt=""
                            onClick={() => { isSortTitle ? sortIncrease("title") : sortDecrease("title") }} />
                    </th>
                    <th>Описание
                        <img className={isSortBody ? `icon rotate` : `icon`} src={sortIcon} alt=""
                            onClick={() => { isSortBody ? sortIncrease("body") : sortDecrease("body") }} />
                    </th>
                </tr>
            </thead>
            <tbody>
                {currentPosts && currentPosts.map(post =><Row post={post}/>)}
            </tbody>
        </table>
    );
}

export default Table;