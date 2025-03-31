import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "../../components/PostPreg/Hero";
import CardGrid from "../../components/PostPreg/CardGrid";
import TeenSection from "../../components/PostPreg/TeenSection";
import Emergency from "../../components/PostPreg/Emergency";
import Community from "../../components/PostPreg/Community";
import Testimonials from "../../components/PostPreg/Testimonials";
import Footer from "../../components/PostPreg/Footer";

function PostPreg() {
  const [topStory, setTopStory] = useState("");

  return (
      <>
        <Hero />
          <main className="container">
          <h2 id="physical" className="section-title">
            Post-Pregnancy Recovery
          </h2>
          <CardGrid />
          <TeenSection />
          <Emergency />
          {/* Flashing Real Mom Stories Section */}
          <Testimonials topStory={topStory} />
          </main>
          <Footer />
      </>
    
   
  );
}

export default PostPreg;
