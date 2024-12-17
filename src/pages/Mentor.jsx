import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Mentor.css'; 
import tutorAnisa from '../assets/TutorAnisa.png';
import tutorJennie from '../assets/tutorJennie.png';
import tutorAdi from '../assets/tutorAdi.png';
import tutorCarissa from '../assets/tutorCarissa.png';
import tutorDavid from '../assets/tutorDavid.jpg';
import tutorAndi from '../assets/tutorAndi.jpg';
import { Link } from "react-router-dom";

export const mentors = [
    {
        id: 1,
        mentorType: "Dosen",
        mentorName: "Anisa Rahma Sari, S.T., M.T.",
        rating: 4.8,
        numParticipants: 100,
        imageUrl: tutorAnisa,
      },
      {
        id: 2,
        mentorType: "Mahasiswa",
        mentorName: "Adi Sanjaya, S.Kom.",
        rating: 4.5,
        numParticipants: 50,
        imageUrl: tutorAdi,
      },
      {
        id: 3,
        mentorType: "Dosen",
        mentorName: "Jennie Jang, S.T., M.T.",
        rating: 4.7,
        numParticipants: 120,
        imageUrl: tutorJennie,
      },
      {
        id: 4,
        mentorType: "Mahasiswa",
        mentorName: "Carissa James, S.Kom.",
        rating: 4.6,
        numParticipants: 80,
        imageUrl: tutorCarissa,
      },
      {
        id: 5,
        mentorType: "Dosen",
        mentorName: "David, M.Sc.",
        rating: 4.9,
        numParticipants: 200,
        imageUrl: tutorDavid,
      },
      {
        id: 6,
        mentorType: "Mahasiswa",
        mentorName: "Andi Setiawan, M.T.",
        rating: 4.8,
        numParticipants: 150,
        imageUrl: tutorAndi,
      },
];

const Mentor = () => {
  // State untuk filter
  const [mentorType, setMentorType] = useState("");

  // Fungsi untuk menyaring mentor berdasarkan filter
  const filterMentors = (mentor) => {
    const mentorTypeMatch = mentorType ? mentor.mentorType === mentorType : true;
    return mentorTypeMatch;
  };

  // Mentor yang disaring berdasarkan filter
  const filteredMentors = mentors.filter(filterMentors);

  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="produk-container">
          {/* Sidebar untuk kategori, harga, dan jenis mentor */}
          <div className="sidebar">
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

          {/* Daftar mentor */}
          <div className="produk-list">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="produk-item">
                {/* Gunakan Link dengan id sebagai bagian dari URL */}
                <Link to={`/mentor/${mentor.id}`} state={{ mentor }}>
                  <img src={mentor.imageUrl} alt={mentor.mentorName} />
                  <div className="info">
                    <p className="mentor"><i className="fas fa-user"></i> {mentor.mentorName} ({mentor.mentorType})</p>
                    <div className="rating">
                      <span>★ {mentor.rating}</span>
                      <span>({mentor.numParticipants}+ peserta)</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Mentor;
