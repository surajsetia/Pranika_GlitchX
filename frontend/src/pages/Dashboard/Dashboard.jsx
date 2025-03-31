import { Link } from "react-router-dom";

// function Dashboard() {
//   return (
//     <>
//       <h1>Dashboard</h1>
//       <Link to="/">
//         <button>Landing Page</button>
//       </Link>
//       <Link to="/prepregnancy-support">
//         <button>Pre-Pregnancy Support</button>
//       </Link>
//       <Link to="/pregnancy-support">
//         <button>Pregnancy Support</button>
//       </Link>
//       <Link to="/postpregnancy-support">
//         <button>Post-Pregnancy Support</button>
//       </Link>
//       <Link to="/elderly-support">
//         <button>Elderly Support</button>
//       </Link>
      
//     </>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in first!');
      navigate('/login');
      return;
    }
    
    const fetchData = async () => {
      try {
        // Simulating API Call with Dummy Data
        const userData = {
          name: "Shreya Sharma",
          email: "shreya@example.com",
          role: "parent",
          age: 25,
          gender: "Female",
          pregnancyStatus: {
            trimester: "2nd Trimester",
            dueDate: "July 20, 2025"
          },
          conditions: ["Gestational Diabetes", "Anemia"],
          emergencyContact: "Mother - 9876543210",
          doctor: {
            name: "Dr. Meera Kapoor",
            contact: "1234567890"
          },
          appointments: [
            { date: "April 5, 2025", time: "10:00 AM", purpose: "Ultrasound Scan" },
            { date: "April 20, 2025", time: "3:00 PM", purpose: "Prenatal Checkup" }
          ],
          tips: [
            "Stay hydrated and drink plenty of water.",
            "Take regular prenatal vitamins.",
            "Get at least 8 hours of sleep."
          ]
        };
        setUser(userData);
      } catch (error) {
        alert(error.response?.data?.error || 'Error fetching user data');
        navigate('/login');
      }
    };

    fetchData();
  }, [navigate]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome, {user.name} !</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Age:</strong> {user.age} years</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        
        <h2>Pregnancy Details</h2>
        <p><strong>Trimester:</strong> {user.pregnancyStatus.trimester}</p>
        <p><strong>Due Date:</strong> {user.pregnancyStatus.dueDate}</p>
        
        <h2>Health Conditions</h2>
        {user.conditions.length > 0 ? (
          <ul>
            {user.conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        ) : (
          <p>No conditions reported</p>
        )}

        <h2>Emergency Contact</h2>
        <p>{user.emergencyContact}</p>

        <h2>Doctor's Contact</h2>
        <p><strong>Doctor Name:</strong> {user.doctor.name}</p>
        <p><strong>Contact:</strong> {user.doctor.contact}</p>

        <h2>Upcoming Appointments</h2>
        {user.appointments.length > 0 ? (
          <ul>
            {user.appointments.map((appointment, index) => (
              <li key={index}>
                <strong>{appointment.date}</strong> at {appointment.time} - {appointment.purpose}
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming appointments</p>
        )}

        <h2>Health Tips</h2>
        <ul>
          {user.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        <button onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}>Logout</button>
      </div>

      <Link to="/prepregnancy-support">
         <button>Pre-Pregnancy Support</button>
       </Link>
       <Link to="/pregnancy-support">
         <button>Pregnancy Support</button>
       </Link>
       <Link to="/postpregnancy-support">
         <button>Post-Pregnancy Support</button>
       </Link>
       <Link to="/elderly-support">
         <button>Elderly Support</button>
      </Link>
    </div>
  );
};

export default Dashboard;
