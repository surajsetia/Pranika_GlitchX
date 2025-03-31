export default function CardGrid() {
    const cards = [
      {
        icon: "💪",
        title: "Physical Health",
        items: [
          "C-section recovery timeline",
          "Pelvic floor exercises",
          "Nutrition for healing",
          "When to see a doctor",
        ],
      },
      {
        icon: "🧠",
        title: "Mental Wellness",
        items: [
          "Recognizing postpartum depression",
          "Daily self-care routines",
          "Partner support strategies",
          "Therapist directory",
        ],
      },
      {
        icon: "👶",
        title: "Newborn Care",
        items: [
          "Feeding schedules",
          "Sleep survival guide",
          "Developmental milestones",
          "When to call pediatrician",
        ],
      },
    ];
  
    return (
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <ul>
              {card.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }