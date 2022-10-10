import {Link} from 'react-router-dom';


const Header = () => {

    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/users'}>Users</Link>
                        </li>
                        <li>
                            <Link to={'/posts'}>Posts</Link>
                        </li>
                        <li>
                            <Link to={'/cars'}>Cars</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export {Header}