import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Family from "../../assets/Family.png";
import FAQ from "../../components/FAQ/FAQ"
import Elder from "../../components/Elder/Elder"
import Hero from "../../components/Hero/Hero"
import "./Landing.css"; // Ensure this file exists

function Landing() {
  return (
    <>
      <Navbar />
      <div className="companion-container">
        {/* Left side: Headings and subheadings */}
        <div className="text-content">
          <h1>Your Pregnancy Companion</h1>
          <p className="tagline">Empowering Your Journey, One Step at a Time</p>
          <p>From prenatal care to postpartum support, we’re here for you.</p>
          <button className="cta-button">Login Now</button>
        </div>

        {/* Right side: Image */}
        <div className="image-content">
          <img 
            src={Family} 
            alt="Happy pregnant woman holding her belly"
            className="companion-image"
          />
        </div>
      </div>
      <Hero/>
      <Elder/>
      <FAQ/>
      <Footer />
    </>
  );
}

export default Landing;