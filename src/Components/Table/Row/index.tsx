import { FC } from 'react';
import { Post } from '../../../types/types';
interface RowProps {
    post: Post
}
const Row: FC<RowProps> = ({post}) => {
    return (
        <tr key={post.id}>
            <td className='rowID'>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr >
    );
}

export default Row;