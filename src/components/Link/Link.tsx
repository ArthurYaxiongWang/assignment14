import styled from "styled-components";
import { LinkProps } from "./Link.types";

const StyledLink = styled.a<{ bold?: boolean; disabled?: boolean }>`
  text-decoration: none;
  color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    text-decoration: underline;
  }
`;

function Link({ text, href, bold, disabled }: LinkProps) {
  return (
    <StyledLink href={disabled ? undefined : href} bold={bold} disabled={disabled}>
      {text}
    </StyledLink>
  );
}

export default Link;
