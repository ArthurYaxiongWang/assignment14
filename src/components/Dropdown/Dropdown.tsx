import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";
import { getBackgroundColor } from "./Dropdown.lib";

const StyledDropdown = styled.select<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => getBackgroundColor(props.disabled, props.backgroundColorDisabled)};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  font-size: 16px;
  padding: 10px;
  border: 1px solid ${(props) => (props.disabled ? "#ccc" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

function Dropdown({ disabled = false, options = [], backgroundColorDisabled }: DropdownProps) {
  return (
    <StyledDropdown data-testid="dropdown" disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
}

export default Dropdown;
