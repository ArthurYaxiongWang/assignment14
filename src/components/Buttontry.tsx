import styled from "styled-components";

const StyledButton = styled.button`
  /* Add your styles here */
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const Buttontry = () => {
  return (
    <>
      {/* <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button> */}
      <StyledButton>Text</StyledButton>
    </>
  );
};

export default Buttontry;
