import Container from '@mui/material/Container';
import { Header } from './components/Header';
import { Home, AddPost, FullPost, Login, Registration } from './pages';
import { Routes, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import React from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  
  React.useEffect(() => {dispatch(fetchAuthMe)}, [])


  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/posts/create" element={<AddPost />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
