import styled from "styled-components";

const PrettyButton = styled.button<{ disabled: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: "#BF4F74";
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Button = () => {
  return <PrettyButton disabled={false}>Submit</PrettyButton>;
};

export default Button;
