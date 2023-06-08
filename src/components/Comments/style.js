import styled from "styled-components";
import { Image } from "../UserImage/style";
import {IoPaperPlaneOutline} from "react-icons/io5";

export const CommentsContainer = styled.div`
display: ${(props) => (props.openComments ? "flex" : "none")};
flex-direction:column;
width: 611px;
// height: 100%;
height: 299px;
margin-bottom: 44px;
background: #1E1E1E;
border-radius: 16px;
padding: 10px;
overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
// background: orange;
`
export const UserComment = styled.div`
height: 68px;
width: 590px;
display: flex;
border-bottom: 1px solid #353535;
// background:blue;
`
export const CommentTexts = styled.div`
display: flex;
flex-direction:column;
height: 60px;
width: 520px;
margin-left: 10px;
// background: gray;
`
export const CommentUserName = styled.div`
display: flex;
align-items: center;
height: 30px;
// background: red;
h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #F3F3F3;
    margin-right: 5px;
}
p{   
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #565656;
      
}
`
export const Comment = styled.div`
width: 364px;
height: 17px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #ACACAC;
`
export const ContainerMakeComment = styled.div`
display: flex;
position:relative;
padding:10px;
justify-content: space-between;
// background:pink;
`
export const MakeComment = styled.input`
background: #252525;
border:none;
border-radius: 8px;
width: 510px;
height: 39px;
padding: 10px;
::placeholder {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    color: #575757;
}
`
export const IconComment = styled(IoPaperPlaneOutline)`
width: 20px;
height: 20px;
position: absolute;
right: 20px;
top: 20px;
color: #ffffff;
`
export const UserImage = styled(Image)`
  width: 50px;
  height: 50px;
`