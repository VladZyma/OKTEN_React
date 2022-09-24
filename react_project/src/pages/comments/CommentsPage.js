import {useState, useEffect} from 'react';

import {service} from "../../services";
import Comment from '../../components/comments/Comment';

function CommentsPage() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        service.getComments()
            .then(response => setComments(response.data));
    });

    return (
        <div>
            <div>
                {comments.map(item => <Comment key={item.id} comment={item}/>)}
            </div>
        </div>
    );
}
export default CommentsPage;