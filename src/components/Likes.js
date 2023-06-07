import postApi from "../services/postsApi.js"
import { LikesContainer } from "./Post/style.js"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

export default function Likes({
  likers,
  likesCount,
  user,
  postId,
  updatePostsList,
}) {
  const { id } = user

  function likePost() {
    postApi
      .postLike(postId, id)
      .then((res) => updatePostsList())
      .catch((err) => console.log(err))
  }

  function dislikePost() {
    postApi
      .postDislike(postId, id)
      .then((res) => updatePostsList())
      .catch((err) => console.log(err))
  }
  return (
    <LikesContainer data-test="like-btn">
      {likers && likers.some((l) => l.id === id) ? (
        <AiFillHeart size="2em" color="red" onClick={dislikePost} />
      ) : (
        <AiOutlineHeart size="2em" color="white" onClick={likePost} />
      )}
      <p data-test="counter">{likesCount} likes</p>
    </LikesContainer>
  )
}
