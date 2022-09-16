export default function User(props) {
    const {user, getDetails} = props;

    return (
        <div>
            <h3>{user['id']} {user['name']}</h3>
            <button onClick={() => getDetails(user['id'])}>Details --></button>
        </div>
    );
}