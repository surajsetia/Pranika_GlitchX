import React, { useState } from 'react';
import { registerUser } from '../../api/api';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'parent'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      alert(error.error || 'Registration failed!');
    }
  };

  return (
    <div className="signupContainer">
      <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          placeholder="Full Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="parent">Parent</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
    </div>
  );
};

export default Signup;
