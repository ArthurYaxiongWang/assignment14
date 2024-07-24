import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Software Engineer at XYZ Company</h3>
          <p>June 2021 - Present</p>
          <p>Worked on developing and maintaining web applications using React, Node.js, and MongoDB.</p>
        </div>
        <div className="experience-item">
          <h3>Front-End Developer at ABC Corporation</h3>
          <p>January 2019 - May 2021</p>
          <p>Created responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.</p>
        </div>
        <div className="experience-item">
          <h3>Intern at DEF Inc.</h3>
          <p>June 2018 - December 2018</p>
          <p>Assisted in developing internal tools and features for the company's main product.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
