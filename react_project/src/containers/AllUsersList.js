import {useState, useEffect} from 'react';
import {getAllUsers, getUserDetails} from '../services/users.api.service';

import './AllUsersList.css';
import User from '../components/User';
import UserDetails from '../components/UserDetails';

export default function AllUsersList() {

    const [allUsers, setAllUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);


    useEffect(() => {
        getAllUsers().then(response => setAllUsers(response.data));
    }, []);
    function getDetails(id) {
        getUserDetails(id).then(response => setUserDetails(response.data));
    }

    console.log(userDetails);
    return (
        <div className='users-list'>
            <div className='all-users'>
                {allUsers.map(item => <User user={item} getDetails={getDetails} key={item['id']}/>)}
            </div>
            {userDetails && <div className='user-details'>
                {<UserDetails user={userDetails} /> }
            </div>}

        </div>
    );

}