// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    axios
      .post('http://localhost:5000/api/data/login-admin', formData)
      .then(() => {
        setIsLoggedIn(true);
        navigate('/dashboard');
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Login gagal');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{backgroundColor: '#27548a' }}>
      {/* Main Container */}
      <div className="flex flex-col items-center gap-8">
        {/* Title - KREDITMATCH */}
        <div className="bg-[#f3f3df] px-16 py-6 rounded-2xl shadow-[8px_8px_0_0_black] border-4 border-black transform hover:scale-105 transition-transform duration-200">
          <h1 className="text-5xl font-black text-black tracking-wider" style={{ fontFamily: "'Roboto Slab', serif" }}>
            KREDITMATCH
          </h1>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex">
            {/* Left Side - Illustration */}
            <div className="w-1/2 bg-gray-50 p-12 flex items-center justify-center">
              <div className="text-center">
                {/* Credit/Finance Illustration */}
                <div className="w-72 h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden">
                  {/* Person Icon */}
                  <div className="absolute top-8 left-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Credit Cards/Documents */}
                  <div className="absolute top-12 right-8 space-y-2">
                    <div className="w-20 h-12 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center">
                      <div className="w-12 h-2 bg-blue-300 rounded"></div>
                    </div>
                    <div className="w-20 h-12 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center">
                      <div className="w-12 h-2 bg-green-300 rounded"></div>
                    </div>
                  </div>

                  {/* Data/Stats Lines */}
                  <div className="absolute bottom-16 left-8 right-8 space-y-3">
                    <div className="h-3 bg-blue-200 rounded-full w-full"></div>
                    <div className="h-3 bg-blue-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-blue-200 rounded-full w-1/2"></div>
                  </div>

                  {/* Security/Check Icon */}
                  <div className="absolute bottom-6 right-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* Gear/Settings */}
                  <div className="absolute top-20 left-20 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-20 h-20 border border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-2">Welcome!</h2>
                <p className="text-blue-100 mb-8">Sign in to your account</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 border border-red-300 rounded-full py-2 px-4">
                      <p className="text-red-100 text-sm text-center">{error}</p>
                    </div>
                  )}

                  <div>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Username"
                      className="w-full rounded-full py-4 px-6 text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all duration-200 shadow-lg"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full rounded-full py-4 px-6 text-blue-700 placeholder-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all duration-200 shadow-lg"
                      required
                    />
                  </div>

                  {/* Password Strength Indicator */}
                  <div className="flex space-x-1 mb-6">
                    <div className="h-1 bg-yellow-400 rounded-full flex-1"></div>
                    <div className="h-1 bg-orange-400 rounded-full flex-1"></div>
                    <div className="h-1 bg-blue-300 rounded-full flex-1"></div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-white text-blue-600 rounded-full py-4 px-6 font-semibold hover:bg-white-50 transition-all duration-200 shadow-lg transform hover:scale-105 active:scale-95"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;