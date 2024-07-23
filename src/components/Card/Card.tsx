import styled from "styled-components";
import { ReactNode } from "react";

interface CardProps {
  label?: ReactNode;
}

const StyledCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    padding: 1.5rem;
    max-width: 80%;
  }

  @media (min-width: 900px) {
    padding: 2rem;
    max-width: 60%;
  }

  @media (min-width: 1200px) {
    max-width: 50%;
  }
`;

function Card({ label = "Card" }: CardProps) {
  return <StyledCard>{label}</StyledCard>;
}

export default Card;
