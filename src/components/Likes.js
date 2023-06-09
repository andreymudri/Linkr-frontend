import { Tooltip } from "react-tooltip"
import postApi from "../services/postsApi.js"
import { LikesContainer } from "./Post/style.js"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { useEffect, useState } from "react"

export default function Likes({
  likers,
  likesCount,
  user,
  postId,
  updatePostsList,
}) {
  const { id } = user
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  function randomNameNotYou() {
    if (likers) {
      const result = likers.filter((l) => l.id !== id)
      if (result.length === 1) {
        setName1(result[0].name)
      }
      if (result.length > 1) {
        setName1(result[0].name)
        setName2(result[1].name)
      }
    }
  }
  useEffect(() => {
    randomNameNotYou()
  }, [])
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
                ? `Você e ${name1} curtiram esse post`
                : likers.length === 1
                ? `Você curtiu esse post`
                : `Você,${name1} e outras ${
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
                ? `${name1}, ${name2} curtiram esse post`
                : likers.length === 1
                ? `${name1} curtiu esse post`
                : `${name1}, ${name2} e outras ${
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
