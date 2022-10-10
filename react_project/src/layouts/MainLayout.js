import {Outlet} from 'react-router-dom';

import {Header} from "../components";


const MainLayout = () => {

    return (
        <div>
            <div>
                <Header/>
            </div>
            <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}
export {MainLayout}