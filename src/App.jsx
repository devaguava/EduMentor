import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Produk from "./pages/Produk"
import ProdukDetail from "./pages/ProdukDetail";
import Mentor from "./pages/Mentor";
import MentorDetail from './pages/MentorDetail';
import Partner from "./pages/Partner";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produk' element={<Produk />} />
        <Route path="/produkdetail/:id" element={<ProdukDetail />} />
        <Route path='/mentor' element={<Mentor />} />
        <Route path="/mentor/:id" element={<MentorDetail />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
