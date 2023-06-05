import styled from "styled-components";
import {Image} from "../../components/UserImage/style";
import {FaPencilAlt} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'

export const ContainerOptions = styled.div`
display:flex;
justify-content:space-between;
width: 502px;
height: 23px;
`
export const Icons = styled.div`
width: 50px;
height: 23px;
`
export const TrashIcon = styled(AiFillDelete)`
width: 20px;
height: 20px;
color: #FFFFFF;
`
export const EditIcon = styled(FaPencilAlt)`
width: 16px;
height: 16px;
margin-right: 8px;
color: #FFFFFF;
`

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
width: 450px;
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
export const DescriptionInput = styled.input`
width: 502px;
height: 48px;
background-color: #fff;
border-radius: 5px;
border: none;
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
margin-bottom:8px;
`
export const PreviewDescription = styled.div`
width: 302.82px;
height: 100%;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #9B9595;
margin-bottom:8px;
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
export const PostContainer = styled.div`
width: 611px;
height: 100%;
position: relative;
margin-top: 29px;
margin-left: 200px;
background: #333333;
@media (max-width: 768px) {
  width: 100vw;
  margin-left:0px;
}
`
export const Title = styled.div`
  width: 300px;
  height: 64px;
  margin-top: 53px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 64px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-left: 50px;
    font-size: 33px;
    line-height: 49px;
  }
`