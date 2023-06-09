import styled from "styled-components"
import { Image } from "../../components/UserImage/style"
import { FaPencilAlt } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { AiOutlineComment } from "react-icons/ai"


export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 502px;
  height: 23px;
  // background: yellow;
  @media (max-width: 768px) {
    width: 90%;
  }
`
export const Icons = styled.div`
  width: 50px;
  height: 23px;
  // background:blue;
  @media (max-width: 768px) {
    width: 30%;
  }
`
export const TrashIcon = styled(AiFillDelete)`
  width: 20px;
  height: 20px;
  color: #ffffff;
`
export const EditIcon = styled(FaPencilAlt)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: #ffffff;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  // background: lightblue;
  @media (max-width: 768px) {
    width: 88%;
  }
`
export const ContainerImage = styled.div`
  width: 60px;
  height: 230px;
  // background: green;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 10%;
    margin-right: 10px;
    height: 95%;
  }
`
export const UserPost = styled.div`
  width: 611px;
  height: 276px;
  display: flex;
  position: relative;
  background: #171717;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: ${(props) => (props.openComments ? "0px" : "16px")};
  // background:pink;
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
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
  // background: orange;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 502px;
  height: 52px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
  @media (max-width: 768px) {
    width: 90%;
  }
`;


export const DescriptionInput = styled.input`
  width: 502px;
  height: 48px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const PostContainer = styled.div`
  width: 611px;
  height: 100%;
  position: relative;
  margin-top: 29px;
  margin-left: 200px;
  background: #333333;
  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0px;
  }
`
export const LikesContainer = styled.div`
  width: 50px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // background: red;
  p {
    color: white;
    font-size: 12px;
  }
`;
export const ContainerComments = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // background: orange;
  p {
    color: white;
    font-size: 10px;
  }
`
export const CommentIcon = styled(AiOutlineComment)`
  width: 20px;
  height: 20px;
  color: #ffffff;
`
export const NoPost = styled.div`
  width: 611px;
  height: 36px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-left: 50px;
    font-size: 33px;
    line-height: 49px;
  }
`
