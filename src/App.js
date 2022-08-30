import Container from '@mui/material/Container';
import { Header } from './components/Header';
import { FullPost } from './pages/FullPost';
import { AddPost } from './pages/AddPost';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        <Login />
        <Registration />
        <AddPost />
        <FullPost />
      </Container>
    </>
  );
}

export default App;
