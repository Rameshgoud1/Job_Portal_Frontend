import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AddPostPage from './pages/AddPostPage';
import JobsPage from './pages/JobsPage';
import './styles/App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [jobPosts, setJobPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const API_BASE_URL = 'http://localhost:8080';

  // Fetch all job posts
  const fetchAllPosts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/allPosts`);
      if (!response.ok) throw new Error('Failed to fetch job posts');
      const data = await response.json();
      setJobPosts(data);
      setCurrentPage('allPosts');
    } catch (err) {
      setError('Failed to fetch job posts. Please try again.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Search job posts
  const searchJobs = async (keyword) => {
    if (!keyword.trim()) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/SearchPost/${encodeURIComponent(keyword)}`);
      if (!response.ok) throw new Error('Failed to search job posts');
      const data = await response.json();
      setSearchResults(data);
      setCurrentPage('searchresults');
    } catch (err) {
      setError('Failed to search job posts. Please try again.');
      console.error('Error searching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add new job post
  const addJobPost = async (postData) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/addPost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) throw new Error('Failed to add job post');
      alert('Job post added successfully!');
      setCurrentPage('home');
    } catch (err) {
      setError('Failed to add job post. Please try again.');
      console.error('Error adding post:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onViewAllPosts={fetchAllPosts}
            onSearchJobs={() => setCurrentPage('search')}
          />
        );
      case 'search':
        return <SearchPage onSearch={searchJobs} />;
      case 'addpost':
        return <AddPostPage onAddPost={addJobPost} />;
      case 'allPosts':
        return <JobsPage title="All Job Posts" jobs={jobPosts} />;
      case 'searchresults':
        return <JobsPage title="Search Results" jobs={searchResults} />;
      default:
        return (
          <HomePage 
            onViewAllPosts={fetchAllPosts}
            onSearchJobs={() => setCurrentPage('search')}
          />
        );
    }
  };

  return (
    <div className="app">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="main-content">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {renderCurrentPage()}
      </main>
    </div>
  );
};

export default App;
