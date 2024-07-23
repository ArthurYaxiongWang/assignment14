import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledHeroImage = styled.div<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  color: ${(props) => (props.disabled ? "#999" : "black")};
  font-size: 16px;
  padding: 20px;
  border: 1px solid ${(props) => (props.disabled ? "#ccc" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 16px;
    padding: 18px;
  }
`;

function HeroImage({ disabled = false, label = "Hero Image", backgroundColorDisabled }: HeroImageProps) {
  return (
    <StyledHeroImage disabled={disabled} backgroundColorDisabled={backgroundColorDisabled}>
      {label}
    </StyledHeroImage>
  );
}

export default HeroImage;
