import React, { useState } from 'react';
import { loginUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.error || 'Login failed!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p>Login to continue</p>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span></p>
      </div>
    </div>
  );
};

export default Login;
