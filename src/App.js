import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/shared/Home/Home";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
