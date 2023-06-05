import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Mobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-top: 10px;
  }
`;

export const Title = styled.div`
width: 145px;
height: 64px;
margin-top: 53px;
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: #FFFFFF;
@media (max-width: 768px) {
  margin-left: 50px;
  font-size: 33px;
  line-height: 49px;
}
`;
