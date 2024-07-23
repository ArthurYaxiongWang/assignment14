import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.input.attrs({ type: 'radio' })<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px; 
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

function RadioButton({ disabled = false, name, value, backgroundColorDisabled }: RadioButtonProps) {
  return (
    <StyledRadioButton disabled={disabled} name={name} value={value} backgroundColorDisabled={backgroundColorDisabled} />
  );
}

export default RadioButton;
