import styled, { css } from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Container = styled.div`
  position: fixed;
  top: 12px;
  border-radius: 8px;
  background: #e7e7e7;
  display: flex;
  flex-direction: column;
  width: 563px;
  @media (max-width: 768px) {
    width: 350px;
    margin-top: 0px;
    position: relative;
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  background-color: #ffffff;
  border: transparent;
  border-radius: 8px;
  input {
    width: 100%;
    border: transparent;
    background-color: transparent;
    margin-left: 17px;
    color: #c6c6c6;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    &:focus {
      outline: none;
    }
  }
`;

export const SearchIcon = styled(HiMagnifyingGlass)`
  font-size: 21px;
  margin-right: 15px;
  color: #c6c6c6;
`;

export const SearchUsers = styled.div`
  z-index: 999;
  max-width: 563px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h4 {
    margin-left: 7px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #c5c5c5;
  }
  h3 {
    margin-left: 17px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
  }
  img {
    margin-left: 17px;
    width: 39px;
    height: 39px;
    border-radius: 304px;
    object-fit: cover;
  }
  ${(props) =>
    props.disabled &&
    css`
      display: none;
    `}
`;
