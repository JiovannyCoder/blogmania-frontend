import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from "./pages/home/Home";


function App() {
  return (
    <BrowserRouter>
      <div>
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
