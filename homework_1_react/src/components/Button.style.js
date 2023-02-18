import styled from "styled-components";

export const Button = styled.h1`
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  border-radius: 6px;
  background-color: ${props => props.backgroundColor};
  padding: 11px 20px;
  color: aliceblue;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.7s;
  max-width: 200px;

  &:hover {
    transition: 0.7s;
    color: ${props => props.backgroundColor};
    border: 1px solid ${props => props.backgroundColor};
    background: white;
  }
`;
