import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled: boolean; backgroundColorDisabled?: string }>`
  background-color: ${(props) => (props.disabled ? props.backgroundColorDisabled || "#ccc" : "#fff")};
  filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 100%; 
  max-width: 400px; 

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

function Img({ disabled = false, src, alt = "Image", backgroundColorDisabled }: ImgProps) {
  return (
    <StyledImg disabled={disabled} src={src} alt={alt} backgroundColorDisabled={backgroundColorDisabled} />
  );
}

export default Img;
