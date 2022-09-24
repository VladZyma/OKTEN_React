import {Link} from 'react-router-dom';

import css from './comment.module.css';

function Comment(props) {
    const {comment} = props;

    return (
        <div className={css.Comment}>
            <h4>Post : {comment.postId}</h4>
            <p>Comment : {comment.id}</p>
            <p>Name : {comment.name}</p>
            <p>Email : {comment.email}</p>
            <p>Comment body : <Link to={`/postpage/${comment.postId}`} className={css.link}>{comment.body}</Link> </p>
        </div>
    );
}
export default Comment;