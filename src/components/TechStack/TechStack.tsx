import React from 'react';
import styled from 'styled-components';

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
`;

const TechStack: React.FC = () => {
  return (
    <TechStackContainer>
      <TechStackTitle>Tech Stack</TechStackTitle>
      <TechStackGrid>
        <TechStackItem>Logo 1</TechStackItem>
        <TechStackItem>Logo 2</TechStackItem>
        <TechStackItem>Logo 3</TechStackItem>
        <TechStackItem>Logo 4</TechStackItem>
        <TechStackItem>Logo 5</TechStackItem>
        <TechStackItem>Logo 6</TechStackItem>
        <TechStackItem>Logo 7</TechStackItem>
        <TechStackItem>Logo 8</TechStackItem>
        <TechStackItem>Logo 9</TechStackItem>
      </TechStackGrid>
    </TechStackContainer>
  );
};

export default TechStack;
