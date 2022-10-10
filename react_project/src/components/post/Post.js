
const Post = (props) => {
    const {post: {userId, id, title, body}, postBody, postComments} = props;
    const {readPostHandler, postCommentsHandler} = props;


    return (
        <div>
            <div>
                <p>UserId : {userId}</p>
                <p>PostId : {id}</p>
                <p>Post title : {title}</p>
                <button onClick={() => readPostHandler(body)}>read post</button>
                <button onClick={() => postCommentsHandler(id)}>comments</button>
            </div>
            <div>
                {postBody && <p>{postBody}</p>}
                {postComments && <div>
                    {postComments.map(comment => <p key={comment.id}>Comment {comment.id} : {comment.body}</p>)}
                </div>}
            </div>
            <hr/>
        </div>
    );
}
export {Post}