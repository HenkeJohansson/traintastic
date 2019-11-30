import styled from "styled-components";

export default styled.button`
  font-family: sans-serif;
  font-size: 1.7rem;
  border: 1px solid ${props => props.theme[props.color]};
  color: ${props => props.theme[props.color]};
  border-radius: 5px;
  background-color: transparent;
  &:active {
    background-color: ${props => props.theme[props.color]};
    color: white;
  }
`;
