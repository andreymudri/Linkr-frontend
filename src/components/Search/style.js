import styled, { css } from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Container = styled.div`
  margin-top: ${(props) => (props.disabled ? "0" : "80px")};
  border-radius: 8px;
  background: #e7e7e7;
  display: flex;
  flex-direction: column;
`;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 563px;
  height: 45px;
  background-color: #ffffff;
  border: transparent;
  border-radius: 8px;
  input {
    width: 563px;
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
  width: 563px;
  height: 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h3 {
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
  }
  ${(props) =>
    props.visibility &&
    css`
      display: none;
    `}
`;
