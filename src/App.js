import Container from '@mui/material/Container';
import { Header } from './components/Header';
import { Home, AddPost, FullPost, Login, Registration } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/posts/:id" element={<FullPost />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
