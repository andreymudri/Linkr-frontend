import { useContext } from "react"
import postApi from "../services/postsApi.js"
import { LikesContainer } from "./Post/style.js"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import TokenContext from "../contexts/TokenContext.js"

export default function Likes({
  likers,
  likesCount,
  user,
  postId,
  configAuth,
}) {
  const { id } = user

  return (
    <LikesContainer>
      {likers && likers.some((l) => l.id === id) ? (
        <AiFillHeart size="2em" color="red" />
      ) : (
        <AiOutlineHeart size="2em" color="white" />
      )}
      <p>{likesCount} likes</p>
    </LikesContainer>
  )
}
