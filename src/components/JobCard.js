import React from 'react';

const JobCard = ({ job }) => (
  <div className="job-card">
    <h3 className="job-profile">{job.profile}</h3>
    <p className="job-description">{job.desc}</p>
    <div className="job-experience">
      Experience: {job.exp} year{job.exp !== 1 ? 's' : ''}
    </div>
    {job.techs && job.techs.length > 0 && (
      <div className="job-tech">
        <h4>Skills:</h4>
        {job.techs.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default JobCard;