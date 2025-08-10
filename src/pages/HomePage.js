import React from 'react';

const HomePage = ({ onViewAllPosts, onSearchJobs }) => (
  <div className="home-container">
    <h2 className="home-title">Find Your Perfect Match</h2>
    <p className="home-subtitle">
      Connect talented professionals with exciting opportunities. 
      Whether you're looking for your next role or searching for the perfect candidate, 
      we've got you covered.
    </p>
    
    <div className="home-buttons">
      <button className="home-btn primary" onClick={onViewAllPosts}>
        View All Posts
      </button>
      <button className="home-btn secondary" onClick={onSearchJobs}>
        Search Jobs
      </button>
    </div>
    
    <div className="features">
      <div className="feature-card">
        <div className="feature-icon">🔍</div>
        <h3>Smart Search</h3>
        <p>Find jobs using keywords related to technology, profile, or job description. Our intelligent search helps you discover the perfect opportunities.</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">💼</div>
        <h3>For Professionals</h3>
        <p>Whether you're a fresher starting your career or an experienced professional looking for new challenges, find opportunities that match your skills.</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">🚀</div>
        <h3>Easy Posting</h3>
        <p>Employers can easily post job opportunities with detailed requirements, experience levels, and technology stack preferences.</p>
      </div>
    </div>
  </div>
);

export default HomePage;