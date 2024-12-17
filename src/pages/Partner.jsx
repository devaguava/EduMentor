import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { partnersSection, partnersList } from "../data/PartnersSection";

import Partners from "../components/Partners";

import parse from "html-react-parser";
import "../styles/Home.css";
import "../styles/Courses.css";

function Partner() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
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

export default Partner;
