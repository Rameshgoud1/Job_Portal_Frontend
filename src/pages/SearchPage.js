import React, { useState } from 'react';

const SearchPage = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        Search Job Opportunities
      </h2>
      
      <div className="search-container">
        <div className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Search by tech/profile/desc"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSubmit} className="search-btn">
            Search
          </button>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', color: '#666' }}>
        <p>Enter keywords like "React", "Java Developer", "Frontend", etc.</p>
      </div>
    </div>
  );
};

export default SearchPage;