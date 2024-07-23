// Text.tsx

import styled from "styled-components";
import { TextProps } from "./Text.types";

const sizeStyles = {
  small: "font-size: 0.875rem;",
  medium: "font-size: 1rem;",
  large: "font-size: 1.25rem;",
};

const StyledText = styled.p<{ size?: 'small' | 'medium' | 'large'; bold?: boolean; underline?: boolean; disabled?: boolean }>`
  ${({ size }) => size && sizeStyles[size]}
  ${({ bold }) => bold && "font-weight: bold;"}
  ${({ underline }) => underline && "text-decoration: underline;"}
  ${({ disabled }) => disabled && "color: #ccc;"}
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    font-size: 1.2rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

function Text({ content, size = 'medium', bold, underline, disabled }: TextProps) {
  return (
    <StyledText size={size} bold={bold} underline={underline} disabled={disabled}>
      {content}
    </StyledText>
  );
}

export default Text;
