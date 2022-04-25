import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { GlobalStyle } from '../css/index';
import { ResetStyle } from "../css/reset";
import Container from '../components/Containers/Main';
import Login from "../pages/Index/Login";
import Register from "../pages/Index/Register";
import Home from "../pages/Home";

export default function App() {
  return (
    <>
      <AuthProvider>
        <ResetStyle />
        <GlobalStyle />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </AuthProvider>
    </>
  );
}
