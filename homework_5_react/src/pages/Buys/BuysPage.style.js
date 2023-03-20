import styled from "styled-components";

export const BuysHeader = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 23px;
  color: #E0BEA2;
  text-align: start;
`;

export const BuyButtonContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const BuysParagraph = styled.p`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  color: #000000
`;

export const BuysParagraphWrapper = styled.div`
  position: relative;
  height: 65vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  gap: 20px;
  overflow: scroll;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-top: 10px;
`;