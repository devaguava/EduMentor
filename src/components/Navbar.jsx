import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";



function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><Link to="/">EduMentor</Link></div>
            <div className="menu">
                <ul>
                    {/* <li><a href="#home">Home</a></li> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produk">Produk</Link></li>
                    <li><Link to="/mentor">Mentor</Link></li>
                    <li><Link to="/partner">Partner</Link></li>
                    <li><Link to="/profile"><BsPersonCircle className="nav-icons" /></Link></li>
                    {/* <li><a href="#courses">Produk</a></li> */}
                    {/* <li><a href="#tutors">Mentor</a></li> */}
                    {/* <li><a href="#partners">Partner</a></li> */}
                    {/* <li><a href="#contact">Contact</a></li> */}
                    {/* <li><a href="https://forms.gle/U2rw1WAbwk1ZmwFEA" className="tbl-biru" target="_blank" rel="noopener noreferrer">Daftar</a></li> */}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
