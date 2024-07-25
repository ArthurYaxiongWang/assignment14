import React from 'react';

interface HeroProps {
  title: string;
  photoUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, photoUrl }) => {
  return (
    <section className="hero">
      <div className="photo">
        <img src={photoUrl} alt="Profile" />
      </div>
      <div className="bio">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default Hero;
