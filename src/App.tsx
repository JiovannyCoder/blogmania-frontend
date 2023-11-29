import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profil from './pages/profil/Profil';

// components
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/profil"
            element={<Profil />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
