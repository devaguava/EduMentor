import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import '../styles/Profile.css'; 
import johnProfile from '../assets/john.jpg'

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = {
      name: "John Doe",
      bio: "Saya seorang mahasiswa yang berfokus pada pengembangan perangkat lunak.",
      numCoursesCompleted: 7,
      profileImage: johnProfile,
      email: "john.doe@example.com",
      phone: "+62 812-3456-7890",
      address: "Jl. Pahlawan No. 123, Jakarta, Indonesia",
      coursesTaken: [
        { id: 1, title: "Pemrograman Web", completionDate: "2023-10-10" },
        { id: 2, title: "Matematika Diskrit", completionDate: "2023-11-10" },
        { id: 3, title: "Matematika Diskrit II", completionDate: "2023-11-30" },
        { id: 4, title: "Kalkulus", completionDate: "2023-12-12" },
        { id: 5, title: "Kalkulus II", completionDate: "2023-12-31" },
        { id: 6, title: "Machine Learning", completionDate: "2024-01-15" },
        { id: 7, title: "Data Science for Beginners", completionDate: "2024-03-25" },
      ],
      achievements: [
        "Lulus modul Algoritma Pemrograman",
        "Lulus modul Matematika Diskrit",
        "Lulus modul Matematika Diskrit II",
        "Lulus modul Kalkulus",
        "Lulus modul Kalkulus II",
        "Lulus modul Machine Learning",
        "Menjadi Juara 1 dalam Hackathon 2023",
        "Penghargaan Siswa Terbaik di Universitas XYZ"
      ]
    };
    setUser(userData);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user.profileImage}
          alt={user.name}
          className="profile-image"
        />
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p className="profile-bio">{user.bio}</p>
          <div className="profile-rating">
            {/* <span>Rating: {user.rating} ★</span> */}
            <span>★ ({user.numCoursesCompleted} modul selesai)</span>
          </div>
        </div>
      </div>

      {/* Tabs for Courses and Achievements */}
      {/* <div className="profile-tabs">
        <button className="tab-button active">modul yang Diambil</button>
        <button className="tab-button">Prestasi</button>
      </div> */}

      <div className="profile-content">
        {/* Courses Section */}
        <div className="courses-section">
          <h2>Modul yang Diambil</h2>
          <ul>
            {user.coursesTaken.map((course) => (
              <li key={course.id} className="course-item">
                <span className="course-title">{course.title} </span>
                <span className="course-date"> (Selesai: {course.completionDate})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <h2>Prestasi</h2>
          <ul>
            {user.achievements.map((achievement, index) => (
              <li key={index} className="achievement-item">
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="profile-actions">
        <Link to="/edit-profile" className="edit-profile-btn">Edit Profil</Link>
        <button className="change-photo-btn">Ubah Foto Profil</button>
      </div> */}
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
