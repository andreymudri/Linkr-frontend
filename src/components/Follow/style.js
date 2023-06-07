import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 112px;
  height: 31px;
  background: ${(props) => (props.follow ? "#ffffff" : "#1877f2")};
  border-radius: 5px;
  border: transparent;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props.Follow ? "#1877f2" : "#ffffff")};
`;
