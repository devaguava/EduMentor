import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import { partnersSection, partnersList } from "../data/PartnersSection";
import { contactSection } from "../data/ContactSection";

import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

import parse from "html-react-parser";
import "../styles/Home.css";
import "../styles/Courses.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home */}
        <section id="home">
        <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
          
        </section>

        {/* online course */}
        <section id="courses">
          <div className="kolom">{parse(courseSection.content1)}</div>
          <img src={courseSection.image} />
          <div className="kolom">{parse(courseSection.content2)}</div>
        </section>

        {/* tutor */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>

        {/* partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnersSection.content)}</div>
            <Partners partnersList={partnersList} />
          </div>
        </section>
      </div>
      {/* <Contact contactSection={contactSection} /> */}
      <Footer />
    </>
  );
}

export default Home;
