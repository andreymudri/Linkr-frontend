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
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-left: 50px;
    font-size: 33px;
    line-height: 49px;
  }
`;

export const TrendingContainer = styled.div`
  position: absolute;
  width: 301px;
  height: 60vh;
  left: 877px;
  top: 230px;
  background: #171717;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    color: white;
    font-family: "Oswald";
    border-bottom: 2px solid #333333;
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
