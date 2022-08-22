import Container from "@mui/material/Container";
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        <Login />
      </Container>
    </>
  );
}

export default App;