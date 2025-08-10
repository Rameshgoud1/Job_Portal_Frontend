import React from 'react';
import JobCard from '../components/JobCard';

const JobsPage = ({ title, jobs }) => (
  
  <div>
   
    <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
      {title}
    </h2>
    
    
    {jobs.length === 0 ? (
      <div className="no-results">
        <p>No job posts found.</p>
      </div>
    ) : (
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    )}
  </div>
   
);

export default JobsPage;