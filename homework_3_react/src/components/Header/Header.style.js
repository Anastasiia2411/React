import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  width: 300px;

  & > li {
    flex-grow: 1;
  }
`;

export const HeaderListLink = styled(Link)`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  transition: 0.7s;
  text-decoration: none;
  color: #E0BEA2;
  &:hover {
    color: #E0BEA2;
    font-size: 22px;
    transition: 0.7s;
  }
`;

export const HeaderIconList = styled.ul`
  list-style: none;
  display: flex;
  width: 150px;
  padding: 0;

  & > li {
    flex-grow: 1;

    & > a {
      color: white;
      text-decoration: none;
      position: relative;
    }
  }
`;

export const HeaderElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  margin-top: 20px;
  background-image: url(https://img5.goodfon.ru/wallpaper/nbig/c/ac/ilya-baranov-model-shatenka-sidit-v-chernom-poza-dzhinsy-kur.jpg);
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  text-align: end;
`;

export const ImageWrapperText = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 96px;
  line-height: 21px;
  color: white;
  padding-right: 70px;
`;

export const ImageWrapperParagraph = styled.p`
  display: inline-block;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 70px;
  line-height: 21px;
  color: white;
  margin-top: 40px;
  padding-right: 90px;
`;

export const HeaderIcon = styled.svg`
  width: 25px;
  height: 24px;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #E0BEA2;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: 50%;
  left: 50%;

  & > h3 {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 13px;
    line-height: 21px;
  }
`;

export const LikedProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: start;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  overflow-x: hidden;
  top: 7%;
  right: ${props => props.type === "liked" ? "15%" : "2%"};
  padding-top: 20px;
  padding-bottom: 20px;

  & > h3 {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 21px;
    color: #E0BEA2;
  }
`;
export const LikedProductsCloseBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  background-color: #E0BEA2;
  color: white;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const LikedProductsHeader = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LikedProductsPhoto = styled.img`
  width: 60px;
  height: 50px;
  object-fit: cover;
`;

export const LikedProductsInformContainer = styled.div`
  border: 1px solid #E0BEA2;
  display: flex;
  align-items: center;
  width: 95%;
  height: 70px;
  justify-content: space-evenly;

  & > h4 {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 21px;
    color: black;
  }

  & > p {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 21px;
    color: black;
  }
`;

export const LikedProductsText = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 21px;
  color: #E0BEA2;
  margin: 0 0 10px 0;
`;
export const ProductButton = styled.button`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  background-color: #E0BEA2;
  color: white;
  border: 1px solid #E0BEA2;
  transition: 0.7s;
  &:hover{
    transition: 0.7s;
    border: 1px solid #E0BEA2;
    background-color: white;
    color: black;
  }
`;
