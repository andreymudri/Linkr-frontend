import { Tooltip } from "react-tooltip"
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
  function randomNameNotYou(i) {
    if (likers) {
      const result = likers.filter((l) => l.id !== id)
      return result[i].name
    }
  }
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
      <Tooltip
        id="likers"
        place="bottom"
        style={{
          backgroundColor: "#E7E7E7",
          color: "#505050",
          padding: "4px 8px",
        }}
      />
      {likers && likers.some((l) => l.id === id) ? (
        <>
          <AiFillHeart size="2em" color="red" onClick={dislikePost} />
          <p
            data-tooltip-id="likers"
            data-tooltip-content={
              likers.length === 2
                ? `Você e ${randomNameNotYou(0)} curtiram esse post`
                : likers.length === 1
                ? `Você curtiu esse post`
                : `Você,${randomNameNotYou(0)} e outras ${
                    Number(likesCount) - 2
                  } pessoas curtiram esse post`
            }
            data-test="counter"
          >
            {likesCount} likes
          </p>
        </>
      ) : (
        <>
          <AiOutlineHeart size="2em" color="white" onClick={likePost} />
          <p
            data-tooltip-id="likers"
            data-tooltip-content={
              !likers
                ? `0 likes`
                : likers.length === 2
                ? `${randomNameNotYou(0)}, ${randomNameNotYou(
                    1
                  )} curtiram esse post`
                : likers.length === 1
                ? `${randomNameNotYou(0)} curtiu esse post`
                : `${randomNameNotYou(0)}, ${randomNameNotYou(1)} e outras ${
                    Number(likesCount) - 2
                  } pessoas curtiram esse post`
            }
            data-test="counter"
          >
            {likesCount} likes
          </p>
        </>
      )}
    </LikesContainer>
  )
}
