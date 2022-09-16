export default function UserDetails(props) {
    const {user} = props;
    return (
        <>
            <h4>username: {user['username']}</h4>
            <p>email: {user['email']}</p>
            <p>phone: {user['phone']}</p>
            <p>address: {user["address"]['city']}, {user['address']['street']}, {user['address']['suite']}</p>
            <p>company: {user['company']['name']}</p>
        </>
    );
}