import {useState, useEffect} from 'react';

import User from '../user/User';
import Posts from '../posts/Posts';
import UserForm from '../userForm/UserForm';
import {usersService} from '../../services/users.api.service';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        usersService.getAll()
            .then(response => setUsers(response.data));
    },[]);

    function getPosts(id) {
        usersService.getUserPosts(id)
            .then(response => setPosts(response.data));
    }

    return (
        <div>
            <div>
                <UserForm setUsers={setUsers}/>
            </div>
            <div>
                {users.map(item => <User key={item['id']} user={item} getPosts={getPosts}/>)}
            </div>
            <hr/>
            <div>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}