import {Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import ToDoPage from "./pages/toDo/ToDoPage";
import AlbumsPage from "./pages/albums/AlbumsPage";
import CommentsPage from "./pages/comments/CommentsPage";
import PostPage from './pages/post/PostPage';

function App() {
  return (
    <div className='App'>
        <Header/>

        <div>
            <Routes>
                <Route path={'/todo'} element={<ToDoPage/>}/>
                <Route path={'/albums'} element={<AlbumsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>
                <Route path={'/postpage/:id'} element={<PostPage/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
