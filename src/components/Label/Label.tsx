import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;

  @media (min-width: 600px) {
    font-size: 1.2rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

function Label({ text }: LabelProps) {
  return <StyledLabel>{text}</StyledLabel>;
}

export default Label;
