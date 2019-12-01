import styled from "styled-components";

export default styled.input`
  box-shadow: none;
  border: 1px solid ${props => props.theme[props.primaryColor]};
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.theme[props.secondaryColor]};
  padding: 4px 10px;
  font-size: 1.2rem;
  outline: none;
  &:focus {
    border-color: ${props => props.theme[props.secondaryColor]};
  }
  width: 60%;
`;
