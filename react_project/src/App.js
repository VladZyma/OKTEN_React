import {Routes, Route, Navigate} from 'react-router-dom';

import {MainLayout} from "./layouts";
import {HomePage, RegisterPage, LoginPage, CarsPage} from "./pages";


function App() {

    return (

        <div>
            <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/home'}/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/cars'} element={<CarsPage/>}/>
              </Route>
            </Routes>
        </div>

    );

}

export default App;
