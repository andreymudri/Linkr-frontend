import styled from "styled-components";
import {Image} from "../../components/UserImage/style";

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
margin-left:20px;
`
export const ContainerImage = styled.div`
width: 50px;
height: 50px;
@media (max-width: 768px) {
  display:none;
}
`
export const UserPost = styled.div`
width: 611px;
height: 276px;
display:flex;
background: #171717;
border-radius: 16px;
margin-bottom: 16px;
padding: 20px;
@media (max-width: 768px) {
  width: 100vw;
}
`
export const UserImage = styled(Image)`
width: 50px;
height: 50px;
`
export const Username = styled.div`
width: 502px;
height: 23px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
color: #FFFFFF;
`
export const Description = styled.div`
width: 502px;
height: 52px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
color: #B7B7B7;
`
export const ContainerPreview = styled.div`
box-sizing: border-box;
width: 503px;
height: 155px;
border: 1px solid #4D4D4D;
border-radius: 11px;
display: flex;
justify-content: space-between;
`
export const ContainerTexts = styled.div`
width: 313px;
height: 125px;
display: flex;
margin-left: 15px;
margin-top: 15px;
flex-direction: column;
justify-content: space-between;
`
export const ContainerPhoto = styled.div`
width: 153.44px;
height: 154px;
border-radius: 0 11px 11px 0;
img{
    width: 153.44px;
    height: 154px;
    border-radius: 0 11px 11px 0;
}
`
export const PreviewText = styled.div`
width: 249.98px;
height: 38px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #CECECE;
`
export const PreviewDescription = styled.div`
width: 302.82px;
height: 39px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #9B9595;
`
export const Url = styled.div`
width: 302.82px;
height: 39px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #9B9595;
`
