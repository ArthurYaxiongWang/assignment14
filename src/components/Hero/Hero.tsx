import React from 'react';

const Hero: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className="hero">
      <div className="photo"></div>
      <div className="bio">
        <h2>{title}</h2>
        <p>Your bio and introduction go here.</p>
      </div>
    </section>
  );
};

export default Hero;
