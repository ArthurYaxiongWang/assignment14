import React from 'react';
import styled from 'styled-components';

import bootstrap from '../../assets/images/tech_logos/bootstrap.png';
import css from '../../assets/images/tech_logos/css.png';
import github from '../../assets/images/tech_logos/github.png';
import html from '../../assets/images/tech_logos/html.png';
import java from '../../assets/images/tech_logos/java.png';
import js from '../../assets/images/tech_logos/js.png';
import node from '../../assets/images/tech_logos/node.png';
import python from '../../assets/images/tech_logos/python.png';
import sass from '../../assets/images/tech_logos/sass.png';

const TechStackContainer = styled.section`
  padding: 2rem;
  text-align: center;
`;

const TechStackTitle = styled.h2`
  margin-bottom: 1rem;
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

const TechStackItem = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechStackImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
`;

const TechStack: React.FC = () => {
  return (
    <TechStackContainer>
      <TechStackTitle>Tech Stack</TechStackTitle>
      <TechStackGrid>
        <TechStackItem>
          <TechStackImage src={bootstrap} alt="Bootstrap" />
          Bootstrap
        </TechStackItem>
        <TechStackItem>
          <TechStackImage src={css} alt="CSS" />
          CSS
        </TechStackItem>
        <TechStackItem>
          <TechStackImage src={github} alt="GitHub" />
          GitHub
        </TechStackItem>
        <TechStackItem>
          <TechStackImage src={html} alt="HTML" />
          HTML
        </TechStackItem>
        <TechStackItem>
          <TechStackImage src={java} alt="Java" />
          Java
        </TechStackItem>
        <TechStackItem>
          <TechStackImage src={js} alt="JavaScript" />
          JavaScript
        </TechStackItem>
        <TechStackItem>
          <TechStackImage src={node} alt="Node.js" />
          Node.js
        </TechStackItem>
        <TechStackItem>
          <TechStackImage src={python} alt="Python" />
          Python
        </TechStackItem>
        <TechStackItem>
          <TechStackImage src={sass} alt="Sass" />
          Sass
        </TechStackItem>
      </TechStackGrid>
    </TechStackContainer>
  );
};

export default TechStack;
