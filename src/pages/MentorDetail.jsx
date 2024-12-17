import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from 'react-router-dom';
import { products } from './Produk';  // Mengimpor data produk dari Produk.jsx
import '../styles/MentorDetail.css';
import qris from '../assets/qris.png'; // Pastikan gambar QR code ada di folder assets

const MentorDetail = () => {
  const location = useLocation();
  const { mentor } = location.state; // Mendapatkan data mentor yang dikirim dari Mentor.jsx
  const navigate = useNavigate();  // Hook untuk navigasi
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);  // State untuk produk yang dipilih

  // Filter produk berdasarkan mentor.id (mid)
  const filteredProducts = products.filter(product => product.mid === mentor.id);

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    alert("Pembayaran berhasil!");
    if (selectedProduct) {
      navigate(`/produkdetail/${selectedProduct.id}`);  // Navigasi ke halaman detail produk
    }
  };

  // Fungsi untuk menangani cancel pembayaran
  const handleCancel = () => {
    setShowPaymentModal(false); // Menutup modal ketika cancel diklik
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);  // Menyimpan produk yang dipilih
    setShowPaymentModal(true);  // Menampilkan modal pembayaran
  };

  return (
    <>
    <Navbar />
    
    <div className="mentor-detail-container">
      <div className="mentor-sidebar">
        <img src={mentor.imageUrl} alt={mentor.mentorName} className="mentor-image" />
        <div className="mentor-info">
          <h2>{mentor.mentorName}</h2>
          <p><strong>Jenis Mentor:</strong> {mentor.mentorType}</p>
          <p><strong>Rating:</strong> {mentor.rating} ★</p>
          <p><strong>Jumlah Peserta:</strong> {mentor.numParticipants}+ peserta</p>
        </div>
      </div>
      <div className="mentor-main">
        <h3>Materi yang Diajarkan</h3>
        <div className="mentor-products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h4>{product.name}</h4>
              <p><strong></strong> {product.category}</p>
              <p id='harga-mentor'>Rp{product.price}</p>
              {/* Tombol untuk memilih produk dan menampilkan modal pembayaran */}
              <button onClick={() => handleProductSelect(product)}>Beli Produk</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Pembayaran */}
      {showPaymentModal && (
        <div className="payment-modal">
          <div className="modal-content">
            <h3>Silakan Melakukan Pembayaran</h3>
            <p>Scan QRIS untuk melakukan pembayaran</p>
            <div className="qr-placeholder">
              <img src={qris} alt="QR Code Pembayaran" />
            </div>
            <button onClick={handleCancel} className="btn-cancel" style={{marginRight: '10px'}}>
                Batal
              </button>
            <button onClick={handlePaymentSuccess}>Sudah Bayar</button>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default MentorDetail;
