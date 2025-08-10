import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => (
  <nav className="nav">
    <div className="nav-container">
      <button 
        className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
        onClick={() => setCurrentPage('home')}
      >
        Home
      </button>
      <button 
        className={`nav-btn ${currentPage === 'search' ? 'active' : ''}`}
        onClick={() => setCurrentPage('search')}
      >
        Search Jobs
      </button>
      <button 
        className={`nav-btn ${currentPage === 'addpost' ? 'active' : ''}`}
        onClick={() => setCurrentPage('addpost')}
      >
        Post a Job
      </button>
    </div>
  </nav>
);

export default Navigation;