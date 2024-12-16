import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Produk from "./pages/Produk"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produk' element={<Produk />} />
      </Routes>
    </Router>
  )
}

export default App
