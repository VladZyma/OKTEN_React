

export default function User(props) {
    const {user: {id, name, phone, email, address: {city, street}}, getPosts } = props;
    return (
        <div>
            <h3>{id} {name}</h3>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>city: {city}</p>
            <p>street: {street}</p>
            <button onClick={()=> getPosts(id)}>Posts</button>
        </div>
    );
}