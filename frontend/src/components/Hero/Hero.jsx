import React from 'react';
import './Hero.css'; // Create this CSS file (styles provided below)
import { Calendar, HeartPulse, Baby, Stethoscope, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  const phases = [
    {
      title: "Pre-Pregnancy",
      icon: <HeartPulse size={32} />,
      services: ["Fertility planning", "Health assessments", "Nutrition guidance"],
      color: "#FF9E9E"
    },
    {
      title: "During Pregnancy",
      icon: <Baby size={32} />,
      services: ["Trimester-wise tracking", "C-section probability tool", "24/7 expert support"],
      color: "#86C6FF"
    },
    {
      title: "Postpartum",
      icon: <Users size={32} />,
      services: ["Recovery plans", "Mental health support", "Newborn care guides"],
      color: "#A0E7A0"
    }
  ];

  const services = [
    { icon: <Stethoscope size={24} />, name: "Medical Consultations" },
    { icon: <BookOpen size={24} />, name: "Personalized Plans" },
    { icon: <Calendar size={24} />, name: "Progress Tracking" }
  ];

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Your <span>Pregnancy Phases</span> Decoded</h1>
        <p className="subtitle">Expert-guided support for every step of your journey</p>
        
        <div className="phases-grid">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="phase-card"
              style={{ borderTop: `4px solid ${phase.color}` }}
            >
              <div className="phase-icon" style={{ color: phase.color }}>
                {phase.icon}
                <h3>{phase.title}</h3>
              </div>
              <ul className="services-list">
                {phase.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="global-services">
          <h3>Our Comprehensive Services</h3>
          <div className="service-badges">
            {services.map((service, index) => (
              <div key={index} className="service-badge">
                <span className="service-icon">{service.icon}</span>
                {service.name}
              </div>
            ))}
          </div>
        </div>

        <button className="cta-button">Start Your Journey Today</button>
      </div>
    </section>
  );
};

export default Hero;