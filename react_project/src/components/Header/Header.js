import {Link} from "react-router-dom";

import css from './header.module.css'

function Header() {

    return (
        <div className={css.Header}>
            <nav>
                <ul className={css.navList}>
                    <li>
                        <Link to={'/todo'}>TODO</Link>
                    </li>
                    <li>
                        <Link to={'/albums'}>ALBUMS</Link>
                    </li>
                    <li>
                        <Link to={'/comments'}>COMMENTS</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;