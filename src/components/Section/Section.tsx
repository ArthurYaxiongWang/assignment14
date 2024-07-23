import styled from "styled-components";
import { SectionProps } from "./Section.types";

const StyledSection = styled.section<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "#ffffff")};
  color: ${({ disabled }) => (disabled ? "#999" : "#000")};
  padding: 1rem;
  border: ${({ disabled }) => (disabled ? "1px solid #ccc" : "1px solid #000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`;

function Section({ children, disabled }: SectionProps) {
  return <StyledSection disabled={disabled}>{children}</StyledSection>;
}

export default Section;
