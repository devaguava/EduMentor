import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Produk.css'; 
import { useNavigate } from "react-router-dom";  // Import useNavigate untuk navigasi
import tutorAnisa from '../assets/TutorAnisa.png';
import tutorJennie from '../assets/tutorJennie.png';
import tutorAdi from '../assets/tutorAdi.png';
import tutorCarissa from '../assets/tutorCarissa.png';
import tutorDavid from '../assets/tutorDavid.jpg';
import tutorAndi from '../assets/tutorAndi.jpg';
import qris from '../assets/qris.png';

export const products = [
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
        url:"https://www.youtube.com/embed/llqrwjG0jXg",
        judul:"Himpunan",
        materi:"Himpunan (set) adalah konsep dasar dalam matematika, yang terdiri dari kumpulan objek atau elemen yang didefinisikan dengan jelas dan terorganisir. Dalam matematika diskrit, yang sering berfokus pada struktur-struktur matematika yang terhitung atau diskrit (bukan kontinu), konsep himpunan sangat penting karena sering digunakan untuk mendefinisikan dan menganalisis objek-objek seperti graf, fungsi, dan relasi."
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
        url:"https://www.youtube.com/embed/OB8jBvu8N34",
        judul:"Pengenalan Laravel PHP",
        materi:"Laravel adalah salah satu framework PHP yang paling populer dan sering digunakan untuk pengembangan aplikasi web. Laravel menawarkan berbagai fitur yang memudahkan para pengembang dalam membangun aplikasi web dengan cara yang lebih efisien dan terstruktur. Laravel dibangun dengan konsep MVC (Model-View-Controller) yang memisahkan data, tampilan, dan logika aplikasi untuk meningkatkan keterbacaan dan pemeliharaan kode."
      },
      {
        id: 3,
        name: "Basis Data",
        category: "Pendalaman materi",
        price: 90000,
        mentorType: "Dosen",
        mentorName: "Jennie Jang, S.T., M.T.",
        rating: 4.7,
        numParticipants: 120,
        imageUrl: tutorJennie, 
        url:"https://www.youtube.com/embed/rKaq-WeHRqE",
        judul:"Pengenalan Basis Data",
        materi:"Basis Data (Database) adalah kumpulan data yang saling terkait yang disimpan secara terstruktur dan dikelola dengan menggunakan sistem manajemen basis data (DBMS - Database Management System). Data dalam basis data disusun dalam format yang terorganisir agar mudah diakses, dikelola, dan diperbarui. Basis data digunakan untuk menyimpan informasi yang dapat digunakan oleh aplikasi dan sistem untuk berbagai keperluan, seperti pengolahan transaksi, penyimpanan informasi pengguna, analisis data, dan sebagainya."
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
        url:"https://www.youtube.com/embed/RadjAh0LT9I",
        judul:"Pengenalan Algoritma Pemrograman",
        materi:"Algoritma adalah suatu urutan langkah-langkah logis, sistematis, dan terstruktur yang dirancang untuk menyelesaikan masalah atau mencapai tujuan tertentu. Algoritma dapat diterapkan dalam berbagai bidang seperti pemrograman, matematika, ilmu komputer, dan bahkan kegiatan sehari-hari. Dalam konteks komputasi, algoritma adalah dasar dari program komputer, di mana setiap algoritma memberikan instruksi kepada komputer untuk menyelesaikan suatu tugas tertentu."
      },
      {
        id: 5,
        name: "Kalkulus",
        category: "Pendalaman Materi",
        price: 100000,
        mentorType: "Dosen",
        mentorName: "David, M.Sc.",
        rating: 4.9,
        numParticipants: 200,
        imageUrl: tutorDavid, 
        url:"https://www.youtube.com/embed/hJXeku1ZZ8c",
        judul:"Turunan",
        materi:"Turunan (derivative) adalah konsep dalam kalkulus yang digunakan untuk mengukur kecepatan perubahan suatu fungsi terhadap variabel independennya. Turunan memberikan informasi tentang kemiringan (gradien) dari garis singgung pada kurva suatu fungsi pada titik tertentu."
      },
      {
        id: 6,
        name: "Logika Matematika",
        category: "Pendalaman materi",
        price: 27000,
        mentorType: "Mahasiswa",
        mentorName: "Andi Setiawan, M.T.",
        rating: 4.8,
        numParticipants: 150,
        imageUrl: tutorAndi, 
        url:"https://www.youtube.com/embed/aMVQq1kshao",
        judul: "Proposisi",
        materi: "Proposisi adalah salah satu konsep fundamental dalam logika dan filsafat, yang juga digunakan dalam berbagai bidang seperti matematika, ilmu komputer, dan linguistik. Proposisi dapat didefinisikan sebagai suatu pernyataan atau klaim yang memiliki nilai kebenaran tertentu, yaitu benar (true) atau salah (false), tetapi tidak mungkin keduanya secara bersamaan. Konsep ini merupakan inti dari logika deduktif, di mana pernyataan-pernyataan dianalisis untuk menentukan hubungan logis dan validitas argumen."
      },
      {
        id: 7,
        name: "Matematika Diskrit II",
        category: "Pendalaman materi",
        price: 100000,
        mentorType: "Dosen",
        mentorName: "Anisa Rahma Sari, S.T., M.T.",
        rating: 4.8,
        numParticipants: 100,
        imageUrl: tutorAnisa, 
        url:"https://www.youtube.com/embed/gZmQNs0vLis",
        judul: "Kombinatorial",
        materi: "Kombinatorika adalah cabang dari matematika diskrit yang mempelajari tentang penyusunan, pemilihan, dan pengaturan objek-objek tertentu dalam suatu urutan atau kelompok berdasarkan aturan tertentu. Keterkaitan antara objek-objek ini sering kali diteliti dalam konteks yang terbatas, sehingga kombinatorika sangat relevan dalam analisis algoritma, teori graf, dan pemrograman."
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
        url:"https://www.youtube.com/embed/IpdI_Wv0bic",
        judul: "Laravel Blade Templating",
        materi: "aravel Blade Templating adalah sistem templating yang digunakan oleh Laravel, sebuah framework PHP populer, untuk memisahkan logika presentasi dari logika aplikasi. Blade memungkinkan Anda untuk menulis tampilan (view) aplikasi web Anda dengan sintaks yang mudah dibaca dan dipelihara, serta menyediakan banyak fitur canggih untuk membangun aplikasi yang dinamis."
      },
      {
        id: 9,
        name: "Basis Data II",
        category: "Pendalaman materi",
        price: 100000,
        mentorType: "Dosen",
        mentorName: "Jennie Jang, S.T., M.T.",
        rating: 4.7,
        numParticipants: 120,
        imageUrl: tutorJennie, 
        url:"https://www.youtube.com/embed/GFQaEYEc8_8",
        judul:"Normalisasi Basis Data",
        materi:"Normalisasi adalah proses dalam desain basis data yang bertujuan untuk mengorganisir data dalam tabel dengan cara menghindari redundansi (duplikasi data) dan memastikan bahwa hubungan antar data dijaga dengan benar. Tujuan utama normalisasi adalah untuk mengurangi duplikasi data dan meningkatkan integritas data, sehingga perubahan pada data hanya perlu dilakukan di satu tempat saja."
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
        url:"https://www.youtube.com/embed/YnLM2PBP9pM",
        judul:"Sorting",
        materi:"Sorting adalah proses mengatur elemen-elemen dalam suatu kumpulan data (array, list, atau struktur lainnya) berdasarkan urutan tertentu, seperti ascending (menaik) atau descending (menurun). Sorting membantu mempermudah pencarian, pengolahan, dan analisis data."
      },
      {
        id: 11,
        name: "Kalkulus II",
        category: "Latihan",
        price: 115000,
        mentorType: "Dosen",
        mentorName: "David, M.Sc.",
        rating: 4.9,
        numParticipants: 200,
        imageUrl: tutorDavid, 
        url:"https://www.youtube.com/embed/E86ckq8yLUU",
        judul:"Integral",
        materi:"Integral adalah salah satu konsep utama dalam kalkulus yang berfungsi untuk menghitung luas, volume, total, atau nilai kumulatif suatu fungsi. Integral sering dianggap sebagai kebalikan dari turunan (diferensiasi), karena integral digunakan untuk membangun kembali fungsi asli dari turunan."
      },
      {
        id: 12,
        name: "Logika Matematika II",
        category: "Pendalaman materi",
        price: 37000,
        mentorType: "Mahasiswa",
        mentorName: "Andi Setiawan, M.T.",
        rating: 4.8,
        numParticipants: 150,
        imageUrl: tutorAndi, 
        url:"https://www.youtube.com/embed/lD55-CjmCZE",
        judul: "Operator Logika",
        materi: "Operator logika adalah simbol atau kata kunci yang digunakan untuk menghubungkan proposisi atau pernyataan dalam logika, baik untuk menyatakan hubungan maupun untuk membuat kombinasi baru dari proposisi yang ada. Operator logika biasanya digunakan dalam logika matematika, logika proposisional, pemrograman komputer, dan analisis argumen, untuk menentukan nilai kebenaran dari kombinasi pernyataan."
      },
];

const Produk = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(35000);
  const [mentorType, setMentorType] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null); // State untuk produk yang dipilih
  const [showPaymentModal, setShowPaymentModal] = useState(false); // State untuk menampilkan modal pembayaran

  const navigate = useNavigate();  // Hook untuk navigasi ke halaman lain

  const filterProducts = (product) => {
    const categoryMatch = category ? product.category === category : true;
    const priceMatch = product.price <= price;
    const mentorTypeMatch = mentorType ? product.mentorType === mentorType : true;
    return categoryMatch && priceMatch && mentorTypeMatch;
  };

  const filteredProducts = products.filter(filterProducts);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);  // Menampilkan modal pembayaran
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false); // Menutup modal pembayaran
    if (selectedProduct) {
      navigate(`/produkdetail/${selectedProduct.id}`);  // Navigasi ke halaman detail produk
    }
  };

  return (
    <>
      <Navbar />
      <div className="produk-container">
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
              max="200000"
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

        <div className="produk-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="produk-item" onClick={() => handleProductClick(product)}>
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

      {showPaymentModal && (
        <div className="payment-modal">
          <div className="modal-content">
            <h3>Silakan Melakukan Pembayaran</h3>
            <div className="qr-placeholder">
              {/* Placeholder untuk QR Code */}
              {/* <p>QR Code Pembayaran</p> */}
              <img src={qris} alt="" />
            </div>
            <button onClick={handlePaymentSuccess}>Sudah Bayar</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Produk;
