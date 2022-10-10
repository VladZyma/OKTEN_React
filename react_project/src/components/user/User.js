

const User = (props) => {
    const {user, user: {id, name, username, email},userPhone,userDetails} = props;
    const {getPhoneHandler, getDetailsById, deleteById} = props;


    return (
        <div>
            <div>
                <p>ID : {id}</p>
                <p>Name : {name}</p>
                <p>Username : {username}</p>
                <p>Email : {email}</p>
                <button onClick={() => getPhoneHandler(user)}>phone</button>
                <button onClick={() => getDetailsById(id)}>details</button>
                <button onClick={() => deleteById(id)}>delete</button>
                <div>
                    {userPhone && <p>{userPhone.phone}</p>}
                    {userDetails && <div>
                        <p>City : {userDetails['address'].city}</p>
                        <p>Street : {userDetails['address'].street}</p>
                        <p>Suite : {userDetails['address'].suite}</p>
                        <p>Company : {userDetails['company'].name}</p>
                        </div>}
                </div>
            </div>
            <hr/>
        </div>
    );
}
export {User}