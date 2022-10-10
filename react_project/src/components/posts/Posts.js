import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {Post} from "../post/Post";
import {postActions} from "../../redux";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, postBody, postComments, loading} = useSelector(state => state.postsReducer);


    useEffect(() => {
        dispatch(postActions.getAll());
    }, [dispatch]);


    function readPostHandler(body) {
        dispatch(postActions.readPost(body));
    }
    function postCommentsHandler(id) {
        dispatch(postActions.getCommentsById({id}));
    }

    return (
        <div>
            {loading && <h3>Loading.......................</h3>}
            <div>
                {posts.map(post => <Post key={post.id} post={post} postBody={postBody} postComments={postComments}
                                         readPostHandler={readPostHandler} postCommentsHandler={postCommentsHandler}/>)}
            </div>
        </div>
    );
}
export {Posts}