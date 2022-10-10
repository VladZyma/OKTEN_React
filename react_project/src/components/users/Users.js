import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {User} from "../user/User";
import {userActions} from "../../redux";


const Users = () => {
    const dispatch = useDispatch();
    const {users, loading, userPhone, userDetails} = useSelector(state => state.userReducer);


    useEffect(() => {
        dispatch(userActions.getAll());
    }, [dispatch]);

    function getPhoneHandler(user) {
        dispatch(userActions.getPhone(user));
    }

    function getDetailsById(id) {
        dispatch(userActions.getDetailsById({id}));
    }
    function deleteById(id) {
        dispatch(userActions.deleteById(id));
    }

    return (
        <div>
            {loading && <h3>LOADING....................</h3>}
            <div>
                {users.map(user => <User key={user.id} user={user} userPhone={userPhone}
                                         userDetails={userDetails} getPhoneHandler={getPhoneHandler}
                                         getDetailsById={getDetailsById} deleteById={deleteById}/>)}
            </div>
        </div>
    );
}
export {Users}