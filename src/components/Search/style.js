import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const ContainerSearch = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 563px;
  height: 45px;
  background-color: #ffffff;
  border: transparent;
  border-radius: 8px;
  input {
    border: transparent;
    background-color: transparent;
    margin-left: 17px;
    color: #c6c6c6;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
  }
`;
export const SearchIcon = styled(HiMagnifyingGlass)`
  font-size: 21px;
  margin-right: 15px;
  color: #c6c6c6;
`;
