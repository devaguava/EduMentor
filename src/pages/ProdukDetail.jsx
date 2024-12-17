import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, Link } from 'react-router-dom';
import { products } from './Produk'; 

const ProdukDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Produk tidak ditemukan!</p>
        <Link to="/produk" style={{ textDecoration: 'none', color: '#007BFF' }}>
          Kembali ke daftar produk
        </Link>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <br />
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Bagian Judul */}
      <h1 style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '10px' }}>{product.name}</h1>
      
      {/* Mentor Info */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '16px', marginRight: '10px' }}>👤</span>
        <span style={{ fontSize: '16px' }}>{product.mentorName}</span>
      </div>

      {/* Gambar atau Video */}
      <div
  style={{
    backgroundColor: '#ccc',
    width: '100%',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    marginBottom: '20px',
  }}
>
  <iframe
    width="100%"
    height="100%"
    src={product.url}
    title={product.name}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ borderRadius: '8px' }}
  ></iframe>
</div>

      {/* Informasi Produk */}
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>{product.judul}</h2>
        <ul style={{ marginTop: '10px' }}>
          <li style={{ marginBottom: '5px' }}>
            <strong></strong> {product.materi}
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProdukDetail;
