import {useNavigate} from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/home')}>HOME</button>
            <button onClick={() => navigate('/login')}>LOGIN</button>
            <button onClick={() => navigate('/register')}>REGISTER</button>
        </div>
    );
}

export {Header}