import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  justify-content: start;
  max-height: 600px;
  transition: 0.7s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;

  & > div {
    cursor: pointer;
    border-radius: 0 0 0 20px;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #E0BEA2;
    transition: 0.7s;

    &:hover > svg {
      width: 20px;
      height: 19px;
      transition: 0.7s;
    }

    & > svg {
      transition: 0.7s;
      width: 14px;
      height: 13px;
    }
  }
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    margin-top: 10px;

    &:nth-child(2) {
      font-weight: 700;
    }
  }
`;

export const ProductsWrapper = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 70px;
`;

export const ProductButton = styled.button`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 81px 11px;
  text-transform: uppercase;
  color: white;
  background: #E0BEA2;
  border: none;
  margin-bottom: 20px;
  transition: 0.7s;
  cursor: pointer;

  &:hover {
    transition: 0.7s;
    box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.6);
  }
`;