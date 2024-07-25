import React from 'react';

const projects = [
  {
    title: 'PHP E-commerce Project',
    description: 'A comprehensive e-commerce platform built using PHP. This project includes features like product listings, shopping cart, user authentication, and a secure checkout process.',
    thumbnailUrl: '/src/assets/images/project1.png', 
    projectUrl: 'https://yaxiongwang.com', 
  },
  {
    title: 'Ruby On Rails E-commerce Project',
    description: 'An advanced e-commerce application developed using Ruby on Rails. This project offers functionalities such as product management, order processing, and payment integration.',
    thumbnailUrl: '/src/assets/images/project2.png', 
    projectUrl: 'https://ecommerce-project.fly.dev/', 
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <div className="thumbnail">
                <img src={project.thumbnailUrl} alt={`${project.title} Thumbnail`} />
              </div>
            </a>
            <div className="description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
