import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>Created a personal portfolio website using React, showcasing my work and projects.</p>
          <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>E-commerce Store</h3>
          <p>Developed an e-commerce website with a shopping cart, product listings, and checkout process using React and Redux.</p>
          <a href="https://myecommerce.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>Task Management App</h3>
          <p>Built a task management application using Node.js, Express, and MongoDB for managing daily tasks and projects.</p>
          <a href="https://mytaskapp.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
