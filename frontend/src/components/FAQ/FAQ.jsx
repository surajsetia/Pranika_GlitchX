import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "../FAQ/faq.css";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsData = [
    {
      question: "How does your C-section probability detection work?",
      answer: "Our tool analyzes medical history, pregnancy progress, and risk factors using AI to estimate the likelihood of a C-section vs. normal delivery, helping reduce unnecessary procedures."
    },
    {
      question: "What support do you offer for pre-pregnancy planning?",
      answer: "We provide nutrition guides, fertility tracking, mental health resources, and expert consultations to prepare your body and mind for a healthy pregnancy."
    },
    {
      question: "Do you offer personalized care during pregnancy?",
      answer: "Yes! Get tailored advice for each trimester, including exercise plans, symptom management, and 24/7 access to a support community."
    },
    {
      question: "Can you help with postpartum recovery?",
      answer: "Absolutely. Our platform offers postpartum care plans, mental health support, breastfeeding tips, and pelvic floor therapy resources."
    },
    {
      question: "Is this service suitable for elderly pregnancy support?",
      answer: "Yes, we specialize in guidance for advanced maternal age pregnancies, including risk assessments and specialized care plans."
    },
    {
      question: "How accurate is your C-section prediction tool?",
      answer: "While not a substitute for medical advice, our tool uses clinically validated data to provide an 85%+ accuracy rate based on current research."
    },
    {
      question: "Do you connect users with healthcare providers?",
      answer: "We partner with OB-GYNs, midwives, and specialists for referrals and second opinions when needed."
    }
  ];

  return (
    <div className="faq">
      <div className="faq-head">
        Your <span>Pregnancy Support</span> Questions
      </div>
      <div className="faqs">
        {faqsData.map((faq, index) => (
          <div 
            className={`faq-item ${openIndex === index ? "active" : ""}`} 
            key={index} 
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;