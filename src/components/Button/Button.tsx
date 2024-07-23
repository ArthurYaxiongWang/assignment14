import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#999" : "white")};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 100%;
  max-width: 200px;
  min-width: 100px;
  box-sizing: border-box;
  transition: all 0.3s ease;

  @media (min-width: 600px) {
    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
`;

export function sum(a: number, b: number) {
  return a + b;
}

function Button({ disabled = false, label = "button", backgroundColorDisabled }: ButtonProps) {
  return (
    <StyledButton disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {label}
    </StyledButton>
  );
}

export default Button;
