import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { Image } from "../UserImage/style";

export const Container = styled.div`
  z-index: 1000;
  top: 0px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #151515;
  width: 100vw;
  height: 72px;
  h2 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
    margin-left: 28px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled(Image)`
  margin-right: 17px;
`;

export const Icon = styled(BiChevronDown)`
  font-size: 41px;
  margin-right: 16px;
  color: #ffffff;
`;

export const Mobile = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
