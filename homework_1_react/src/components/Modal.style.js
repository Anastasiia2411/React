import styled from "styled-components";

export const ModalWrapper = styled.div`
  max-width: 600px;
  max-height: 400px;
  border-radius: 20px;
  background-color: #ead1dc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  letter-spacing: 1.26px;
  color: white;
  margin-left: 20px;
`;

export const DeleteButton = styled.button`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: white;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:${props => props.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ModalParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 22px;
  color: white;
  padding: 0 20px;
`;

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 2;
  top: 0;
  overflow: hidden;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;