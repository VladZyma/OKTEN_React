import {useState, useEffect} from 'react';

import Post from '../post/Post';

export default function Posts(props) {
    const {posts} = props;

    return (
        <div>
            {posts.map(item => <Post key={item['id']} post={item}  />)}
        </div>
    );
}