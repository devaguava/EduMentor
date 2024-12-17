import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { mentors } from "./Mentor"; // Mengimpor data mentor dari mentor.jsx

const MentorDetail = () => {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const mentor = mentors.find((mentor) => mentor.id === parseInt(id)); // Mencari mentor berdasarkan ID

  if (!mentor) {
    return <p>Mentor tidak ditemukan!</p>;
  }

  return (
    <>
    <Navbar />
    <div className="mentor-detail-container">
      <div className="mentor-detail-header">
        <img src={mentor.imageUrl} alt={mentor.mentorName} className="mentor-image" />
        <div className="mentor-info">
          <h1 className="mentor-name">{mentor.mentorName}</h1>
          <p className="mentor-type">{mentor.mentorType}</p>
          <p className="mentor-rating">Rating: {mentor.rating} ★ ({mentor.numParticipants}+ peserta)</p>
        </div>
      </div>
      <div className="mentor-bio">
        <h3>Bio</h3>
        <p>{mentor.bio}</p>
      </div>
      <div className="mentor-experience">
        <h3>Pengalaman</h3>
        <p>{mentor.experience}</p>
      </div>
      <div className="mentor-teaching-method">
        <h3>Metode Pengajaran</h3>
        <p>{mentor.teachingMethod}</p>
      </div>

      <div className="mentor-products">
        <h3>Produk yang Ditawarkan</h3>
        <ul>
          {mentor.products.map((product) => (
            <li key={product.id} className="product-item">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p><strong>Harga:</strong> {product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MentorDetail;
