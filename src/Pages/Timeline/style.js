import styled from "styled-components";
import {Image} from "../../components/UserImage/style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position:relative;
  overflow-y: auto; 
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const PrincipalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
export const TrendingContainer = styled.div`
position: absolute;
width: 301px;
height: 406px;
left: 877px;
top: 250px;
background: #171717;
border-radius: 16px;
`

export const Mobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const Title = styled.div`
width: 145px;
height: 64px;
position: absolute;
left: 241px;
top: 125px;
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: #FFFFFF;
@media (max-width: 768px) {
  position: absolute;
  width: 111px;
  height: 49px;
  left: 17px;
  top: 146px;
  font-size: 33px;
  line-height: 49px;
}
`;

export const PublishContainer = styled.div`
position: relative;
width: 611px;
height: 209px;
left: 241px;
top: 180px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
@media (max-width: 768px) {
  width: 100vw;
  left:0px;
  top: 100px;
}
`
export const UserImage = styled(Image)`
width: 50px;
height: 50px;
position: absolute;
left: 20px;
top: 20px;
@media (max-width: 768px) {
  display:none;
}
`
export const Text = styled.div`
position: absolute;
width: 445px;
height: 40px;
left: 100px;
top: 20px;
font-family: 'Lato';
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
background: #EFEFEF;
border-radius: 5px;
border:none;
padding:13px;
::placeholder {
  font-family: 'Lato';
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
background: #EFEFEF;
border-radius: 5px;
border:none;
resize: none;
padding:13px;
::placeholder {
  font-family: 'Lato';
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
background: #1877F2;
border-radius: 5px;
border:none;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
@media (max-width: 768px) {
  right: 10px;
}
`
export const PostContainer = styled.div`
width: 611px;
height: 100%;
position: relative;
top: 210px;
left: 241px;
background: #333333;
@media (max-width: 768px) {
  width: 100vw;
  left:0px;
  top: 130px;
}
`
export const Post = styled.div`
width: 611px;
height: 276px;
background: #171717;
border-radius: 16px;
margin-bottom: 16px;
@media (max-width: 768px) {
  width: 100vw;
}
`


