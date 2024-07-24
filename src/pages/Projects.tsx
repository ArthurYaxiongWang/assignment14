import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <div className="thumbnail"></div>
        <div className="description">
          <h3>Project Title</h3>
          <p>Project Description</p>
        </div>
      </div>
      {/* Add more projects here */}
    </section>
  );
};

export default Projects;
