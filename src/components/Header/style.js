import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";

export const Container = styled.div`
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
img {
  width: 53px;
  height: 53px;
  border-radius: 26.5px;
  margin-right: 17px;
  background: pink;
}
`;

export const Icon = styled(BiChevronDown)`
  font-size: 41px;
  margin-right: 16px;
  color: #ffffff;
`;
