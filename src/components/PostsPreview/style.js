import styled from "styled-components";


export const ContainerPreview = styled.div`
  box-sizing: border-box;
  width: 503px;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
  justify-content: space-between;
  // background-color: orange;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ContainerTexts = styled.div`
  box-sizing: border-box;
  width: 313px;
  height: 125px;
  display: flex;
  margin-left: 15px;
  margin-top: 15px;
  flex-direction: column;
  justify-content: space-between;
  // background: gray;
  @media (max-width: 768px) {
    width: 60%;
  }
`
export const ContainerPhoto = styled.div`
  width: 153.44px;
  height: 154px;
  border-radius: 0 11px 11px 0;
  // background: blue;
  img {
    width: 153.44px;
    height: 154px;
    border-radius: 0 11px 11px 0;
    object-fit: fill;
  }
  @media (max-width: 768px) {
    width: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`
export const PreviewText = styled.div`
  width: 249.98px;
  height: 38px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
  margin-bottom: 8px;
  // background: red;
  @media (max-width: 768px) {
    width: 90%;
  }
`
export const PreviewDescription = styled.div`
  width: 302.82px;
  height: 100%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #9b9595;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    width: 90%;
  }
`
export const Url = styled.div`
  width: 302.82px;
  height: 39px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #9b9595;
  // background: pink;
  @media (max-width: 768px) {
    width: 95%;
    height: 50px;
  }
`