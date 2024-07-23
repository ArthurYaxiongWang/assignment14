import styled from "styled-components";
import { HeroProps } from "./Hero.types";

const StyledHero = styled.div<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: ${({ disabled }) => (disabled ? "#999" : "white")};
  padding: 2rem;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const HeroSubtitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

function Hero({ title, subtitle, disabled }: HeroProps) {
  return (
    <StyledHero disabled={disabled}>
      <HeroTitle>{title}</HeroTitle>
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
    </StyledHero>
  );
}

export default Hero;
