import { LikesContainer } from "./Post/style.js"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

export default function Likes({
  likers,
  likesCount,
  user,
  postId,
  configAuth,
}) {
  const { id } = user

  return (
    <LikesContainer data-test="like-btn">
      {likers && likers.some((l) => l.id === id) ? (
        <AiFillHeart size="2em" color="red" />
      ) : (
        <AiOutlineHeart size="2em" color="white" />
      )}
      <p data-test="counter">{likesCount} likes</p>
    </LikesContainer>
  )
}
