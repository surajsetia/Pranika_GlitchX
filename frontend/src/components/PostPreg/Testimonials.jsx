import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/global.css";

const defaultTestimonials = [
  {
    shortText: "After my C-section, I felt so lost. The recovery guides here gave me confidence.",
    fullText: "After my emergency C-section, I felt completely unprepared. The day-by-day recovery guides on this site gave me the clarity I needed. I learned how to care for my stitches, when to call the doctor, and even gentle exercises to regain strength. Six months later, I'm back to running!",
    author: "Danielle, 28",
    upvotes: 142,
  },
  {
    shortText: "As a teen mom, the school resources saved my education.",
    fullText: "I got pregnant at 16 and was terrified I'd have to drop out. This platform connected me with a counselor who helped me navigate Title IX rights. I graduated on time with my class, and my daughter was there cheering me on at graduation.",
    author: "Jamila, 19",
    upvotes: 89,
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const navigate = useNavigate();

  useEffect(() => {
    const updateTestimonials = () => {
      const storedStory = JSON.parse(localStorage.getItem("topStory"));

      if (storedStory && storedStory.likes > 0) {
        const newTestimonial = {
          shortText: storedStory.text,
          fullText: storedStory.text,
          author: "Community Member",
          upvotes: storedStory.likes,
        };

        setTestimonials([newTestimonial, ...defaultTestimonials]);
      }
    };

    updateTestimonials();
    const interval = setInterval(updateTestimonials, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Real Mom Stories</h2>

        <div className="testimonial-card">
          <p>"{testimonials[0].shortText}"</p>
          <p className="author">— {testimonials[0].author}</p>
        </div>

        <button 
          className="btn btn-primary share-story-btn"
          onClick={() => navigate("/community")}
        >
          Share Your Story
        </button>
      </div>
    </section>
  );
}
