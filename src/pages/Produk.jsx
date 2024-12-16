// src/pages/Produk.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import '../styles/Produk.css'; 
import tutorAnisa from '../assets/tutorAnisa.png';
import tutorJennie from '../assets/tutorJennie.png';
import tutorAdi from '../assets/tutorAdi.png';
import tutorCarissa from '../assets/tutorCarissa.png';
import tutorDavid from '../assets/tutorDavid.jpg';
import tutorAndi from '../assets/tutorAndi.jpg';

const products = [
  {
    id: 1,
    name: "Matematika Diskrit",
    category: "Pendalaman materi",
    price: 100000,
    mentorType: "Dosen",
    mentorName: "Anisa Rahma Sari, S.T., M.T.",
    rating: 4.8,
    numParticipants: 100,
    imageUrl: tutorAnisa, 
  },
  {
    id: 2,
    name: "Laravel PHP Pemula",
    category: "Pemrograman",
    price: 35000,
    mentorType: "Mahasiswa",
    mentorName: "Adi Sanjaya, S.Kom.",
    rating: 4.5,
    numParticipants: 50,
    imageUrl: tutorAdi, 
  },
  {
    id: 3,
    name: "Kalkulus II",
    category: "Pendalaman materi",
    price: 120000,
    mentorType: "Dosen",
    mentorName: "Jennie Jang, S.T., M.T.",
    rating: 4.7,
    numParticipants: 120,
    imageUrl: tutorJennie, 
  },
  {
    id: 4,
    name: "Algoritma Pemrograman",
    category: "Pemrograman",
    price: 20000,
    mentorType: "Mahasiswa",
    mentorName: "Carissa James, S.Kom.",
    rating: 4.6,
    numParticipants: 80,
    imageUrl: tutorCarissa, 
  },
  {
    id: 5,
    name: "Kalkulus",
    category: "Pendalaman Materi",
    price: 190000,
    mentorType: "Dosen",
    mentorName: "David, M.Sc.",
    rating: 4.9,
    numParticipants: 200,
    imageUrl: tutorDavid, 
  },
  {
    id: 6,
    name: "Logika Matematika",
    category: "Pendalaman materi",
    price: 27000,
    mentorType: "Dosen",
    mentorName: "Andi Setiawan, M.T.",
    rating: 4.8,
    numParticipants: 150,
    imageUrl: tutorAndi, 
  },
  {
    id: 7,
    name: "Matematika Diskrit",
    category: "Pendalaman materi",
    price: 100000,
    mentorType: "Dosen",
    mentorName: "Anisa Rahma Sari, S.T., M.T.",
    rating: 4.8,
    numParticipants: 100,
    imageUrl: tutorAnisa, 
  },
  {
    id: 8,
    name: "Laravel PHP Pemula",
    category: "Pemrograman",
    price: 35000,
    mentorType: "Mahasiswa",
    mentorName: "Adi Sanjaya, S.Kom.",
    rating: 4.5,
    numParticipants: 50,
    imageUrl: tutorAdi, 
  },
  {
    id: 9,
    name: "Kalkulus II",
    category: "Pendalaman materi",
    price: 200000,
    mentorType: "Dosen",
    mentorName: "Jennie Jang, S.T., M.T.",
    rating: 4.7,
    numParticipants: 120,
    imageUrl: tutorJennie, 
  },
  {
    id: 10,
    name: "Algoritma Pemrograman",
    category: "Pemrograman",
    price: 20000,
    mentorType: "Mahasiswa",
    mentorName: "Carissa James, S.Kom.",
    rating: 4.6,
    numParticipants: 80,
    imageUrl: tutorCarissa, 
  },
  {
    id: 11,
    name: "Kalkulus",
    category: "Latihan",
    price: 155000,
    mentorType: "Dosen",
    mentorName: "David, M.Sc.",
    rating: 4.9,
    numParticipants: 200,
    imageUrl: tutorDavid, 
  },
  {
    id: 12,
    name: "Logika Matematika",
    category: "Pendalaman materi",
    price: 27000,
    mentorType: "Dosen",
    mentorName: "Andi Setiawan, M.T.",
    rating: 4.8,
    numParticipants: 150,
    imageUrl: tutorAndi, 
  },
];

const Produk = () => {
  // State untuk filter
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(35000); // Harga tunggal
  const [mentorType, setMentorType] = useState("");

  // Fungsi untuk menyaring produk berdasarkan filter
  const filterProducts = (product) => {
    const categoryMatch = category ? product.category === category : true;
    const priceMatch = product.price <= price; // Produk yang harganya kurang dari atau sama dengan harga yang dipilih
    const mentorTypeMatch = mentorType ? product.mentorType === mentorType : true;

    return categoryMatch && priceMatch && mentorTypeMatch;
  };

  // Produk yang disaring berdasarkan filter
  const filteredProducts = products.filter(filterProducts);

  return (
    <>
      <Navbar />
      <div className="produk-container">
        {/* Sidebar untuk kategori, harga, dan jenis mentor */}
        <div className="sidebar">
          <h3>Kategori</h3>
          <ul>
            <li>
              <input
                type="radio"
                id="category-all"
                name="category"
                value=""
                checked={category === ""}
                onChange={() => setCategory("")}
              />
              <label htmlFor="category-all">Semua</label>
            </li>
            <li>
              <input
                type="radio"
                id="category-1"
                name="category"
                value="Pendalaman materi"
                checked={category === "Pendalaman materi"}
                onChange={() => setCategory("Pendalaman materi")}
              />
              <label htmlFor="category-1">Pendalaman materi</label>
            </li>
            <li>
              <input
                type="radio"
                id="category-2"
                name="category"
                value="Pemrograman"
                checked={category === "Pemrograman"}
                onChange={() => setCategory("Pemrograman")}
              />
              <label htmlFor="category-2">Pemrograman</label>
            </li>
            <li>
              <input
                type="radio"
                id="category-3"
                name="category"
                value="Latihan"
                checked={category === "Latihan"}
                onChange={() => setCategory("Latihan")}
              />
              <label htmlFor="category-3">Latihan</label>
            </li>
          </ul>

          <br />
          <br />

          <h3>Harga Maksimal</h3>
          <div>
            <label>Rp{price.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="250000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              step="1000"
              className="price-range"
            />
          </div>

          <br />
          <br />

          <h3>Jenis Mentor</h3>
          <ul>
            <li>
              <input
                type="radio"
                id="mentor-all"
                name="mentorType"
                value=""
                checked={mentorType === ""}
                onChange={() => setMentorType("")}
              />
              <label htmlFor="mentor-all">Semua</label>
            </li>
            <li>
              <input
                type="radio"
                id="mentor-1"
                name="mentorType"
                value="Dosen"
                checked={mentorType === "Dosen"}
                onChange={() => setMentorType("Dosen")}
              />
              <label htmlFor="mentor-1">Dosen</label>
            </li>
            <li>
              <input
                type="radio"
                id="mentor-2"
                name="mentorType"
                value="Mahasiswa"
                checked={mentorType === "Mahasiswa"}
                onChange={() => setMentorType("Mahasiswa")}
              />
              <label htmlFor="mentor-2">Mahasiswa</label>
            </li>
          </ul>
        </div>

        {/* Daftar produk */}
        <div className="produk-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="produk-item">
              <img src={product.imageUrl} alt={product.name} />
              <div className="info">
                <p id="category">{product.category}</p>
                <h4>{product.name}</h4>
                <p id="harga">Rp{product.price.toLocaleString()}</p>
                <p className="mentor"><i className="fas fa-user"></i> {product.mentorName} ({product.mentorType})</p>
                <div className="rating">
                  <span>★ {product.rating}</span>
                  <span>({product.numParticipants}+ peserta)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Produk;
