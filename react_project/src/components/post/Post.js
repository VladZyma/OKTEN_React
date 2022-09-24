import {useNavigate} from 'react-router-dom';

import css from './post.module.css';

function Post(props) {
    const {post} = props;
    const navigate = useNavigate();

    return (
        <div className={css.Post}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <div>
                <button onClick={() => navigate('/comments')}>to comments</button>
            </div>
        </div>
    );
}
export default Post;