import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage1 from "./personal/landing1.jsx";

import LandingPage from "./personal/landing.jsx";
import Dashboard from "./personal/Dashboard.jsx";
import Home from "./personal/home.jsx";
import AboutUs from "./personal/aboutus.jsx";
import SignUpForm from "./personal/form.jsx";
import LoginForm from "./personal/login.jsx";
import Tasks from "./personal/Tasks2.jsx";

// ProtectedRoute component to guard routes that require authentication
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/landing" element={<LandingPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/tasks" 
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          } 
        />
        
      </Routes>
    </Router>
  );
}

export default App;