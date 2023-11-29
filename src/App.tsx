import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from "./pages/home/Home";

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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
