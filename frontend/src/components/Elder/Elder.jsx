import React from 'react';
import './Elder.css'; // CSS file (code provided below)
import { Handshake, Heart, MessageSquare } from 'lucide-react';
import Old from '../../assets/old.jpg'; // Replace with your image

const ElderlySupport = () => {
  return (
    <section className="elderly-section">
      {/* Background image with overlay */}
      <div className="elderly-bg-image">
        <div className="overlay"></div>
      </div>

      <div className="elderly-content">
        <h2>
          <span>Bridging Generations</span> Through Shared Wisdom
        </h2>
        <p className="elderly-description">
          Connect with local senior communities to exchange parenting experiences, 
          emotional support, and life lessons. Together, we build stronger families.
        </p>

        <div className="elderly-features">
          <div className="feature">
            <div className="feature-icon">
              <Handshake size={28} />
            </div>
            <p>Partnered with 50+ elder care homes</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <Heart size={28} />
            </div>
            <p>Emotional support circles</p>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <MessageSquare size={28} />
            </div>
            <p>Guided intergenerational dialogues</p>
          </div>
        </div>

        <button className="elderly-cta">
          Join Our Community Program
        </button>
      </div>
    </section>
  );
};

export default ElderlySupport;