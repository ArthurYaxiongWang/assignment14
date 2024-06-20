import { MyButtonProps } from "./MyButton.types";
import styled from "styled-components";

const StyledButton = styled.button<{ disabled: boolean }>`
  /* Add your styles here */
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: ${(props) => (props.disabled ? "#999" : "white")};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export function sum(a: number, b: number) {
  return a + b;
}

const MyButton = ({ disabled = false, label = "button" }: MyButtonProps) => {
  return <StyledButton disabled={disabled}>{label}</StyledButton>;
};

export default MyButton;
