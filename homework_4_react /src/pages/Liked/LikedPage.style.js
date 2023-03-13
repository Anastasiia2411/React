import styled from "styled-components";

export const LikedHeader = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 23px;
  color: #E0BEA2;
  text-align: start;
`;

export const LikedParagraph = styled.p`
  position: absolute;
  top:40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 23px;
  color: #000000
`;

export const ParagraphWrapper = styled.div`
  position: relative;
  height: 65vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: 40px;
  padding-top: 20px;
  padding-left: 10px;
  gap:30px;
`;