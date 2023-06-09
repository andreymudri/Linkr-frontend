import styled from "styled-components"
import { Image } from "../../components/UserImage/style"

export const Container = styled.div`
  margin-top: 53px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`
export const MessageNoPost = styled.p`
  margin: 20px 0 0 300px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 64px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin: 30px auto 0 auto;
  }
`
export const PrincipalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
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
`

export const Mobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`

export const Title = styled.div`
  width: 145px;
  height: 64px;
  margin-left: 200px;
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
`

export const PublishContainer = styled.form`
  position: relative;
  width: 611px;
  height: 209px;
  margin-left: 200px;
  margin-top: 43px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0px;
  }
`
export const UserImage = styled(Image)`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 20px;
  top: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const Text = styled.div`
  position: absolute;
  width: 445px;
  height: 40px;
  left: 100px;
  top: 20px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #707070;
  @media (max-width: 768px) {
    width: 95%;
    left: 10px;
  }
`
export const Url = styled.input`
  position: absolute;
  width: 470px;
  height: 30px;
  left: 100px;
  top: 50px;
  background: #efefef;
  border-radius: 5px;
  border: none;
  padding: 13px;
  ::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
  }
  @media (max-width: 768px) {
    width: 95%;
    left: 10px;
  }
`
export const Description = styled.textarea`
  position: absolute;
  width: 470px;
  height: 66px;
  left: 100px;
  top: 90px;
  background: #efefef;
  border-radius: 5px;
  border: none;
  resize: none;
  padding: 13px;
  ::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
  }
  @media (max-width: 768px) {
    width: 95%;
    left: 10px;
  }
`
export const Button = styled.button`
  position: absolute;
  width: 112px;
  height: 31px;
  right: 42px;
  top: 160px;
  background: #1877f2;
  border-radius: 5px;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  @media (max-width: 768px) {
    right: 10px;
  }
`
