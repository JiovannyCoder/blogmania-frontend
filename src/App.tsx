import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profil from './pages/profil/Profil';

// components
import Navbar from './components/Navbar';
import PostDetails from './pages/home/PostDetails';
import useAuthContext from './hooks/useAuthContext';


function App() {
  const { user } = useAuthContext()
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
            path="/post/:id"
            element={<PostDetails />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/profil" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/profil" /> : <Signup />}
          />
          <Route
            path="/profil"
            element={!user ? <Navigate to="/login" /> : <Profil />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
