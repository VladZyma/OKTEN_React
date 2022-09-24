import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {service} from "../../services";
import Post from '../../components/post/Post';

function PostPage() {
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        service.getPostById(id)
            .then(response => setPost(response.data))
    }, []);

    return (
        <div>
            <div>
                 <Post post={post}/>
            </div>
        </div>
    );
}
export default PostPage;