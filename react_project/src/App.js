import {Routes, Route, Navigate} from 'react-router-dom';


import {MainLayout} from "./layouts";
import {Users, Posts, Cars} from "./components";

function App() {
  return (
    <div>
        <div>
          <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/users'}/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/cars'} element={<Cars/>}/>
            </Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
