import React, { useState } from 'react';

const AddPostPage = ({ onAddPost }) => {
  const [formData, setFormData] = useState({
    profile: '',
    desc: '',
    exp: '',
    techs: []
  });

  const techOptions = [
  'React', 'Node.js', 'Java', 'Spring Boot', 'MongoDB', 'MySQL',
  'JavaScript', 'TypeScript', 'Python', 'Angular', 'Vue.js', 'Express.js',
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'Redux',
  'HTML', 'CSS', 'Next.js', 'Tailwind CSS', 'Django', 'Flask',
  'PostgreSQL', 'Firebase', 'SQLite', 'Jenkins', 'GitHub Actions',
  'CI/CD', 'Terraform', 'Ansible', 'Google Cloud (GCP)', 'Netlify',
  'Vercel', 'Zustand', 'MobX', 'React Query', 'Apollo Client',
  'Jest', 'Mocha', 'Cypress', 'Selenium', 'Playwright',
  'GraphQL', 'REST API', 'WebSockets', 'Socket.IO',
  'Material UI', 'Bootstrap', 'Chakra UI', 'Go', 'PHP', 'Ruby on Rails'
];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTechChange = (tech) => {
    setFormData(prev => ({
      ...prev,
      techs: prev.techs.includes(tech)
        ? prev.techs.filter(t => t !== tech)
        : [...prev.techs, tech]
    }));
  };

  const handleSubmit = () => {
    if (formData.profile && formData.desc && formData.exp) {
      onAddPost(formData);
      setFormData({ profile: '', desc: '', exp: '', techs: [] });
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        Post a New Job Opportunity
      </h2>
      
      <div className="form-container">
        <div>
          <div className="form-group">
            <label className="form-label">Profile *</label>
            <input
              type="text"
              name="profile"
              className="form-input"
              placeholder="e.g., Frontend Developer, Java Developer"
              value={formData.profile}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea
              name="desc"
              className="form-textarea"
              placeholder="Describe the role, responsibilities, and requirements..."
              value={formData.desc}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Experience (Years) *</label>
            <input
              type="number"
              name="exp"
              className="form-input"
              placeholder="0"
              min="0"
              max="50"
              value={formData.exp}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Tech Stack</label>
            <div className="tech-stack">
              {techOptions.map(tech => (
                <div key={tech} className="tech-checkbox">
                  <input
                    type="checkbox"
                    id={tech}
                    checked={formData.techs.includes(tech)}
                    onChange={() => handleTechChange(tech)}
                  />
                  <label htmlFor={tech}>{tech}</label>
                </div>
              ))}
            </div>
          </div>

          <button onClick={handleSubmit} className="submit-btn">
            Submit Job Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostPage;